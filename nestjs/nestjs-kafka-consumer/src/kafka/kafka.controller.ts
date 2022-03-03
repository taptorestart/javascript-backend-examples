import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import {
  ClientKafka,
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller('kafka')
export class KafkaController implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    console.log(`onModuleInit`);
    this.client.subscribeToResponseOf('quickstart-events');
    await this.client.connect();
  }

  @MessagePattern('quickstart-events')
  getEvent(@Payload() message: any, @Ctx() context: KafkaContext) {
    console.log(`getEvent`);
    const originalMessage = context.getMessage();
    console.log(`message key: ${originalMessage.key}`);
    console.log(`message value: ${originalMessage.value}`);
  }
}
