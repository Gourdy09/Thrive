import { AccountFragment, GoogleServiceAccountKeyFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class SelectAndRemoveGoogleServiceAccountKey {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
export declare class RemoveGoogleServiceAccountKey {
    private readonly googleServiceAccountKey;
    constructor(googleServiceAccountKey: GoogleServiceAccountKeyFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
