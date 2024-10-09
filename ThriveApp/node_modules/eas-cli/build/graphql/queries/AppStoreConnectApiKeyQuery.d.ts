import { ExpoGraphqlClient } from '../../commandUtils/context/contextUtils/createGraphqlClient';
export declare const AppStoreConnectApiKeyQuery: {
    getByIdAsync(graphqlClient: ExpoGraphqlClient, ascApiKeyId: string): Promise<{
        issuerIdentifier: string;
        keyIdentifier: string;
        keyP8: string;
    }>;
};
