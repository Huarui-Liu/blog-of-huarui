import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1717850435070_106';

  // add your egg config in here
  config.middleware = [];

  config.multipart = {
    mode: 'file',
    fileSize: '50mb',
    whitelist: [
      '.jpg', '.jpeg', '.png', '.gif', // 允许的文件类型
      '.pdf', '.doc', '.docx',
    ],
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
