const { Kafka } = require('kafkajs');

class EventPublisher {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'car-rental-service',
      brokers: [process.env.KAFKA_BROKER]
    });
    this.producer = this.kafka.producer();
  }

  async connect() {
    await this.producer.connect();
  }

  async disconnect() {
    await this.producer.disconnect();
  }

  async publishRentalCreated(rent) {
    await this.producer.send({
      topic: 'rental-created',
      messages: [{
        key: rent._id.toString(),
        value: JSON.stringify({
          rentId: rent._id,
          carId: rent.carId,
          renterId: rent.renterId,
          startDate: rent.startDate,
          endDate: rent.endDate,
          totalCost: rent.totalCost,
          status: rent.status
        })
      }]
    });
  }

  async publishRentalCompleted(rent) {
    await this.producer.send({
      topic: 'rental-completed',
      messages: [{
        key: rent._id.toString(),
        value: JSON.stringify({
          rentId: rent._id,
          carId: rent.carId,
          renterId: rent.renterId,
          startDate: rent.startDate,
          endDate: rent.endDate,
          totalCost: rent.totalCost,
          status: rent.status
        })
      }]
    });
  }
}

module.exports = new EventPublisher(); 