import { AndroidAppBuildCredentialsFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { AppLookupParams } from '../api/GraphqlClient';
export declare class RemoveKeystore {
    private readonly app;
    constructor(app: AppLookupParams);
    runAsync(ctx: CredentialsContext, buildCredentials: AndroidAppBuildCredentialsFragment): Promise<void>;
    displayWarning(): void;
}
