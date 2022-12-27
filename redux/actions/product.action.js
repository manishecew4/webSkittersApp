import * as constants from "../constants/product.constants";

export const addProduct = (payload)=>({
    type: constants.PRODUCT_ADD,
    payload
})

export const addProductSuccess = (payload)=>({
    type: constants.PRODUCT_ADD_SUCCESSFULL,
    payload
})

export const addProductFailed = (payload)=>({
    type: constants.PRODUCT_ADD_FAILED,
    payload
})