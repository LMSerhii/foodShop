import axios from 'axios';
import { common } from './common';

export async function createSubscription(email) {
  // returns an object
  try {
    const response = await axios({
      url: `${common.BASE_URL}/subscription`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
      },
    });
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}
