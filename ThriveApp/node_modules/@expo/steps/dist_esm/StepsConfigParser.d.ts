import { Step } from '@expo/eas-build-job';
import { BuildFunction, BuildFunctionById } from './BuildFunction.js';
import { BuildFunctionGroup } from './BuildFunctionGroup.js';
import { BuildStepGlobalContext } from './BuildStepContext.js';
import { BuildStep } from './BuildStep.js';
import { AbstractConfigParser } from './AbstractConfigParser.js';
export declare class StepsConfigParser extends AbstractConfigParser {
    private readonly steps;
    constructor(ctx: BuildStepGlobalContext, { steps, externalFunctions, externalFunctionGroups, }: {
        steps: Step[];
        externalFunctions?: BuildFunction[];
        externalFunctionGroups?: BuildFunctionGroup[];
    });
    protected parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync(): Promise<{
        buildSteps: BuildStep[];
        buildFunctionById: BuildFunctionById;
    }>;
    private createBuildFunctionByIdMappingForExternalFunctions;
    private createBuildStepsFromStepConfig;
    private createBuildStepFromShellStepConfig;
    private createBuildStepsFromFunctionStepConfig;
    private createBuildStepOutputsFromDefinition;
    private static validateAllFunctionsExist;
}
