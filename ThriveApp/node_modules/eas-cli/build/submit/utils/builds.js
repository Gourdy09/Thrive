"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecentBuildsForSubmissionAsync = void 0;
const generated_1 = require("../../graphql/generated");
const BuildQuery_1 = require("../../graphql/queries/BuildQuery");
async function getRecentBuildsForSubmissionAsync(graphqlClient, platform, appId, { limit = 1 } = {}) {
    const allowedStatuses = [
        generated_1.BuildStatus.New,
        generated_1.BuildStatus.InQueue,
        generated_1.BuildStatus.InProgress,
        generated_1.BuildStatus.Finished,
    ];
    const buildsPromises = [];
    for (const buildStatus of allowedStatuses) {
        buildsPromises.push(BuildQuery_1.BuildQuery.viewBuildsOnAppAsync(graphqlClient, {
            appId,
            limit,
            offset: 0,
            filter: {
                platform,
                distribution: generated_1.DistributionType.Store,
                status: buildStatus,
            },
        }));
    }
    const builds = (await Promise.all(buildsPromises)).reduce((acc, value) => acc.concat(value), []);
    builds.sort((buildA, buildB) => (buildA.createdAt > buildB.createdAt ? -1 : 1));
    return builds.slice(0, limit);
}
exports.getRecentBuildsForSubmissionAsync = getRecentBuildsForSubmissionAsync;
