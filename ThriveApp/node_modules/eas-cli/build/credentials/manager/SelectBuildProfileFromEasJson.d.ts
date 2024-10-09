import { Platform } from '@expo/eas-build-job';
import { BuildProfile } from '@expo/eas-json';
export declare class SelectBuildProfileFromEasJson<T extends Platform> {
    private readonly platform;
    private readonly easJsonAccessor;
    constructor(projectDir: string, platform: T);
    runAsync(): Promise<BuildProfile<T>>;
    getProfileNameFromEasConfigAsync(): Promise<string>;
}
