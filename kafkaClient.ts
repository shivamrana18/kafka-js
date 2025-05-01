import * as kafka from 'kafkajs';

export const client = new kafka.Kafka({
    clientId: "demo-app",
    brokers: ["localhost:9092"],
    ssl: false,
    retry: {
        retries: 5,
    }
})

