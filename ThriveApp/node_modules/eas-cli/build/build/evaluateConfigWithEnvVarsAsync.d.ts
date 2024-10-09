import { Env } from '@expo/eas-build-job';
import { BuildProfile } from '@expo/eas-json';
import { ExpoGraphqlClient } from '../commandUtils/context/contextUtils/createGraphqlClient';
export declare function evaluateConfigWithEnvVarsAsync<Config extends {
    projectId: string;
}, Opts>({ buildProfile, buildProfileName, graphqlClient, getProjectConfig, opts, }: {
    buildProfile: BuildProfile;
    buildProfileName: string;
    graphqlClient: ExpoGraphqlClient | null;
    opts: Opts;
    getProjectConfig(opts: Opts): Promise<Config>;
}): Promise<Config & {
    env: Env;
}>;
