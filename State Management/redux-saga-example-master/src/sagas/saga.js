import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync(action) {
  //yield delay(4000);
  yield put({ type: "ABC", value: action.value+10 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
