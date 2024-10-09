"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleServiceAccountKeyQuery = void 0;
const tslib_1 = require("tslib");
const graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
const client_1 = require("../client");
exports.GoogleServiceAccountKeyQuery = {
    async getByIdAsync(graphqlClient, ascApiKeyId) {
        const data = await (0, client_1.withErrorHandlingAsync)(graphqlClient
            .query((0, graphql_tag_1.default) `
            query GoogleServiceAccountKeyById($ascApiKeyId: ID!) {
              googleServiceAccountKey {
                byId(id: $ascApiKeyId) {
                  id
                  keyJson
                }
              }
            }
          `, { ascApiKeyId }, {
            additionalTypenames: ['GoogleServiceAccountKey'],
        })
            .toPromise());
        return { keyJson: data.googleServiceAccountKey.byId.keyJson };
    },
};
