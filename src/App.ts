import * as express from 'express';
import { Routes } from './Routes';

export class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        Routes.addRoutes( router );
        // tslint:disable-next-line
        debugger;

        this.app.use('/', router);
    }
}