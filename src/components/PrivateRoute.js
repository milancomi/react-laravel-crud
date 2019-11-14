import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'


export const PrivateRoute = ({component:Component,...rest}) =>(


<Route {...rest} render={ props=>(
    localStorage.getItem('user') ?
    <Component {...props}/>
    :<Redirect to={{pathName: '/', state:{from:props.location}}}/>   
)} />

) 