import express from 'express';
import { IncomingMessage } from 'node:http';
import morgan from 'morgan';
import router from './router';


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));






app.get('/', (req: IncomingMessage, res: any) => {
    res.send('Hello World dwellers!');
});



app.use('/api/v1', router);

export default app;