import ErrorException from "./Error.exception"

class UserNotFoundException extends ErrorException {
    constructor(userId: string, message: string) {
        super(404, `User with ID ${userId} not found!`)
    }
}