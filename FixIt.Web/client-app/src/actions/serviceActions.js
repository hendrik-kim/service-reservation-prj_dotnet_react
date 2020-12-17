import axios from 'axios';
import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
} from '../constants/serviceConstants';

export const listServices = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_LIST_REQUEST });

    const { data } = await axios.get('/api/service');

    dispatch({
      type: SERVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listServicesDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/service/${id}`);

    dispatch({
      type: SERVICE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
