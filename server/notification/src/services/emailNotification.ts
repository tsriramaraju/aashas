import { ServerError } from '@aashas/common';

export const emailNotification = (data: {
  email: string;
  subject: string;
  body: string;
}) => {
  try {
    //  TODO : email server
    console.log(data);
  } catch (error) {
    throw new ServerError(error);
  }
};