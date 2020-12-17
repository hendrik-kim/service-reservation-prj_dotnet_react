import axios from 'axios';
import {
  JOB_ADD_SERVICE,
  JOB_REMOVE_SERVICE,
  JOB_SAVE_ORDER_ADDRESS,
} from './../constants/jobDataConstants';

export const addToJobForm = (id, hour) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/service/${id}`);

  dispatch({
    type: JOB_ADD_SERVICE,
    payload: {
      service: data.serviceId,
      name: data.name,
      description: data.description,
      InitHour: data.initHourRate,
      hour,
    },
  });

  localStorage.setItem('jobItems', JSON.stringify(getState().job.jobItems));
};

export const removeFromJobForm = (id) => (dispatch, getState) => {
  dispatch({
    type: JOB_REMOVE_SERVICE,
    payload: id,
  });

  localStorage.setItem('jobItems', JSON.stringify(getState().job.jobItems));
};

export const saveOrderAddress = (data) => (dispatch) => {
  dispatch({
    type: JOB_SAVE_ORDER_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
