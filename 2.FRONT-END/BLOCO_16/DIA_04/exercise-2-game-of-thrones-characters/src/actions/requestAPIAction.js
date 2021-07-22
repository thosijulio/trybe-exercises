import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR
} from '.';
import charAPI from '../services/charAPI';

const requestAPI = () => ({
  type: REQUEST_API,
  payload: {
    isLoading: true,
  }
})

const requestSuccess = (character) => ({
  type: REQUEST_API_SUCCESS,
  payload: {
    character,
  }
})

const requestError = (error) => ({
  type: REQUEST_API_ERROR,
  payload: {
    error,
  }
})

function requestAPIAction(name) {
  return (dispatch) => {
    dispatch(requestAPI());
    return charAPI(name)
      .then((resolve) => dispatch(requestSuccess(resolve)))
      .catch((error) => dispatch(requestError(error)));
  }
}

export default requestAPIAction;