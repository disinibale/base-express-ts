import ErrorException from "./Error.exception"

class BadRequest extends ErrorException {
    constructor(message: string, data?: any) {
        super(400, message, data)
    }
}

export default BadRequest