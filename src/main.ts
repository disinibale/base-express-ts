import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

import { CorsConfig } from './configs/'
import { LogActivityMiddleware, ErrorHandlerMiddleware } from './middlewares'

import BadRequest from './exceptions/BadRequest.exception'
import ErrorException from './exceptions/Error.exception'

const app: Application = express()

app.use(cors(CorsConfig.getOptions()))

// Set up your middleware here
app.use((req: Request, res: Response, next: NextFunction) => {
    const activityMiddleware = new LogActivityMiddleware(req, res, next)
    const errorHandlerMiddleware = new ErrorHandlerMiddleware(req, res, next)

    activityMiddleware.handleRequestActivity()
    errorHandlerMiddleware.uncaughtErrorHandler
})

app.use('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('OK')
})

app.listen(5800, () => {
    console.log('Server running at Port 5800')
})