import {
    GET_EVENTS_LIST_FAIL,
    GET_EVENTS_LIST_REQUEST,
    GET_EVENTS_LIST_SUCCESS, POST_EVENTS_FAIL,
    POST_EVENTS_REQUEST,
    POST_EVENTS_SUCCESS
} from "../actions";

const initialState = {
    events: [],
    eventsListStatus: null,
    eventsPostStatus: null
}

export default function eventReducer(state = initialState, action){
   switch (action.type){

       case GET_EVENTS_LIST_REQUEST: {
           return {
               ...state,
               eventsListStatus: 'request'
           }
       }
       case GET_EVENTS_LIST_SUCCESS: {

           return {
               ...state,
               eventsListStatus: 'ok',
               events: action.payload,
           }
       }
       case GET_EVENTS_LIST_FAIL: {
           return {
               ...state,
               eventsListStatus: 'fail'
           }
       }
       case POST_EVENTS_REQUEST:{
           return {
               ...state,
               eventsPostStatus: 'request'
           }
       }
       case POST_EVENTS_SUCCESS:{
           return {
               ...state,
               eventsPostStatus: 'ok'
           }
       }
       case POST_EVENTS_FAIL:{
           return {
               ...state,
               eventsPostStatus: 'fail'
           }
       }

       default:{
           return{
               ...state
           }
       }
   }
}