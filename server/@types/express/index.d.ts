declare global {
  namespace Express {
    interface Request {}
    interface Response {
      apiSuccess: (fn: ApiSuccess) => void
      apiFail: (fn: ApiFail) => void
    }
    interface ApiSuccess {
      message?: string
      data?: any
      status?: Status
    }
    interface ApiFail {
      message?: string
      error?: any
      status?: Status
    }
    interface Status {
      code?: number
      success?: boolean
    }
  }
}
