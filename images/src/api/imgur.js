import dotenv from 'dotenv';
import qs from 'qs';

dotenv.config();

export default {
  login() {
    const queryString = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token',
    };

    window.location = `https://api.imgur.com/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
};
