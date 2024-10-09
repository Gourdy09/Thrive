import EasCommand from '../../commandUtils/EasCommand';
export default class ProjectInit extends EasCommand {
    static description: string;
    static aliases: string[];
    static flags: {
        'non-interactive': import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        id: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        force: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    static contextDefinition: {
        projectDir: import("../../commandUtils/context/ProjectDirContextField").default;
        loggedIn: import("../../commandUtils/context/LoggedInContextField").default;
    };
    private static saveProjectIdAndLogSuccessAsync;
    private static modifyExpoConfigAsync;
    private static ensureOwnerSlugConsistencyAsync;
    private static setExplicitIDAsync;
    private static initializeWithExplicitIDAsync;
    private static initializeWithoutExplicitIDAsync;
    private static getAccountChoices;
    runAsync(): Promise<void>;
}
