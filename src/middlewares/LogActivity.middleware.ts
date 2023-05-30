import moment from 'moment'
import LogFormatter from '../helpers/LogFormatter.helper'

import BaseMiddleware from "./Base.middleware"
import { Request, Response, NextFunction } from 'express'

class LogActivityMiddleware extends BaseMiddleware {
    private helper: typeof LogFormatter

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next)
        this.helper = LogFormatter
    }

    async handleRequestActivity(): Promise<void> {
        const { method, originalUrl, ip } = this.req
        const timestamp = moment().format('DD-MM-YYYY HH:mm:ss')
        console.log(`[${method} : ${timestamp}] at : ${originalUrl} - ${ip}`)
        this.next?.()
    }
}

export default LogActivityMiddleware