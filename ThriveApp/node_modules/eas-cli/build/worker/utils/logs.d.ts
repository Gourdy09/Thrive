import type { WorkerDeploymentAliasFragment, WorkerDeploymentFragment } from '../../graphql/generated';
export declare const EXPO_BASE_DOMAIN: string;
export declare function getDeploymentUrlFromFullName(deploymentFullName: string): string;
export declare function getDashboardUrl(projectId: string): string;
type WorkerDeploymentData = {
    /** Used to generate the dashboard URL to `expo.dev` */
    projectId: string;
    /** The actual deployment information */
    deployment: Pick<WorkerDeploymentFragment, 'deploymentIdentifier' | 'url'>;
    /** All modified aliases of the deployment, if any */
    aliases?: (WorkerDeploymentAliasFragment | null)[];
    /** The production promoting alias of the deployment, if any */
    production?: WorkerDeploymentAliasFragment | null;
};
export declare function formatWorkerDeploymentTable(data: WorkerDeploymentData): string;
type WorkerDeploymentOutput = {
    /** The absolute URL to the dashboard on `expo.dev` */
    dashboardUrl: string;
    /** The deployment identifier */
    identifier: string;
    /** The deployment URL */
    url: string;
    /** Custom aliases, if assigned */
    aliases?: {
        id: string;
        url: string;
        name: string;
    }[];
    /** The production alias, if assigned */
    production?: {
        id: string;
        url: string;
    };
};
export declare function formatWorkerDeploymentJson(data: WorkerDeploymentData): WorkerDeploymentOutput;
export {};
