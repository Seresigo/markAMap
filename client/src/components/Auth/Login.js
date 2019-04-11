import React from 'react'
import GoogleLogin from 'react-google-login'
import { withStyles } from '@material-ui/core/styles'
import { from } from 'apollo-link'
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse().id_token
    console.log('------------------{idToken}------------------', { idToken })
  }

  const onFailure = user => console.log('------------------user------------------', user)

  return (
    <GoogleLogin
      clientId="156026607675-ipvimjv3k98moqhj2lg4gsp0ctd17tqm.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
    />
  )
}

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default withStyles(styles)(Login)
