import * as express from 'express';
import consumer from './kafkaConsumer';
import producer from './kafkaProducer';

const app = express.default();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server running at port', port)
    consumer();

    setInterval(() => {
        console.log('Running producer');
        producer();
    }, 3000);
})