import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils'

export const RequestLog = (req: Request, _: Response, next: NextFunction) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const requestBody = (({ password, ...keys }) => keys)(req?.body)

  console.log('🌴----------------------------------------------------🌴')

  logger.info({
    id: uuidv4(),
    method: req.method,
    requestBody,
    requestParams: req?.params,
    message: `(Route: ${req?.originalUrl}) Initialized,`,
  })

  next()
}
