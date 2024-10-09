import { AppleDistributionCertificateFragment, AppleProvisioningProfileFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { AppleProvisioningProfileMutationResult } from '../api/graphql/mutations/AppleProvisioningProfileMutation';
import { AppLookupParams } from '../api/graphql/types/AppLookupParams';
import { Target } from '../types';
export declare class ConfigureProvisioningProfile {
    private readonly app;
    private readonly target;
    private readonly distributionCertificate;
    private readonly originalProvisioningProfile;
    constructor(app: AppLookupParams, target: Target, distributionCertificate: AppleDistributionCertificateFragment, originalProvisioningProfile: AppleProvisioningProfileFragment);
    runAsync(ctx: CredentialsContext): Promise<AppleProvisioningProfileMutationResult | null>;
    private configureAndUpdateAsync;
}
