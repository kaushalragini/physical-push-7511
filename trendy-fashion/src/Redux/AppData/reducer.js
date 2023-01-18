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

const initialState = {
  menFootwear: [],
  menClothing: [],
  menAccessories: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_MENFOOTWEAR_REQUEST:
      return { ...state, isLoading: true };
    case GET_MENFOOTWEAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menFootwear: payload,
      };
    case GET_MENFOOTWEAR_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case GET_MENACCESSORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MENACCESSORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menAccessories: payload,
      };

    case GET_MENACCESSORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_MENCLOTHING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MENCLOTHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menClothing: payload,
      };
    case GET_MENCLOTHING_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
  }
};
