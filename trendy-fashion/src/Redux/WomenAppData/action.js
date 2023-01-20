import axios from "axios";
import {
  GET_WOMENACCESSORIES_FAILURE,
  GET_WOMENACCESSORIES_REQUEST,
  GET_WOMENACCESSORIES_SUCCESS,
  GET_WOMENCLOTHING_FAILURE,
  GET_WOMENCLOTHING_REQUEST,
  GET_WOMENCLOTHING_SUCCESS,
  GET_WOMENFOOTWEAR_FAILURE,
  GET_WOMENFOOTWEAR_REQUEST,
  GET_WOMENFOOTWEAR_SUCCESS,
} from "./actionTypes";

export const getwomenFootwearRequest = () => {
  return {
    type: GET_WOMENFOOTWEAR_REQUEST,
  };
};
export const getwomenFootwearSuccess = (payload) => {
  return {
    type: GET_WOMENFOOTWEAR_SUCCESS,
    payload,
  };
};
export const getwomenFootwearFailure = () => {
  return {
    type: GET_WOMENFOOTWEAR_FAILURE,
  };
};
export const getwomenAccessoriesRequest = () => {
  return {
    type: GET_WOMENACCESSORIES_REQUEST,
  };
};
export const getwomenAccessoriesSuccess = (payload) => {
  return {
    type: GET_WOMENACCESSORIES_SUCCESS,
    payload,
  };
};
export const getwomenAccessoriesFailure = () => {
  return {
    type: GET_WOMENACCESSORIES_FAILURE,
  };
};
export const getwomenClothingRequest = () => {
  return {
    type: GET_WOMENCLOTHING_REQUEST,
  };
};
export const getwomenClothingSuccess = (payload) => {
  return {
    type: GET_WOMENCLOTHING_SUCCESS,
    payload,
  };
};
export const getwomenClothingFailure = () => {
  return {
    type: GET_WOMENCLOTHING_FAILURE,
  };
};

export const getwomenFootwear = (params) => (dispatch) => {
  dispatch(getwomenFootwearRequest());
  return axios
    .get(`http://localhost:8080/womenFootwear`, params)
    .then((res) => {
      dispatch(getwomenFootwearSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getwomenFootwearFailure());
    });
};
export const getwomenClothing = (params) => (dispatch) => {
  dispatch(getwomenClothingRequest());
  return axios
    .get(`http://localhost:8080/womenClothing`, params)
    .then((res) => {
      dispatch(getwomenClothingSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getwomenClothingFailure());
    });
};
export const getwomenAccessories = (params) => (dispatch) => {
  dispatch(getwomenAccessoriesRequest());
  return axios
    .get(`http://localhost:8080/womenAccessories`, params)
    .then((res) => {
      dispatch(getwomenAccessoriesSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getwomenAccessoriesFailure());
    });
};
