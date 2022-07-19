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