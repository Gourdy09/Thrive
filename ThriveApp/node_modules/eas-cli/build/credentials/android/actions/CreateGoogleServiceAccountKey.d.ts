import { AccountFragment, GoogleServiceAccountKeyFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class CreateGoogleServiceAccountKey {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<GoogleServiceAccountKeyFragment>;
    private provideAsync;
    private provideKeyJsonPathAsync;
}
