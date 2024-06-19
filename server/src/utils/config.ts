import { config as loadEnv } from 'dotenv'

loadEnv()

const loadFromEnv = (key: string): string => {
  const value = process.env[key]
  if (value !== undefined) {
    return value
  }
  throw new Error(`process.env doesn't have the key ${key}`)
}

const config = {
  port: loadFromEnv('PORT'),
}

export { config }
