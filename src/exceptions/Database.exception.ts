import ErrorException from "./Error.exception"

class DatabaseException extends ErrorException {
    constructor(code: number, message: string, data?: any) {
        super(code, message, data)
    }
}

export default DatabaseException