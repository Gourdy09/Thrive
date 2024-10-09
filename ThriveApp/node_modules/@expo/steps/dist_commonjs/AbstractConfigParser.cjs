"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractConfigParser = void 0;
const BuildWorkflow_js_1 = require("./BuildWorkflow.cjs");
const BuildWorkflowValidator_js_1 = require("./BuildWorkflowValidator.cjs");
const errors_js_1 = require("./errors.cjs");
const duplicates_js_1 = require("./utils/expodash/duplicates.cjs");
const uniq_js_1 = require("./utils/expodash/uniq.cjs");
class AbstractConfigParser {
    constructor(ctx, { externalFunctions, externalFunctionGroups, }) {
        this.ctx = ctx;
        this.validateExternalFunctions(externalFunctions);
        this.validateExternalFunctionGroups(externalFunctionGroups);
        this.externalFunctions = externalFunctions;
        this.externalFunctionGroups = externalFunctionGroups;
    }
    async parseAsync() {
        const { buildSteps, buildFunctionById } = await this.parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync();
        const workflow = new BuildWorkflow_js_1.BuildWorkflow(this.ctx, { buildSteps, buildFunctions: buildFunctionById });
        await new BuildWorkflowValidator_js_1.BuildWorkflowValidator(workflow).validateAsync();
        return workflow;
    }
    validateExternalFunctions(externalFunctions) {
        if (externalFunctions === undefined) {
            return;
        }
        const externalFunctionIds = externalFunctions.map((f) => f.getFullId());
        const duplicatedExternalFunctionIds = (0, duplicates_js_1.duplicates)(externalFunctionIds);
        if (duplicatedExternalFunctionIds.length === 0) {
            return;
        }
        throw new errors_js_1.BuildConfigError(`Provided external functions with duplicated IDs: ${duplicatedExternalFunctionIds
            .map((id) => `"${id}"`)
            .join(', ')}`);
    }
    validateExternalFunctionGroups(externalFunctionGroups) {
        if (externalFunctionGroups === undefined) {
            return;
        }
        const externalFunctionGroupIds = externalFunctionGroups.map((f) => f.getFullId());
        const duplicatedExternalFunctionGroupIds = (0, duplicates_js_1.duplicates)(externalFunctionGroupIds);
        if (duplicatedExternalFunctionGroupIds.length === 0) {
            return;
        }
        throw new errors_js_1.BuildConfigError(`Provided external function groups with duplicated IDs: ${duplicatedExternalFunctionGroupIds
            .map((id) => `"${id}"`)
            .join(', ')}`);
    }
    getExternalFunctionFullIds() {
        if (this.externalFunctions === undefined) {
            return [];
        }
        const ids = this.externalFunctions.map((f) => f.getFullId());
        return (0, uniq_js_1.uniq)(ids);
    }
    getExternalFunctionGroupFullIds() {
        if (this.externalFunctionGroups === undefined) {
            return [];
        }
        const ids = this.externalFunctionGroups.map((f) => f.getFullId());
        return (0, uniq_js_1.uniq)(ids);
    }
}
exports.AbstractConfigParser = AbstractConfigParser;
//# sourceMappingURL=AbstractConfigParser.js.map