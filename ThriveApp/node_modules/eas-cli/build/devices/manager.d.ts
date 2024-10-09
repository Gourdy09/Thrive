import { DeviceManagerContext } from './context';
import { ExpoGraphqlClient } from '../commandUtils/context/contextUtils/createGraphqlClient';
import { AccountFragment } from '../graphql/generated';
import { Actor } from '../user/User';
export default class DeviceManager {
    private readonly ctx;
    constructor(ctx: DeviceManagerContext);
    createAsync(): Promise<void>;
    private resolveAccountAsync;
}
export declare class AccountResolver {
    private readonly graphqlClient;
    private readonly projectId;
    private readonly user;
    constructor(graphqlClient: ExpoGraphqlClient, projectId: string | null, user: Actor);
    resolveAccountAsync(): Promise<AccountFragment>;
    private resolveProjectAccountAsync;
    private promptForAccountAsync;
}
