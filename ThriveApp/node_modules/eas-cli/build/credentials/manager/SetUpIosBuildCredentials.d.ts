import { Action } from './HelperActions';
import { ManageIos } from './ManageIos';
export declare class SetUpIosBuildCredentials extends ManageIos {
    private readonly setUpBuildCredentialsWithProfileNameFromFlag;
    constructor(callingAction: Action, projectDir: string, setUpBuildCredentialsWithProfileNameFromFlag: string);
    runAsync(): Promise<void>;
}
