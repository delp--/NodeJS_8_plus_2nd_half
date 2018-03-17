import { App } from './App';

const port: string | number = process.env.PORT || 3001;

const app = new App().app;

app.listen(port, (err: Error) => {
    if (err) {
        return console.log( err );
    }
    return console.log(`server is listening on ${port}`);
});
