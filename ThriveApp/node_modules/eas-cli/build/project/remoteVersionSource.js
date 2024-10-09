"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAppVersionSourceIsSetAsync = exports.getBuildVersionName = exports.validateAppConfigForRemoteVersionSource = exports.validateBuildProfileVersionSettingsAsync = exports.ensureVersionSourceIsRemoteAsync = exports.AppVersionSourceUpdateOption = void 0;
const tslib_1 = require("tslib");
const eas_build_job_1 = require("@expo/eas-build-job");
const eas_json_1 = require("@expo/eas-json");
const core_1 = require("@oclif/core");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const log_1 = tslib_1.__importStar(require("../log"));
const prompts_1 = require("../prompts");
var AppVersionSourceUpdateOption;
(function (AppVersionSourceUpdateOption) {
    AppVersionSourceUpdateOption[AppVersionSourceUpdateOption["SET_TO_REMOTE"] = 0] = "SET_TO_REMOTE";
    AppVersionSourceUpdateOption[AppVersionSourceUpdateOption["SET_TO_LOCAL"] = 1] = "SET_TO_LOCAL";
    AppVersionSourceUpdateOption[AppVersionSourceUpdateOption["ABORT"] = 2] = "ABORT";
})(AppVersionSourceUpdateOption || (exports.AppVersionSourceUpdateOption = AppVersionSourceUpdateOption = {}));
async function ensureVersionSourceIsRemoteAsync(easJsonAccessor, { nonInteractive }) {
    let easJsonCliConfig = await eas_json_1.EasJsonUtils.getCliConfigAsync(easJsonAccessor);
    if (easJsonCliConfig?.appVersionSource === undefined) {
        easJsonCliConfig = await ensureAppVersionSourceIsSetAsync(easJsonAccessor, easJsonCliConfig ?? undefined, nonInteractive);
    }
    if (easJsonCliConfig?.appVersionSource === eas_json_1.AppVersionSource.REMOTE) {
        return;
    }
    if (nonInteractive) {
        throw new Error(`This project is not configured for using remote version source. Add ${chalk_1.default.bold('{"cli": { "appVersionSource": "remote" }}')} in eas.json or re-run this command without "--non-interactive" flag.`);
    }
    log_1.default.log(`The app version source defines whether the app version is stored locally in your project source (e.g. in app.json, Info.plist, or build.gradle) or remotely on EAS servers and only applied to the project at build time. To use this command, you will need to enable the remote version policy by adding  ${chalk_1.default.bold('{"cli": { "appVersionSource": "remote" }}')} in eas.json.`);
    // TODO: add link to docs
    const confirm = await (0, prompts_1.confirmAsync)({
        message: 'Do you want to set app version source to remote now?',
    });
    if (!confirm) {
        throw new Error('Aborting...');
    }
    await easJsonAccessor.readRawJsonAsync();
    easJsonAccessor.patch(easJsonRawObject => {
        easJsonRawObject.cli = { ...easJsonRawObject?.cli, appVersionSource: eas_json_1.AppVersionSource.REMOTE };
        return easJsonRawObject;
    });
    await easJsonAccessor.writeAsync();
    log_1.default.withTick('Updated eas.json');
}
exports.ensureVersionSourceIsRemoteAsync = ensureVersionSourceIsRemoteAsync;
async function validateBuildProfileVersionSettingsAsync(profileInfo, cliConfig, projectDir, flags) {
    if (cliConfig?.appVersionSource === undefined &&
        profileInfo.profile.autoIncrement !== 'version') {
        if (profileInfo.profile.autoIncrement !== true) {
            log_1.default.warn(`The field "cli.appVersionSource" is not set, but it will be required in the future. ${(0, log_1.learnMore)('https://docs.expo.dev/build-reference/app-versions/')}`);
        }
        else {
            const easJsonAccessor = eas_json_1.EasJsonAccessor.fromProjectPath(projectDir);
            cliConfig = await ensureAppVersionSourceIsSetAsync(easJsonAccessor, cliConfig, flags.nonInteractive);
        }
    }
    if (cliConfig?.appVersionSource !== eas_json_1.AppVersionSource.REMOTE) {
        return;
    }
    if (profileInfo.profile.autoIncrement === 'version') {
        throw new Error(`${chalk_1.default.bold('{"autoIncrement": "version"}')} is not supported when app version source is set to remote.`);
    }
}
exports.validateBuildProfileVersionSettingsAsync = validateBuildProfileVersionSettingsAsync;
function validateAppConfigForRemoteVersionSource(exp, platform) {
    if (typeof exp.runtimeVersion === 'object' && exp.runtimeVersion?.policy === 'nativeVersion') {
        throw new Error(`${chalk_1.default.bold('nativeVersion')} policy for ${chalk_1.default.bold('runtimeVersion')} is currently not supported when version source is set to remote. Switch policy e.g. to ${chalk_1.default.bold('appVersion')} or define version explicitly.`);
    }
    if (platform === eas_build_job_1.Platform.IOS && exp.ios?.buildNumber !== undefined) {
        log_1.default.warn(`${chalk_1.default.bold('ios.buildNumber')} field in app config is ignored when version source is set to remote, but this value will still be in the manifest available via ${chalk_1.default.bold('expo-constants')}. It's recommended to remove this value from app config.`);
    }
    if (platform === eas_build_job_1.Platform.ANDROID && exp.android?.versionCode !== undefined) {
        log_1.default.warn(`${chalk_1.default.bold('android.versionCode')} field in app config is ignored when version source is set to remote, but this value will still be in the manifest available via ${chalk_1.default.bold('expo-constants')}. It's recommended to remove this value from app config.`);
    }
}
exports.validateAppConfigForRemoteVersionSource = validateAppConfigForRemoteVersionSource;
function getBuildVersionName(platform) {
    if (platform === eas_build_job_1.Platform.ANDROID) {
        return 'versionCode';
    }
    else {
        return 'buildNumber';
    }
}
exports.getBuildVersionName = getBuildVersionName;
async function ensureAppVersionSourceIsSetAsync(easJsonAccessor, easJsonCliConfig, nonInteractive) {
    let selectOption, updateEasJson;
    if (nonInteractive) {
        log_1.default.warn(`The field "cli.appVersionSource" is not set, but it will be required in the future Proceeding with the default "local" value. ${(0, log_1.learnMore)('https://docs.expo.dev/build-reference/app-versions/')}`);
        selectOption = AppVersionSourceUpdateOption.SET_TO_LOCAL;
        updateEasJson = false;
    }
    else {
        log_1.default.log('Since EAS CLI version `12.0.0` explicitly specifying app version source is required. Please select your app version source:');
        log_1.default.log(`\t1) With the "local" app version source and "autoIncrement" option enabled, the build number/version code is sourced from local project files and incremented automatically if possible, by editing local project files. ${(0, log_1.learnMore)('https://docs.expo.dev/build-reference/app-versions/#local-version-source')}`);
        log_1.default.log(`\t2) With the "remote" app version source and "autoIncrement" option enabled, the build number/version code is stored on EAS servers and updated every time you create a new build. Remote auto-incrementation won't edit the version in the local project files, but instead, the new version will be injected automatically during the build process. ${(0, log_1.learnMore)('https://docs.expo.dev/build-reference/app-versions/#remote-version-source')}`);
        log_1.default.log(`Until now, this project has been using the "local" version source (which was the previous default). App version source can now be set for you automatically, or you can configure it manually by setting the "appVersionSource" value in your eas.json.`);
        selectOption = await (0, prompts_1.selectAsync)(`What would you like to do?`, [
            {
                title: 'Update eas.json to use the default "remote" version source (recommended)',
                value: AppVersionSourceUpdateOption.SET_TO_REMOTE,
            },
            {
                title: 'Update eas.json to use "local" version source (old behavior)',
                value: AppVersionSourceUpdateOption.SET_TO_LOCAL,
            },
            {
                title: "Don't update eas.json, abort command and configure manually",
                value: AppVersionSourceUpdateOption.ABORT,
            },
        ]);
        updateEasJson = true;
    }
    if (selectOption === AppVersionSourceUpdateOption.SET_TO_LOCAL) {
        if (updateEasJson) {
            await easJsonAccessor.readRawJsonAsync();
            easJsonAccessor.patch(easJsonRawObject => {
                easJsonRawObject.cli = {
                    ...easJsonRawObject?.cli,
                    appVersionSource: eas_json_1.AppVersionSource.LOCAL,
                };
                return easJsonRawObject;
            });
            await easJsonAccessor.writeAsync();
        }
        if (easJsonCliConfig) {
            easJsonCliConfig.appVersionSource = eas_json_1.AppVersionSource.LOCAL;
        }
        log_1.default.withTick('Updated eas.json');
    }
    else if (selectOption === AppVersionSourceUpdateOption.SET_TO_REMOTE) {
        if (updateEasJson) {
            await easJsonAccessor.readRawJsonAsync();
            easJsonAccessor.patch(easJsonRawObject => {
                easJsonRawObject.cli = {
                    ...easJsonRawObject?.cli,
                    appVersionSource: eas_json_1.AppVersionSource.REMOTE,
                };
                return easJsonRawObject;
            });
            await easJsonAccessor.writeAsync();
        }
        if (easJsonCliConfig) {
            easJsonCliConfig.appVersionSource = eas_json_1.AppVersionSource.REMOTE;
        }
        log_1.default.withTick('Updated eas.json');
    }
    else {
        log_1.default.warn(`You'll need to configure ${chalk_1.default.bold('appVersionSource')} manually. ${(0, log_1.learnMore)('https://docs.expo.dev/build-reference/app-versions/')}`);
        core_1.Errors.error('Aborted.', { exit: 1 });
    }
    return easJsonCliConfig;
}
exports.ensureAppVersionSourceIsSetAsync = ensureAppVersionSourceIsSetAsync;
