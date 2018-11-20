import * as express from 'express'

class App {
    public app

    constructor() {
        this.app = express()
        this.mountRoutes()
    }


    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                message: 'Hello World again!'
            })
        })

        router.get('/ud', (req: express.Request, res: express.Response) => {
            res.json({
                message: 'Hello UD!'
            })
        })
        this.app.use('/', router)
    }
}

export default new App().app
