import * as constants from "../constants/product.constants";
import { GLOBAL_INTITIAL_STATE } from "../../utils/initialState";

const INITIAL_STATE = {
    addProduct: {
      ...GLOBAL_INTITIAL_STATE,
      data: {},
    },
  };

  export const productReducer = (state = INITIAL_STATE, action) => {
    const { payload } = action;

    switch (action.type) {
       case constants.PRODUCT_ADD:
        return {
            ...state,
            addProduct:{
                ...state.addProduct,
                isLoading: true,
                isSuccessful: false,
                isFailure: false,
            }
        };
        case constants.PRODUCT_ADD_SUCCESSFULL:
        return {
            ...state,
            addProduct:{
                ...state.addProduct,
                isLoading: false,
                isSuccessful: true,
                isFailure: false,
                data: payload
            }
        };
        case constants.PRODUCT_ADD_FAILED:
            return {
                ...state,
                addProduct:{
                    ...state.addProduct,
                    isLoading: false,
                    isSuccessful: false,
                    isFailure: true,
                }
            }
    default:
        return state;
    }
  }