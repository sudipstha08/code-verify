import { Router } from 'express'
import { UserController } from '../controllers'
import { UserValidationSchema } from '../utils'
import { Validate } from '../middlewares'

export class UserRoutes {
  public userRouter: Router
  private userController: UserController

  constructor() {
    this.userRouter = Router({ mergeParams: true })
    this.userController = new UserController()
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.userRouter.post(
      '/',
      Validate(UserValidationSchema),
      this.userController.validateCode.bind(this.userController),
    )
  }
}
