import {
    AUTHENTICATE,
    LOGOUT
} from '../actions/auth'

const initialState = {
    isLogedIn: false,
    token: '',
    userId: '',
    email:'',
}

export default  function authenticate(state = initialState, action){

    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state, isLogedIn: true,
                token: action.token,
                userId: action.userId,
                email: action.email
            }
        case LOGOUT:
            return {...state,isLogedIn:false}
        default:
            return state;
    }
}