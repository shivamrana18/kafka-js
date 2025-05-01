import { client } from './kafkaClient';

const consumer = client.consumer({ groupId: 'test-group' });

export default function startConsumer() {
    consumer.connect().then(() => {
        console.log('Consumer connected')
    }).catch((err) => {
        console.error('Consumer connection error', err)
    })

    consumer.subscribe({ topic: 'test-topic', fromBeginning: true }).then(() => {
        console.log('Subscribed to topic')
    }).catch((err) => {
        console.error('Error subscribing to topic', err)
    })

    consumer.run({
        eachMessage: async (param) => {
            console.log('Params received', param);
        }
    })
}