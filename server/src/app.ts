import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { CustomError } from './interfaces'
import { ApiMethods } from './middlewares'
import { Routes } from './routes'

export class App {
  public app: Application
  private v1Routes: Routes

  constructor() {
    this.app = express()
    this.v1Routes = new Routes()
    this.initializeMiddlewares()
  }

  private initializeMiddlewares() {
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(
      express.json({
        limit: '150mb',
      }),
    )
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '150mb' }))

    this.app.use('/api/', ApiMethods, this.v1Routes.router)

    // API to check server status
    this.app.get('/ping', (_req, res: Response) => {
      res.json({ message: 'Server is running' })
    })

    /**
     * 404 Handler
     */
    this.app.use((_, __, next: NextFunction) => {
      next({
        message: 'Route Not Found',
        status: {
          code: 404,
          success: false,
        },
        error: {},
      })
    })

    /**
     * Error handler
     */
    this.app.use(
      (err: CustomError, _: Request, res: Response, __: NextFunction): void => {
        res.status(err?.status?.code || 500).json(err)
      },
    )
  }

  public start(port: number | string) {
    const normalizedPort: number =
      typeof port === 'string' ? parseInt(port, 10) : port
    this.app.listen(normalizedPort, () => {
      console.log('<-------------------------------------------------------->')
      // eslint-disable-next-line security-node/detect-crlf
      console.log(`🏃🏃🏃 Server is running on PORT ${normalizedPort} 🏃🏃🏃`)
      console.log('<-------------------------------------------------------->')
    })
  }
}
