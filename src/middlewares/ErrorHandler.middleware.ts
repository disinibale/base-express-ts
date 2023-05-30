import BaseMiddleware from "./Base.middleware";
import ErrorException from "../exceptions/Error.exception";

class ErrorHandlerMiddleware extends BaseMiddleware {
    
    uncaughtErrorHandler(error: Error) {
        if (error instanceof ErrorException) {
            const { code, message, data } = error

            return this.res?.status(code).json({ code, message, data })
        }
        
        console.error('Unhandled exception', error)
        return this.res?.status(500).json({
            code: 500,
            message: 'Internal Server Error',
            data: error.stack || 'Unknown error occured'
        })
    }
}

export default ErrorHandlerMiddleware