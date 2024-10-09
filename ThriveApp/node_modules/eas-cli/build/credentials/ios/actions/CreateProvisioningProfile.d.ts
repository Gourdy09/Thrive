import { AppleDistributionCertificateFragment } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { AppleProvisioningProfileMutationResult } from '../api/graphql/mutations/AppleProvisioningProfileMutation';
import { AppLookupParams } from '../api/graphql/types/AppLookupParams';
import { Target } from '../types';
export declare class CreateProvisioningProfile {
    private readonly app;
    private readonly target;
    private readonly distributionCertificate;
    constructor(app: AppLookupParams, target: Target, distributionCertificate: AppleDistributionCertificateFragment);
    runAsync(ctx: CredentialsContext): Promise<AppleProvisioningProfileMutationResult>;
    private maybeGetUserProvidedAsync;
    private provideOrGenerateAsync;
}
