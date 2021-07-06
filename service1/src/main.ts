import { Context, ServiceBroker } from 'moleculer';
import { test } from '@project/shared/utils';
import brokerConfig from '@project/shared/moleculer-config';

const broker = new ServiceBroker(brokerConfig);

broker.createService({
  name: "service1",
  actions: {
    test(ctx: Context) {
      return test;
    }
  }
})

broker.start();
