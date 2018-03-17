import { Router } from 'express';

export class Routes {

    public static addRoutes( router: Router ): void {

        // Note the _req as it isn't used
        router.get('/users', (_req, res) => {
            res.json([
                {
                    id: 1,
                    name: 'Bob Smith',
                    password: 'abcdefg'
                },
                {
                    id: 2,
                    name: 'Jimmy Jones',
                    password: 'zxcqwe'
                }]);
        });

        router.get('/', (_req, res) => {
            res.json( {message: 'Hello'});
        });
    }
}