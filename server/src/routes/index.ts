import { Router } from 'express'
import { UserRoutes } from './userRoutes'

export class Routes {
  public router: Router
  private userRoutes: UserRoutes

  constructor() {
    this.router = Router({ mergeParams: true })
    this.userRoutes = new UserRoutes()
    this.setRoutes()
  }

  private setRoutes() {
    this.router.use('/users', this.userRoutes.userRouter)
  }
}
