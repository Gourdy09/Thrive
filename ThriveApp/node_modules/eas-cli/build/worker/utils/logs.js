"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatWorkerDeploymentJson = exports.formatWorkerDeploymentTable = exports.getDashboardUrl = exports.getDeploymentUrlFromFullName = exports.EXPO_BASE_DOMAIN = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const formatFields_1 = tslib_1.__importDefault(require("../../utils/formatFields"));
exports.EXPO_BASE_DOMAIN = process.env.EXPO_STAGING ? 'staging.expo' : 'expo';
function getDeploymentUrlFromFullName(deploymentFullName) {
    return `https://${deploymentFullName}.${exports.EXPO_BASE_DOMAIN}.app`;
}
exports.getDeploymentUrlFromFullName = getDeploymentUrlFromFullName;
function getDashboardUrl(projectId) {
    return `https://${exports.EXPO_BASE_DOMAIN}.dev/projects/${projectId}/hosting/deployments`;
}
exports.getDashboardUrl = getDashboardUrl;
function formatWorkerDeploymentTable(data) {
    const fields = [
        { label: 'Dashboard', value: getDashboardUrl(data.projectId) },
        { label: 'Deployment URL', value: data.deployment.url },
    ];
    if (data.aliases?.length) {
        const alias = data.aliases.filter(Boolean)[0];
        if (alias) {
            fields.push({ label: 'Alias URL', value: alias.url });
        }
    }
    if (data.production) {
        fields.push({ label: 'Production URL', value: data.production.url });
    }
    const lastUrlField = fields[fields.length - 1];
    lastUrlField.value = chalk_1.default.cyan(lastUrlField.value);
    return (0, formatFields_1.default)(fields);
}
exports.formatWorkerDeploymentTable = formatWorkerDeploymentTable;
function formatWorkerDeploymentJson(data) {
    const aliases = !data.aliases
        ? []
        : data.aliases.filter(Boolean);
    return {
        dashboardUrl: getDashboardUrl(data.projectId),
        identifier: data.deployment.deploymentIdentifier,
        url: data.deployment.url,
        aliases: !aliases.length
            ? undefined
            : aliases.map(alias => ({ id: alias.id, url: alias.url, name: alias.aliasName })),
        production: !data.production
            ? undefined
            : {
                id: data.production.id,
                url: data.production.url,
            },
    };
}
exports.formatWorkerDeploymentJson = formatWorkerDeploymentJson;
