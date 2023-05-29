import moment from 'moment'

import BaseMiddleware from "./Base.middleware"

class LogActivityMiddleware extends BaseMiddleware {
    handleRequestActivity(): void {
        const timestamp = moment().format('DD-MM-YYYY HH:mm:ss')
        console.log(`[${this.req?.method} : ${timestamp}] at : ${this.req?.url}`)
        this.next?.()
    }
}

export default LogActivityMiddleware