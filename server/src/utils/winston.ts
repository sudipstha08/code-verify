import { createLogger, format, transports } from 'winston'

const { combine, timestamp, json } = format

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
}

export const logger = createLogger({
  levels: logLevels,
  format: combine(timestamp(), json()),
  transports: [new transports.Console()],
})
