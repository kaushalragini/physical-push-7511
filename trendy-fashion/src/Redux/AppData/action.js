import axios from "axios";
import {
  GET_MENACCESSORIES_FAILURE,
  GET_MENACCESSORIES_REQUEST,
  GET_MENACCESSORIES_SUCCESS,
  GET_MENCLOTHING_FAILURE,
  GET_MENCLOTHING_REQUEST,
  GET_MENCLOTHING_SUCCESS,
  GET_MENFOOTWEAR_FAILURE,
  GET_MENFOOTWEAR_REQUEST,
  GET_MENFOOTWEAR_SUCCESS,
} from "./actionTypes";

export const getmenFootwearRequest = () => {
  return {
    type: GET_MENFOOTWEAR_REQUEST,
  };
};
export const getmenFootwearSuccess = (payload) => {
  return {
    type: GET_MENFOOTWEAR_SUCCESS,
    payload,
  };
};
export const getmenFootwearFailure = () => {
  return {
    type: GET_MENFOOTWEAR_FAILURE,
  };
};
export const getmenAccessoriesRequest = () => {
  return {
    type: GET_MENACCESSORIES_REQUEST,
  };
};
export const getmenAccessoriesSuccess = (payload) => {
  return {
    type: GET_MENACCESSORIES_SUCCESS,
    payload,
  };
};
export const getmenAccessoriesFailure = () => {
  return {
    type: GET_MENACCESSORIES_FAILURE,
  };
};
export const getmenClothingRequest = () => {
  return {
    type: GET_MENCLOTHING_REQUEST,
  };
};
export const getmenClothingSuccess = (payload) => {
  return {
    type: GET_MENCLOTHING_SUCCESS,
    payload,
  };
};
export const getmenClothingFailure = () => {
  return {
    type: GET_MENCLOTHING_FAILURE,
  };
};

export const getmenFootwear = (params) => (dispatch) => {
  dispatch(getmenFootwearRequest());
  return axios
    .get(`http://localhost:8080/menFootwear`)
    .then((res) => {
      dispatch(getmenFootwearSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getmenFootwearFailure());
    });
};
export const getmenClothing = (params) => (dispatch) => {
  dispatch(getmenClothingRequest());
  return axios
    .get(`http://localhost:8080/menClothing`)
    .then((res) => {
      dispatch(getmenClothingSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getmenClothingFailure());
    });
};
export const getmenAccessories = (params) => (dispatch) => {
  dispatch(getmenAccessoriesRequest());
  return axios
    .get(`http://localhost:8080/menAccessories`)
    .then((res) => {
      dispatch(getmenAccessoriesSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getmenAccessoriesFailure());
    });
};
