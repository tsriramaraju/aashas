import { DatabaseConnectionError, offer, productAttrs } from '@aashas/common';
import { Types } from 'mongoose';
import { Product } from '../models/Products';

export const updateProduct = async (
  prodId: Types.ObjectId,
  productData: productAttrs | offer
) => {
  try {
    const product = await Product.findByIdAndUpdate(prodId, { ...productData });

    if (!product) return null;

    return product;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};