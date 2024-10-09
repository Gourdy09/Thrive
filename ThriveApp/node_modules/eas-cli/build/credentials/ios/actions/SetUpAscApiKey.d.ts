import { AppStoreApiKeyPurpose } from './AscApiKeyUtils';
import { CommonIosAppCredentialsFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { AppLookupParams } from '../api/graphql/types/AppLookupParams';
export declare enum SetupAscApiKeyChoice {
    GENERATE = "GENERATE",
    USE_EXISTING = "USE_EXISTING"
}
export declare class SetUpAscApiKey {
    private readonly app;
    private readonly purpose;
    choices: {
        title: string;
        value: string;
    }[];
    constructor(app: AppLookupParams, purpose: AppStoreApiKeyPurpose);
    runAsync(ctx: CredentialsContext): Promise<CommonIosAppCredentialsFragment>;
    private doBestEffortAutoselectAsync;
    private isAscApiKeySetupAsync;
    private processChoicesAsync;
}
