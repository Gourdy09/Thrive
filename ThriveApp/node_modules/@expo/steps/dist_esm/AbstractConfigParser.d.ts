import { BuildFunction, BuildFunctionById } from './BuildFunction.js';
import { BuildFunctionGroup } from './BuildFunctionGroup.js';
import { BuildStep } from './BuildStep.js';
import { BuildStepGlobalContext } from './BuildStepContext.js';
import { BuildWorkflow } from './BuildWorkflow.js';
export declare abstract class AbstractConfigParser {
    protected readonly ctx: BuildStepGlobalContext;
    protected readonly externalFunctions?: BuildFunction[];
    protected readonly externalFunctionGroups?: BuildFunctionGroup[];
    constructor(ctx: BuildStepGlobalContext, { externalFunctions, externalFunctionGroups, }: {
        externalFunctions?: BuildFunction[];
        externalFunctionGroups?: BuildFunctionGroup[];
    });
    parseAsync(): Promise<BuildWorkflow>;
    protected abstract parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync(): Promise<{
        buildSteps: BuildStep[];
        buildFunctionById: BuildFunctionById;
    }>;
    private validateExternalFunctions;
    private validateExternalFunctionGroups;
    protected getExternalFunctionFullIds(): string[];
    protected getExternalFunctionGroupFullIds(): string[];
}
