const initState = {
    authResponse:null,

}

const AuthReducer =  (state = initState,action)=>{
    switch(action.type){
        case 'SHORT_PASSWORD':
            console.log(action);
            return{
                ...state,
                authResponse:'Password is too short'
            }

            case 'SIGNUP_SUCCESS':
                console.log(action)
                return{
                    ...state,
                    authResponse:'Registrovanje uspešno !',
                }

                case 'SIGNUP_ERROR':
                        console.log(action)
                        return{
                            ...state,
                            authResponse:'action.error.message',
                        }

                    case 'CODE_ERROR':
                console.log(action)
                return{
                    ...state,
                    authResponse:'kod nije za djoku',
                }
                
                case 'LOGIN_SUCCESS':
                        console.log(action)
                        return{
                            ...state,
                            authResponse:'redirecting to dashboard....',
                        } 
                        case 'LOGIN_ERROR ':
                                console.log(action)
                                return{
                                    ...state,
                                    authResponse:action.error.message,
                                }
        


                default:
                    return state;

    }

}

export default AuthReducer;