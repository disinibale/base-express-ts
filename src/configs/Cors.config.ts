import { CorsOptions } from "cors"
import ApplicationConfig from "./Application.config"

class CorsConfig extends ApplicationConfig {
    get whitelist(): string[] {
        const whitelist:string = this.getEnvVariable('CORS_WHITELIST')
        
        return whitelist.split(',')
    }

    getOptions(): CorsOptions {
        const whitelist = this.whitelist;

        return {
            origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
                if (!origin || whitelist.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
        };
    }
}

export default new CorsConfig()