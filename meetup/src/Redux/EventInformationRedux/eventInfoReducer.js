import * as eventInformationAction from './actionTypes'

const initState = {
    isLoading : false,
    isError : false ,
    eventInfoData : {}
}

export const eventInfoReducer = (state = initState , {type , payload}) =>{
    switch(type){
        case eventInformationAction.EVENT_INFO_REQUEST : {
            return{
                ...state,
                isLoading : true
            }
        }
        case eventInformationAction.EVENT_INFO_SUCCESS : {
            return{
                ...state,
                isLoading : false,
                eventInfoData : payload
            }
        }
        case eventInformationAction.EVENT_INFO_FAILURE : {
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case eventInformationAction.EVENT_ATTENDEE_PUT_REQUEST : {
            return{
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case eventInformationAction.EVENT_ATTENDEE_PUT_SUCCESS : {
            return{
                ...state,
                isLoading : false,
                
            }
        }
        case eventInformationAction.EVENT_ATTENDEE_PUT_FAILURE : {
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case eventInformationAction.EVENT_COMMENTS_PUT_REQUEST : {
            return{
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case eventInformationAction.EVENT_COMMENTS_PUT_SUCCESS : {
            return{
                ...state,
                isLoading : false,
                
            }
        }
        case eventInformationAction.EVENT_COMMENTS_PUT_FAILURE : {
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        }
        default : 
        return state
    }
}