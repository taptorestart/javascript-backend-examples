# Node.js Kafkajs Example
source: [Github kafkajs page](https://github.com/tulios/kafkajs), MIT License

## Test Environments
- Node.js v16.13.1
- MacOS v12.2.1

## Install Kafka
source: [Kafka Quick Start](https://kafka.apache.org/quickstart)

```shell
# STEP 1: GET KAFKA
$ tar -xzf kafka_2.13-3.1.0.tgz
$ cd kafka_2.13-3.1.0

# STEP 2: START THE KAFKA ENVIRONMENT
# Start the ZooKeeper service
$ bin/zookeeper-server-start.sh config/zookeeper.properties

# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties

# STEP 3: CREATE A TOPIC TO STORE YOUR EVENTS
$ bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092

# STEP 4: WRITE SOME EVENTS INTO THE TOPIC
$ bin/kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092
This is my first event
```

## Install Packages
```shell
$ npm install
```

## Run kafka-consumer

You should set same topic name 'quickstart-events'.

```shell
$ node kafka-consumer.js
```

## Screenshots
Create event by kafka-console-producer.sh

![](screenshots/first-event.png)

Get event

![](screenshots/node-kafka-consumer.png)


## Run kafka-producer
```shell
$ node kafka-producer.js
```

## Screenshots
Get event

![get-event-from-kafkajs-producer](screenshots/get-event-from-kafkajs-producer.png)