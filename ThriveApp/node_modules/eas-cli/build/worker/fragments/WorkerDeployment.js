"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerDeploymentFragmentNode = void 0;
const tslib_1 = require("tslib");
const graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
exports.WorkerDeploymentFragmentNode = (0, graphql_tag_1.default) `
  fragment WorkerDeploymentFragment on WorkerDeployment {
    id
    url
    deploymentIdentifier
    deploymentDomain
    createdAt
  }
`;
