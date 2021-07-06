import { ServiceBroker } from 'moleculer';
import ApiService from 'moleculer-web';
import brokerConfig from '@project/shared/moleculer-config';

const broker = new ServiceBroker(brokerConfig);

broker.createService({
  name: "api",
  mixins: [ApiService]
})

broker.start();
