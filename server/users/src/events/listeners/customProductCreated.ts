import {
  CustomProductCreatedEvent,
  Listener,
  ProductCreatedEvent,
  Subjects,
} from '@aashas/common';
import { Message } from 'node-nats-streaming';
import { CustomProduct } from '../../models/CustomProducts';
import { queueGroupName } from '../queueGroupName';

export class CustomProductCreatedListener extends Listener<CustomProductCreatedEvent> {
  queueGroupName = queueGroupName;
  readonly subject = Subjects.CustomProductCreated;

  async onMessage(data: CustomProductCreatedEvent['data'], msg: Message) {
    try {
      const { product } = data;

      await CustomProduct.build({
        color: product.color,
        description: product.description,
        designerCollection: product.designerCollection,
        gender: product.gender,
        images: product.images,
        isNewProduct: product.isNewProduct,
        keywords: product.keywords,
        outfit: product.outfit,
        price: product.price,
        quantity: product.quantity,
        size: product.size,
        title: product.title,
        trending: product.trending,
        discount: product.discount,
        inOffer: product.inOffer,
        refImages: product.refImages,
      }).save();
      console.log('Custom product created');

      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}