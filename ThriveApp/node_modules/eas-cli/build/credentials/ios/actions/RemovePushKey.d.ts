import { AccountFragment, ApplePushKeyFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class SelectAndRemovePushKey {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
export declare class RemovePushKey {
    private readonly pushKey;
    constructor(pushKey: ApplePushKeyFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
