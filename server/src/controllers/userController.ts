import { Request, Response } from 'express'
export class UserController {
  public async validateCode(req: Request, res: Response) {
    try {
      const { code } = req.body
      if (code.length !== 6 || code.charAt(code.length - 1) == '7') {
        throw {
          message: 'Please provide a valid verification code',
        }
      }
      res.status(200).json({
        success: true,
        message: 'Code verified successully',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      })
    }
  }
}
