import { AppleDistributionCertificateFragment, AppleProvisioningProfileFragment, AppleTeamFragment, IosAppBuildCredentialsFragment, IosDistributionType } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { IosTargetCredentials } from '../../credentialsJson/types';
import { AppLookupParams } from '../api/graphql/types/AppLookupParams';
export declare class SetUpTargetBuildCredentialsFromCredentialsJson {
    private readonly app;
    private readonly distributionType;
    private readonly targetCredentials;
    constructor(app: AppLookupParams, distributionType: IosDistributionType, targetCredentials: IosTargetCredentials);
    runAsync(ctx: CredentialsContext): Promise<IosAppBuildCredentialsFragment>;
    getDistributionCertificateToAssignAsync(ctx: CredentialsContext, appleTeam: AppleTeamFragment, currentDistributionCertificate: AppleDistributionCertificateFragment | null): Promise<AppleDistributionCertificateFragment>;
    getProvisioningProfileToAssignAsync(ctx: CredentialsContext, appleTeam: AppleTeamFragment, currentProvisioningProfile: AppleProvisioningProfileFragment | null): Promise<AppleProvisioningProfileFragment>;
    createNewProvisioningProfileAsync(ctx: CredentialsContext, appleTeam: AppleTeamFragment): Promise<AppleProvisioningProfileFragment>;
}
