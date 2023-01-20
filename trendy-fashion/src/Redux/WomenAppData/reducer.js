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

const initialState = {
  womenFootwear: [],
  womenClothing: [],
  womenAccessories: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_WOMENFOOTWEAR_REQUEST:
      return { ...state, isLoading: true };
    case GET_WOMENFOOTWEAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        womenFootwear: payload,
      };
    case GET_WOMENFOOTWEAR_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case GET_WOMENACCESSORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WOMENACCESSORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        womenAccessories: payload,
      };

    case GET_WOMENACCESSORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_WOMENCLOTHING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WOMENCLOTHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        womenClothing: payload,
      };
    case GET_WOMENCLOTHING_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
  }
};
