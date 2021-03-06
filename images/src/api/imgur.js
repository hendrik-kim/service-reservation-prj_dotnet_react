import dotenv from 'dotenv';
import qs from 'qs';
import axios from 'axios';

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
  fetchImages(token) {
    return axios.get(`https://api.imgur.com/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append('image', image);

      return axios.post(`https://api.imgur.com/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    return Promise.all(promises);
  },
};
