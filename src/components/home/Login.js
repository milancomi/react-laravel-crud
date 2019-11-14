import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {UserLogin} from '../../store/actions/AuthAction'
 class Login extends Component {

constructor(props){
  super(props)
  this.state = {
    email:'',
    password:''
  }
}

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state)
    this.props.UserLogin(this.state,this.props.history)
  }

  handleChange = (e)=>{
    e.preventDefault();
    this.setState({
      [e.target.id] :e.target.value
    })
  }


    render() {
        return (
            <div >
                <h1>Login Form</h1>
    <form  autoComplete="off" onSubmit={this.handleSubmit}>
              <div>
        {/* <TextField
          id="standard-basic"
          label="Ime"
          margin="normal"
        /> */}
        </div>
        <h1> </h1>
      <div>
        <TextField
          id="email"
          // label="email"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="email"
          // helperText="email!"
          fullWidth
          margin="normal"
          required
          type="email"
          onChange = {this.handleChange}

        />
        </div>
        <div>
        <TextField
          id="password"
          // label="password"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="password"
          // helperText="password!"
          fullWidth
          margin="normal"
          type="password"
          required
          onChange = {this.handleChange}

        />
        </div>
        <Button color="primary" type="submit" style={{width:300}} variant="contained">
        Login
      </Button>
      </form>
      </div>
        )
    }
}

const mapStateToProps = (state) =>
{
  return{
    authResponse:state.auth.authResponse
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    UserLogin:(creds,history) => dispatch(UserLogin(creds,history))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)