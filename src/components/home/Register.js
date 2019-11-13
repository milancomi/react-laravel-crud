import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

export default class Register extends Component {
    render() {
        return (
<div >
                <h1>Register Form</h1>
    <form noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          label="Ime"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi ime"
          fullWidth
          margin="normal"
          required="required"
        />
        </div>
        <div>
        <TextField
          id="standard-basic"
          label="Prezime"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi prezime"
          fullWidth
          margin="normal"
          required="required"


        />
        </div>
        <div>
        <TextField
          id="standard-basic"
          label="email"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi email"
          fullWidth
          type="email"
          margin="normal"
          required="required"
        />
        </div>
        <div>
        <TextField
          id="standard-basic"
          label="password"
          style={{ margin: 8,maxWidth:700 }}
          placeholder="Unesi lozinku"
          fullWidth
          margin="normal"
          type="password"
          required="required"

        />
        </div>
        <Button color="primary" type="submit" style={{width:300}} variant="contained">
        Register
      </Button>
      </form>
      </div>
        )
    }
}
