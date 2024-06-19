import { NextFunction, Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils'

export const ApiMethods = (_: Request, res: Response, next: NextFunction) => {
  res.apiSuccess = ({
    message = 'Success',
    data,
    status = {
      code: 200,
      success: true,
    },
  }) => {
    logger.info({
      id: uuidv4(),
      message: `Success`,
    })

    res.status(status.code || 200).json({ message, status, data })
  }

  res.apiFail = ({
    message = 'Error Occured',
    error,
    status = {
      code: 400,
      success: false,
    },
  }) => {
    const errorCode = error?.status?.code || status?.code

    logger.error({
      id: uuidv4(),
      message: `Fail`,
      error: error || message,
    })

    res.status(errorCode).json({
      message,
      status: {
        code: errorCode,
        success: status.success || false,
      },
      error,
    })
  }

  next()
}
