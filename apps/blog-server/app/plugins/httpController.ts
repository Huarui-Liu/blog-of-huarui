import { HTTPController } from '@eggjs/tegg'

interface IncludedPathOprion {
  path: string
}

const apiPrefixedHTTPController = <T extends IncludedPathOprion>(config: T) => HTTPController({
    ...config,
    path: `/api${config.path}`,
})

export default apiPrefixedHTTPController
