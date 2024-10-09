import { AccountFragment, ApplePushKeyFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class CreatePushKey {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<ApplePushKeyFragment>;
}
