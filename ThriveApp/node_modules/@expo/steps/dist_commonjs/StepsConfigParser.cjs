"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsConfigParser = void 0;
const node_assert_1 = __importDefault(require("node:assert"));
const eas_build_job_1 = require("@expo/eas-build-job");
const BuildFunctionGroup_js_1 = require("./BuildFunctionGroup.cjs");
const BuildStep_js_1 = require("./BuildStep.cjs");
const AbstractConfigParser_js_1 = require("./AbstractConfigParser.cjs");
const errors_js_1 = require("./errors.cjs");
const BuildStepOutput_js_1 = require("./BuildStepOutput.cjs");
class StepsConfigParser extends AbstractConfigParser_js_1.AbstractConfigParser {
    constructor(ctx, { steps, externalFunctions, externalFunctionGroups, }) {
        super(ctx, {
            externalFunctions,
            externalFunctionGroups,
        });
        this.steps = steps;
    }
    async parseConfigToBuildStepsAndBuildFunctionByIdMappingAsync() {
        var _a;
        const validatedSteps = (0, eas_build_job_1.validateSteps)(this.steps);
        StepsConfigParser.validateAllFunctionsExist(validatedSteps, {
            externalFunctionIds: this.getExternalFunctionFullIds(),
            externalFunctionGroupIds: this.getExternalFunctionGroupFullIds(),
        });
        const buildFunctionById = this.createBuildFunctionByIdMappingForExternalFunctions();
        const buildFunctionGroupById = (0, BuildFunctionGroup_js_1.createBuildFunctionGroupByIdMapping)((_a = this.externalFunctionGroups) !== null && _a !== void 0 ? _a : []);
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
        if ((0, eas_build_job_1.isStepShellStep)(stepConfig)) {
            return [this.createBuildStepFromShellStepConfig(stepConfig)];
        }
        else if ((0, eas_build_job_1.isStepFunctionStep)(stepConfig)) {
            return this.createBuildStepsFromFunctionStepConfig(stepConfig, {
                buildFunctionById,
                buildFunctionGroupById,
            });
        }
        else {
            throw new errors_js_1.BuildConfigError('Invalid job step configuration detected. Step must be shell or function step');
        }
    }
    createBuildStepFromShellStepConfig(step) {
        const id = BuildStep_js_1.BuildStep.getNewId(step.id);
        const displayName = BuildStep_js_1.BuildStep.getDisplayName({ id, name: step.name, command: step.run });
        const outputs = step.outputs && this.createBuildStepOutputsFromDefinition(step.outputs, displayName);
        return new BuildStep_js_1.BuildStep(this.ctx, {
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
        (0, node_assert_1.default)(buildFunction, 'function ID must be ID of function or function group');
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
            return new BuildStepOutput_js_1.BuildStepOutput(this.ctx, {
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
            throw new errors_js_1.BuildConfigError(`Calling non-existent functions: ${nonExistentFunctionsOrFunctionGroups
                .map((f) => `"${f}"`)
                .join(', ')}.`);
        }
    }
}
exports.StepsConfigParser = StepsConfigParser;
//# sourceMappingURL=StepsConfigParser.js.map