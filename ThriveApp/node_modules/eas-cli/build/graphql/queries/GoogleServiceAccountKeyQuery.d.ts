import { ExpoGraphqlClient } from '../../commandUtils/context/contextUtils/createGraphqlClient';
export declare const GoogleServiceAccountKeyQuery: {
    getByIdAsync(graphqlClient: ExpoGraphqlClient, ascApiKeyId: string): Promise<{
        keyJson: string;
    }>;
};
