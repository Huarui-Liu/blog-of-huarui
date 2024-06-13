import { EggLogger } from 'egg';
import { Inject, HTTPMethod, HTTPMethodEnum } from '@eggjs/tegg';
import HTTPController from '../../../plugins/httpController';

@HTTPController({
  path: '/',
})
export class HomeController {
  @Inject()
  logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/',
  })
  async index() {
    this.logger.info('hello egg logger');
    return 'hello egg';
  }
}
