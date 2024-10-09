import { ExpoConfig } from '@expo/config';
import { Platform } from '@expo/eas-build-job';
import { EasJson, EasJsonAccessor } from '@expo/eas-json';
import { BuildFlags } from '../build/types';
import { ProfileData } from '../utils/profiles';
export declare enum AppVersionSourceUpdateOption {
    SET_TO_REMOTE = 0,
    SET_TO_LOCAL = 1,
    ABORT = 2
}
export declare function ensureVersionSourceIsRemoteAsync(easJsonAccessor: EasJsonAccessor, { nonInteractive }: {
    nonInteractive: boolean;
}): Promise<void>;
export declare function validateBuildProfileVersionSettingsAsync(profileInfo: ProfileData<'build'>, cliConfig: EasJson['cli'], projectDir: string, flags: BuildFlags): Promise<void>;
export declare function validateAppConfigForRemoteVersionSource(exp: ExpoConfig, platform: Platform): void;
export declare function getBuildVersionName(platform: Platform): string;
export declare function ensureAppVersionSourceIsSetAsync(easJsonAccessor: EasJsonAccessor, easJsonCliConfig: EasJson['cli'] | undefined, nonInteractive: boolean): Promise<EasJson['cli'] | undefined>;
