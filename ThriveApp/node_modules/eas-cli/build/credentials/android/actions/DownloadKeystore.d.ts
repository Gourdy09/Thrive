import { AndroidAppBuildCredentialsFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { AppLookupParams } from '../api/GraphqlClient';
interface DownloadKeystoreOptions {
    app: AppLookupParams;
    displaySensitiveInformation?: boolean;
    outputPath?: string;
}
export declare class DownloadKeystore {
    private readonly options;
    constructor(options: DownloadKeystoreOptions);
    runAsync(ctx: CredentialsContext, buildCredentials: AndroidAppBuildCredentialsFragment): Promise<void>;
}
export declare class BackupKeystore {
    private readonly app;
    constructor(app: AppLookupParams);
    runAsync(ctx: CredentialsContext, buildCredentials: AndroidAppBuildCredentialsFragment): Promise<void>;
}
export {};
