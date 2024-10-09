import { AccountFragment, AppleDistributionCertificateFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
export declare class SelectAndRemoveDistributionCertificate {
    private readonly account;
    constructor(account: AccountFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
export declare class RemoveDistributionCertificate {
    private readonly account;
    private readonly distributionCertificate;
    constructor(account: AccountFragment, distributionCertificate: AppleDistributionCertificateFragment);
    runAsync(ctx: CredentialsContext): Promise<void>;
    private removeInvalidProvisioningProfilesAsync;
}
