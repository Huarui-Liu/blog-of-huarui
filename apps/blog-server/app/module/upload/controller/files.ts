import { EggLogger } from 'egg';
import { Inject,  HTTPMethod, HTTPMethodEnum, HTTPBody } from '@eggjs/tegg';
import HTTPController from '../../../plugins/httpController';

@HTTPController({
    path: '/files',
})
export class UploadController {
    @Inject()
    logger: EggLogger;

    @HTTPMethod({
        method: HTTPMethodEnum.POST,
        path: 'upload',
    })
    async upload(@HTTPBody() body: any) {
        this.logger.info('upload file');
        console.log(body)
        return 'upload file';
    }
}