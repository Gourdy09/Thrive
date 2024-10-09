import { IosDistributionType } from '../../../graphql/generated';
import { CredentialsContext } from '../../context';
import { App, Target } from '../types';
export declare class SetUpBuildCredentialsFromCredentialsJson {
    private readonly app;
    private readonly targets;
    private readonly distributionType;
    constructor(app: App, targets: Target[], distributionType: IosDistributionType);
    runAsync(ctx: CredentialsContext): Promise<void>;
    private readCredentialsJsonAsync;
}
