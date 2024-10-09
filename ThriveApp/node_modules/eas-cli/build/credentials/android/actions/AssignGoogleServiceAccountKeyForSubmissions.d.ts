import { CommonAndroidAppCredentialsFragment, GoogleServiceAccountKeyFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { AppLookupParams } from '../api/GraphqlClient';
export declare class AssignGoogleServiceAccountKeyForSubmissions {
    private readonly app;
    constructor(app: AppLookupParams);
    runAsync(ctx: CredentialsContext, googleServiceAccountKey: GoogleServiceAccountKeyFragment): Promise<CommonAndroidAppCredentialsFragment>;
}
