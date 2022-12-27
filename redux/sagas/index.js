import { all } from "redux-saga/effects";

import { productAdd } from "./product.saga";


export default function* rootSaga() {
  yield all([
    productAdd(),
  ]);
}
