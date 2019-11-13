import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

export default class Login extends Component {
    render() {
        return (
            <div >
                <h1>Login Form</h1>
    <form noValidate autoComplete="off">
              <div>
        <TextField
          id="standard-basic"
          label="Ime"
          margin="normal"
        />
        </div>
        <h1> </h1>
      <div>
        <TextField
          id="standard-full-width"
          label="email"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="email"
          helperText="email!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
        <TextField
          id="standard-full-width"
          label="password"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="password"
          helperText="password!"
          fullWidth
          margin="normal"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <Button color="primary" style={{width:300}} variant="contained">
        Login
      </Button>
      </form>
      </div>
        )
    }
}
