import { CredentialsContext } from '../../context';
import { AppLookupParams } from '../api/GraphqlClient';
export declare class RemoveFcm {
    private readonly app;
    constructor(app: AppLookupParams);
    runAsync(ctx: CredentialsContext): Promise<void>;
}
