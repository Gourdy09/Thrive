import { Action } from './HelperActions';
import { ManageAndroid } from './ManageAndroid';
export declare class SetUpAndroidBuildCredentials extends ManageAndroid {
    private readonly setUpBuildCredentialsWithProfileNameFromFlag;
    constructor(callingAction: Action, projectDir: string, setUpBuildCredentialsWithProfileNameFromFlag: string);
    runAsync(): Promise<void>;
}
