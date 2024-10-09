import { ExpoConfig } from '@expo/config';
import { Env, Platform } from '@expo/eas-build-job';
import { BuildProfile } from '@expo/eas-json';
import { ExpoGraphqlClient } from '../commandUtils/context/contextUtils/createGraphqlClient';
import { Client } from '../vcs/vcs';
export declare function getApplicationIdentifierAsync({ graphqlClient, projectDir, projectId, exp, buildProfile, platform, vcsClient, nonInteractive, env, }: {
    graphqlClient: ExpoGraphqlClient;
    projectDir: string;
    projectId: string;
    exp: ExpoConfig;
    buildProfile: BuildProfile;
    platform: Platform;
    vcsClient: Client;
    nonInteractive: boolean;
    env: Env;
}): Promise<string>;
