import { Platform } from '@expo/eas-build-job';
import IosSubmitter from './IosSubmitter';
import { SubmissionContext } from '../context';
export default class IosSubmitCommand {
    private ctx;
    constructor(ctx: SubmissionContext<Platform.IOS>);
    runAsync(): Promise<IosSubmitter>;
    private resolveSubmissionOptionsAsync;
    private resolveCredentialSubmissionOptionsAsync;
    private resolveAppSpecificPasswordSource;
    private resolveAscApiKeySource;
    private resolveArchiveSource;
    private resolveAscAppIdentifierAsync;
}
