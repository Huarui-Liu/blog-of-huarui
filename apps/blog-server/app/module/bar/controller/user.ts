import { Inject, HTTPMethod, HTTPMethodEnum, HTTPQuery } from '@eggjs/tegg';
import { HelloService } from '@/module/foo';

import HTTPController from '../../../plugins/httpController';

@HTTPController({
  path: '/bar',
})
export class UserController {
  @Inject()
  helloService: HelloService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'user',
  })
  async user(@HTTPQuery({ name: 'userId' }) userId: string) {
    return await this.helloService.hello(userId);
  }

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'home',
  })
  async home1() {
    return 'home1';
  }

}
