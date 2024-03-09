import express from 'express';
import { IncomingMessage } from 'node:http';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: IncomingMessage, res: any) => {
    res.send('Hello World dwellers!');
});

export default app;