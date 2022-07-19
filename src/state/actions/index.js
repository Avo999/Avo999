export const GET_EVENTS_LIST_REQUEST = 'GET_EVENTS_LIST_REQUEST';
export const GET_EVENTS_LIST_SUCCESS = 'GET_EVENTS_LIST_SUCCESS';
export const GET_EVENTS_LIST_FAIL = 'GET_EVENTS_LIST_FAIL';

export function getEventsListRequest(start, end) {
    return {
        type: GET_EVENTS_LIST_REQUEST,
        payload: {start, end}
    }
}

export const POST_EVENTS_REQUEST = 'POST_EVENTS_REQUEST';
export const POST_EVENTS_SUCCESS = 'POST_EVENTS_SUCCESS';
export const POST_EVENTS_FAIL = 'POST_EVENTS_FAIL';

export function postEventsRequest(data, start, end) {
    return{
        type: POST_EVENTS_REQUEST,
        payload: {data, start, end}
    }
}

export const UPDATE_EVENTS_REQUEST = 'UPDATE_EVENTS_REQUEST';
export const UPDATE_EVENTS_SUCCESS = 'UPDATE_EVENTS_SUCCESS';
export const UPDATE_EVENTS_FAIL = 'UPDATE_EVENTS_FAIL';

export function updateEventsRequest(data, dataId, start, end) {
    return{
        type: UPDATE_EVENTS_REQUEST,
        payload: {data, dataId, start, end}
    }
}