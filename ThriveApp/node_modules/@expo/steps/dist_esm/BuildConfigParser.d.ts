import { BuildFunction, BuildFunctionById } from './BuildFunction.js';
import { BuildStep } from './BuildStep.js';
import { BuildStepGlobalContext } from './BuildStepContext.js';
import { BuildFunctionGroup } from './BuildFunctionGroup.js';
import { AbstractConfigParser } from './AbstractConfigParser.js';
export declare class BuildConfigParser extends AbstractConfigParser {
    private readonly configPath;
    constructor(ctx: BuildStepGlobalContext, { configPath, externalFunctions, externalFunctionGroups, }: {
        configPath: string;
        externalFunctions?: BuildFunction[];
        externalFunctionGroups?: BuildFunctionGroup[];
    });
    protected parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync(): Promise<{
        buildSteps: BuildStep[];
        buildFunctionById: BuildFunctionById;
    }>;
    private createBuildStepFromConfig;
    private createBuildStepFromBuildStepCommandRun;
    private createBuildStepFromBuildStepBareCommandRun;
    private createBuildStepsFromBuildStepFunctionGroupCall;
    private createBuildStepsFromBuildStepBareFunctionGroupCall;
    private createBuildStepFromBuildStepBareFunctionCall;
    private createBuildStepsFromBareBuildStepFunctionOrBareBuildStepFunctionGroupCall;
    private createBuildStepsFromBuildStepFunctionOrBuildStepFunctionGroupCall;
    private createBuildStepFromBuildStepFunctionCall;
    private createBuildFunctionsFromConfig;
    private createBuildFunctionFromConfig;
    private createBuildStepInputsFromDefinition;
    private createBuildStepInputProvidersFromBuildFunctionInputs;
    private createBuildStepOutputsFromDefinition;
    private createBuildStepOutputProvidersFromBuildFunctionOutputs;
    private mergeBuildFunctionsWithExternal;
}
