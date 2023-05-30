class ErrorException extends Error {
    code: number
    data: any

    constructor(code: number, message: string = 'Internal Server Error', data?: any) {
        super(message)
        this.name = this.constructor.name
        this.code = code
        this.data = data        
    }
}

export default ErrorException