import axios from 'axios';
// import { common } from './common';

export async function createSubscription(email) {
  try {
    const response = await axios({
      url: `https://food-boutique.b.goit.study/api/subscription`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { email: email },
    });
    return response;
  } catch (error) {
    return error;
  }
}
