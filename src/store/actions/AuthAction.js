import {SignUpService} from '../services/AuthService'

export const signUp = (credentials) =>{
    console.log(credentials);
    return (dispatch)=>{

        if(credentials.password.length < 6){
            return dispatchEvent({type:'SHORT_PASSWORD'})
        }
    
        SignUpService(credentials).then((res)=>{
            console.log(res)
            if(res.token!==null){  
                localStorage.setItem("user",'Bearer '+res.token);
            dispatch({type:'SIGNUP_SUCCESS'})
            }else{
                dispatch({type:'SIGNUP_ERROR',res})
            
            }
        },
        error=>{
            dispatch({type:'SIGNUP_ERROR',error});
        }
      
        )


    }

}