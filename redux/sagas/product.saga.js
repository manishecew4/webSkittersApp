import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/product.action";
import * as constants from "../constants/product.constants";

export function* addProduct(data){
    console.log(data)
}

export function* productAdd() {
    yield takeLatest(constants.PRODUCT_ADD, addProduct);
  }