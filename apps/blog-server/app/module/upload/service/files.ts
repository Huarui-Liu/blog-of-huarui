import { EggLogger } from "typings/app";
import { SingletonProto, AccessLevel, Inject } from "@eggjs/tegg";
import path from 'path';
import fs from 'fs';

@SingletonProto({
    accessLevel: AccessLevel.PUBLIC,
})
export class UploadService {
    @Inject()
    logger: EggLogger;

    async upload(files: Array<any>) {
        this.logger.info('upload file');
        try {
            if(Array.isArray(files)) {
                files.forEach(file => {
                    const filePath = path.join(__dirname, '../../../public', file.filename);
                    const reader = fs.createReadStream(file.filepath);
                    const writer = fs.createWriteStream(filePath)
    
                    reader.pipe(writer);
                })
            }
            
            this.logger.info('upload file success');
        } catch (error) {
            this.logger.error('upload file error', error);
        }

    }
}