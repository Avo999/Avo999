import { takeLatest, call, put } from 'redux-saga/effects';
import {
    GET_EVENTS_LIST_FAIL,
    GET_EVENTS_LIST_REQUEST,
    GET_EVENTS_LIST_SUCCESS,
    getEventsListRequest,
    POST_EVENTS_FAIL,
    POST_EVENTS_REQUEST,
    POST_EVENTS_SUCCESS, UPDATE_EVENTS_FAIL,
    UPDATE_EVENTS_REQUEST, UPDATE_EVENTS_SUCCESS
} from "../actions";
import Api from "../../Api";

export default function* watcher() {
   yield takeLatest(GET_EVENTS_LIST_REQUEST,handleGetEventListRequest);
   yield takeLatest(POST_EVENTS_REQUEST, handlePostEventsRequest);
   yield takeLatest(UPDATE_EVENTS_REQUEST, handlerUpdateEventsRequest)
}

function* handleGetEventListRequest(action) {
    try {
        const { data } = yield call(Api.getData, action.payload.start, action.payload.end)
        yield put({
            type: GET_EVENTS_LIST_SUCCESS,
            payload: data
        })
    } catch (e) {
        yield put({
            type: GET_EVENTS_LIST_FAIL,
            payload: {}
        })
    }
}

function* handlePostEventsRequest(action){
    const {data, start, end} = action.payload
    try{
        yield call(Api.postData, data);
        yield put({
            type: POST_EVENTS_SUCCESS,
            payload: {}
        })
    yield put(getEventsListRequest(start, end))
    }catch (e) {
        yield put({
            type:POST_EVENTS_FAIL,
            payload: {}
        })
    }
}

function *handlerUpdateEventsRequest(action){
    const {data, dataId, start, end} = action.payload;
    try{
        yield call(Api.updateData, data, dataId);
        yield put({
            type: UPDATE_EVENTS_SUCCESS,
            payload: {}
        })
        yield put(getEventsListRequest(start, end))
    } catch (e) {
        yield put({
            type: UPDATE_EVENTS_FAIL,
            payload: {}
        })
    }
}