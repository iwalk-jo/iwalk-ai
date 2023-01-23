import { version } from '@@/package.json'
import {
  HAS_AFTER_SPEECH,
  HAS_LOGGER,
  HAS_STT,
  HAS_TTS,
  STT_PROVIDER,
  TTS_PROVIDER
} from '@/constants'
import { LogHelper } from '@/helpers/log-helper'

const getInfo = async (fastify, options) => {
  fastify.get(`/api/${options.apiVersion}/info`, (request, reply) => {
    LogHelper.title('GET /info')

    const message = 'Information pulled.'

    LogHelper.success(message)

    reply.send({
      success: true,
      status: 200,
      code: 'info_pulled',
      message,
      after_speech: HAS_AFTER_SPEECH,
      logger: HAS_LOGGER,
      stt: {
        enabled: HAS_STT,
        provider: STT_PROVIDER
      },
      tts: {
        enabled: HAS_TTS,
        provider: TTS_PROVIDER
      },
      version
    })
  })
}

export default getInfo
