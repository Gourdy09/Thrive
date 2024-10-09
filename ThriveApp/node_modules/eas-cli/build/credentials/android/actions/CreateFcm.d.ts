import { AccountFragment, AndroidFcmFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class CreateFcm {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<AndroidFcmFragment>;
}
