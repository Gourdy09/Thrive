import { BuildWorkflow } from './BuildWorkflow.js';
import { BuildWorkflowValidator } from './BuildWorkflowValidator.js';
import { BuildConfigError } from './errors.js';
import { duplicates } from './utils/expodash/duplicates.js';
import { uniq } from './utils/expodash/uniq.js';
export class AbstractConfigParser {
    constructor(ctx, { externalFunctions, externalFunctionGroups, }) {
        this.ctx = ctx;
        this.validateExternalFunctions(externalFunctions);
        this.validateExternalFunctionGroups(externalFunctionGroups);
        this.externalFunctions = externalFunctions;
        this.externalFunctionGroups = externalFunctionGroups;
    }
    async parseAsync() {
        const { buildSteps, buildFunctionById } = await this.parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync();
        const workflow = new BuildWorkflow(this.ctx, { buildSteps, buildFunctions: buildFunctionById });
        await new BuildWorkflowValidator(workflow).validateAsync();
        return workflow;
    }
    validateExternalFunctions(externalFunctions) {
        if (externalFunctions === undefined) {
            return;
        }
        const externalFunctionIds = externalFunctions.map((f) => f.getFullId());
        const duplicatedExternalFunctionIds = duplicates(externalFunctionIds);
        if (duplicatedExternalFunctionIds.length === 0) {
            return;
        }
        throw new BuildConfigError(`Provided external functions with duplicated IDs: ${duplicatedExternalFunctionIds
            .map((id) => `"${id}"`)
            .join(', ')}`);
    }
    validateExternalFunctionGroups(externalFunctionGroups) {
        if (externalFunctionGroups === undefined) {
            return;
        }
        const externalFunctionGroupIds = externalFunctionGroups.map((f) => f.getFullId());
        const duplicatedExternalFunctionGroupIds = duplicates(externalFunctionGroupIds);
        if (duplicatedExternalFunctionGroupIds.length === 0) {
            return;
        }
        throw new BuildConfigError(`Provided external function groups with duplicated IDs: ${duplicatedExternalFunctionGroupIds
            .map((id) => `"${id}"`)
            .join(', ')}`);
    }
    getExternalFunctionFullIds() {
        if (this.externalFunctions === undefined) {
            return [];
        }
        const ids = this.externalFunctions.map((f) => f.getFullId());
        return uniq(ids);
    }
    getExternalFunctionGroupFullIds() {
        if (this.externalFunctionGroups === undefined) {
            return [];
        }
        const ids = this.externalFunctionGroups.map((f) => f.getFullId());
        return uniq(ids);
    }
}
//# sourceMappingURL=AbstractConfigParser.js.map