import {SET_SIGNUP_DISPLAY} from './actiontypes';

const initialState = {
    signUpModalState: false,
};  

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SIGNUP_DISPLAY:
            console.log(action.payload.value);
            return{
               ...state,
               signUpModalState : action.payload.value,
            }
            
        default:
            return state
    }
}
