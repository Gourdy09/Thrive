"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStoreConnectApiKeyQuery = void 0;
const tslib_1 = require("tslib");
const graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
const client_1 = require("../client");
exports.AppStoreConnectApiKeyQuery = {
    async getByIdAsync(graphqlClient, ascApiKeyId) {
        const data = await (0, client_1.withErrorHandlingAsync)(graphqlClient
            .query((0, graphql_tag_1.default) `
            query AppStoreConnectApiKeyById($ascApiKeyId: ID!) {
              appStoreConnectApiKey {
                byId(id: $ascApiKeyId) {
                  id
                  issuerIdentifier
                  keyIdentifier
                  keyP8
                }
              }
            }
          `, { ascApiKeyId }, {
            additionalTypenames: ['AppStoreConnectApiKey'],
        })
            .toPromise());
        const key = data.appStoreConnectApiKey.byId;
        return {
            issuerIdentifier: key.issuerIdentifier,
            keyIdentifier: key.keyIdentifier,
            keyP8: key.keyP8,
        };
    },
};
