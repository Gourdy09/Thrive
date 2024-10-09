import { AndroidAppBuildCredentialsFragment } from '../../graphql/generated';
import { AppLookupParams } from '../android/api/GraphqlClient';
import { CredentialsContext } from '../context';
export declare class CreateAndroidBuildCredentials {
    private readonly app;
    constructor(app: AppLookupParams);
    runAsync(ctx: CredentialsContext): Promise<AndroidAppBuildCredentialsFragment>;
}
