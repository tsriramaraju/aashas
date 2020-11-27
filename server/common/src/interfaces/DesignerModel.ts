import { Types, Model, Document } from 'mongoose';

/**
 * An interface that describes the properties
 * that are required to create a new Designer Account
 */
interface designerAttrs {
  name: string;
  email: string;
  password: string;
  mobile: number;
  image: string;
  bio: string;
  blogs?: blog[];
}

interface blog {
  title: string;
  image: string;
  content: string;
  slug: string;
}

/**
 * An interface that describes the properties
 * that a Designer Model has
 */
interface DesignerModel extends Model<DesignerDoc> {
  build(attrs: designerAttrs): DesignerDoc;
}

/**
 * An interface that describes the properties
 * hat a Designer Document has
 */
interface DesignerDoc extends Document {
  id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  mobile: number;
  image: string;
  bio: string;
  blogs: {
    title: string;
    image: string;
    content: string;
    slug: string;
  }[];
}

export { designerAttrs, DesignerDoc, DesignerModel, blog };