import { Partitioners } from "kafkajs";
import { client } from "./kafkaClient";

const producer = client.producer({createPartitioner: Partitioners.LegacyPartitioner});

export default function startProducer() {
    producer.connect().then(() => {
        console.log("Producer connected");
    }).catch((err) => {
        console.error("Producer connection error", err);
    });

    producer.send({ topic: 'test-topic', messages: [{ key: "key-1", value: 'Hello Kafka!' }] }).then(() => {
        console.log("Message sent successfully");
    }).catch((err) => {
        console.error("Error sending message", err);
    }).finally(() => {
        producer.disconnect().then(() => {
            console.log("Producer disconnected");
        }).catch((err) => {
            console.error("Error disconnecting producer", err);
        });
    })
}