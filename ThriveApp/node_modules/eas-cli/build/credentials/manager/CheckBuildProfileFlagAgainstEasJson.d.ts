import { Platform } from '@expo/eas-build-job';
import { BuildProfile } from '@expo/eas-json';
export declare class CheckBuildProfileFlagAgainstEasJson<T extends Platform> {
    private readonly platform;
    private readonly profileNameFromFlag;
    private readonly easJsonAccessor;
    constructor(projectDir: string, platform: T, profileNameFromFlag: string);
    runAsync(): Promise<BuildProfile<T>>;
    getProfileNameFromEasConfigAsync(): Promise<string>;
}
