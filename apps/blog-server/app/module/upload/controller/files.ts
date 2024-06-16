import { EggLogger } from 'egg';
import { Inject,  HTTPMethod, HTTPMethodEnum, Context, EggContext } from '@eggjs/tegg';
import HTTPController from '../../../plugins/httpController';
import { UploadService } from '@/module/upload';

@HTTPController({
    path: '/files',
})
export class UploadController {
    @Inject()
    logger: EggLogger;

    @Inject()
    UploadService: UploadService;

    @HTTPMethod({
        method: HTTPMethodEnum.POST,
        path: 'upload',
    })
    async upload(@Context() ctx: EggContext) {
        this.logger.info('upload file');
        console.log(ctx.request.files);
        this.UploadService.upload(ctx.request.files);
        return 'upload file';
    }
}