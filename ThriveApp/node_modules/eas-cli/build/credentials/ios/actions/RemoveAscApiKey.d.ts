import { AccountFragment, AppStoreConnectApiKeyFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class SelectAndRemoveAscApiKey {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
export declare class RemoveAscApiKey {
    private readonly ascApiKey;
    constructor(ascApiKey: AppStoreConnectApiKeyFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
