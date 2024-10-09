import { ExpoGraphqlClient } from '../commandUtils/context/contextUtils/createGraphqlClient';
export declare function getBranchFromChannelNameAndCreateAndLinkIfNotExistsAsync(graphqlClient: ExpoGraphqlClient, projectId: string, channelName: string): Promise<{
    branchName: string;
    branchId: string;
}>;
