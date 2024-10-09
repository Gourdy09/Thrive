import assert from 'node:assert';
import { isStepFunctionStep, isStepShellStep, validateSteps, } from '@expo/eas-build-job';
import { createBuildFunctionGroupByIdMapping, } from './BuildFunctionGroup.js';
import { BuildStep } from './BuildStep.js';
import { AbstractConfigParser } from './AbstractConfigParser.js';
import { BuildConfigError } from './errors.js';
import { BuildStepOutput } from './BuildStepOutput.js';
export class StepsConfigParser extends AbstractConfigParser {
    constructor(ctx, { steps, externalFunctions, externalFunctionGroups, }) {
        super(ctx, {
            externalFunctions,
            externalFunctionGroups,
        });
        this.steps = steps;
    }
    async parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync() {
        var _a;
        const validatedSteps = validateSteps(this.steps);
        StepsConfigParser.validateAllFunctionsExist(validatedSteps, {
            externalFunctionIds: this.getExternalFunctionFullIds(),
            externalFunctionGroupIds: this.getExternalFunctionGroupFullIds(),
        });
        const buildFunctionById = this.createBuildFunctionByIdMappingForExternalFunctions();
        const buildFunctionGroupById = createBuildFunctionGroupByIdMapping((_a = this.externalFunctionGroups) !== null && _a !== void 0 ? _a : []);
        const buildSteps = [];
        for (const stepConfig of validatedSteps) {
            buildSteps.push(...this.createBuildStepsFromStepConfig(stepConfig, {
                buildFunctionById,
                buildFunctionGroupById,
            }));
        }
        return {
            buildSteps,
            buildFunctionById,
        };
    }
    createBuildFunctionByIdMappingForExternalFunctions() {
        const result = {};
        if (this.externalFunctions === undefined) {
            return result;
        }
        for (const buildFunction of this.externalFunctions) {
            const fullId = buildFunction.getFullId();
            result[fullId] = buildFunction;
        }
        return result;
    }
    createBuildStepsFromStepConfig(stepConfig, { buildFunctionById, buildFunctionGroupById, }) {
        if (isStepShellStep(stepConfig)) {
            return [this.createBuildStepFromShellStepConfig(stepConfig)];
        }
        else if (isStepFunctionStep(stepConfig)) {
            return this.createBuildStepsFromFunctionStepConfig(stepConfig, {
                buildFunctionById,
                buildFunctionGroupById,
            });
        }
        else {
            throw new BuildConfigError('Invalid job step configuration detected. Step must be shell or function step');
        }
    }
    createBuildStepFromShellStepConfig(step) {
        const id = BuildStep.getNewId(step.id);
        const displayName = BuildStep.getDisplayName({ id, name: step.name, command: step.run });
        const outputs = step.outputs && this.createBuildStepOutputsFromDefinition(step.outputs, displayName);
        return new BuildStep(this.ctx, {
            id,
            outputs,
            name: step.name,
            displayName,
            workingDirectory: step.working_directory,
            shell: step.shell,
            command: step.run,
            env: step.env,
            ifCondition: step.if,
        });
    }
    createBuildStepsFromFunctionStepConfig(step, { buildFunctionById, buildFunctionGroupById, }) {
        const functionId = step.uses;
        const maybeFunctionGroup = buildFunctionGroupById[functionId];
        if (maybeFunctionGroup) {
            // TODO: allow to set id, name, working_directory, shell, env and if for function groups
            return maybeFunctionGroup.createBuildStepsFromFunctionGroupCall(this.ctx, {
                callInputs: step.with,
            });
        }
        const buildFunction = buildFunctionById[functionId];
        assert(buildFunction, 'function ID must be ID of function or function group');
        return [
            buildFunction.createBuildStepFromFunctionCall(this.ctx, {
                id: step.id,
                name: step.name,
                callInputs: step.with,
                workingDirectory: step.working_directory,
                shell: step.shell,
                env: step.env,
                ifCondition: step.if,
            }),
        ];
    }
    createBuildStepOutputsFromDefinition(stepOutputs, stepDisplayName) {
        return stepOutputs.map((entry) => {
            var _a;
            return new BuildStepOutput(this.ctx, {
                id: entry.name,
                stepDisplayName,
                required: (_a = entry.required) !== null && _a !== void 0 ? _a : true,
            });
        });
    }
    static validateAllFunctionsExist(steps, { externalFunctionIds, externalFunctionGroupIds, }) {
        const calledFunctionsOrFunctionGroupsSet = new Set();
        for (const step of steps) {
            if (step.uses) {
                calledFunctionsOrFunctionGroupsSet.add(step.uses);
            }
        }
        const calledFunctionsOrFunctionGroup = Array.from(calledFunctionsOrFunctionGroupsSet);
        const externalFunctionIdsSet = new Set(externalFunctionIds);
        const externalFunctionGroupsIdsSet = new Set(externalFunctionGroupIds);
        const nonExistentFunctionsOrFunctionGroups = calledFunctionsOrFunctionGroup.filter((calledFunctionOrFunctionGroup) => {
            return (!externalFunctionIdsSet.has(calledFunctionOrFunctionGroup) &&
                !externalFunctionGroupsIdsSet.has(calledFunctionOrFunctionGroup));
        });
        if (nonExistentFunctionsOrFunctionGroups.length > 0) {
            throw new BuildConfigError(`Calling non-existent functions: ${nonExistentFunctionsOrFunctionGroups
                .map((f) => `"${f}"`)
                .join(', ')}.`);
        }
    }
}
//# sourceMappingURL=StepsConfigParser.js.map