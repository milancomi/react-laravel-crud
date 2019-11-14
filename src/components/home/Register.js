import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/AuthAction'


class Register extends Component {

  constructor (props)
  {
    super(props) 
    this.state = {
      email:'',
      first_name:'',
      last_name:'',
      password:''
    } 
  }

  handleChange =  (e) =>{
    this.setState({
      [e.target.id] :e.target.value
    })
  }


  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("button clicked")
    console.log(this.state);
    this.props.signUp(this.state);
  }


    render() {
      const {authResponse}= this.props;
        return (
<div >
                <h1>Kreiraj Nalog</h1>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
      <div>
        <TextField
          id="first_name"
          label="Ime"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi ime"
          fullWidth
          margin="normal"
          required
          onChange={this.handleChange}
        />
        </div>
        <div>
        <TextField
          id="last_name"
          label="Prezime"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi prezime"
          fullWidth
          margin="normal"
          required
          onChange={this.handleChange}
        />
        </div>
        <div>
        <TextField
          id="email"
          label="email"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi email"
          fullWidth
          type="email"
          margin="normal"
          required
          onChange={this.handleChange}

        />
        </div>
        <div>
        <TextField
          id="password"
          label="password"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi lozinku"
          fullWidth
          margin="normal"
          type="password"
          onChange={this.handleChange}
          required


        />
        </div>
        <Button color="primary" type="submit" style={{width:300}} variant="contained">
        Sign Up
      </Button>
      <br></br>
      <b>{authResponse!==null && authResponse!=="" ? authResponse:null}</b>
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
    signUp:(creds) => dispatch(signUp(creds))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)