import { App } from './app'
import { config } from './utils'

const app = new App()

// Starting the server
app.start(config.port)
