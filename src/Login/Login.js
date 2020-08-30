import { Link } from 'react-router-dom';
import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Medicine from '../images/medicine.png'
import Styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const firebase = require("firebase");

class Login extends React.Component {

    state = {
            email: null,
            password: null,
            serverError: false
        };
   

    render() {

        const {classes} = this.props ;

        

        return (
            
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                    
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper1}>
                                <Typography component="h1" variant="h5" >
                            DAABAI
          </Typography>
                        <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
                            <FormControl required fullWidth margin='normal'>
                                <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                                <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='login-email-input'></Input>
                            </FormControl>
                            <FormControl required fullWidth margin='normal'>
                                <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                                <Input autoComplete="current-password" type="password" onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
                            </FormControl>
                            
                                    <Button type='submit' fullWidth variant='contained'   className={classes.submit}>Log In</Button>
                      
                       </form>
                        {this.state.serverError ?
                            <Typography className={classes.errorText} component='h5' variant='h6'>
                                Incorrect Login Information
            </Typography> :
                            null
                        }
                        <h5 className={classes.noAccountHeader}>Don't Have An Account?</h5>
                        <Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
                    </Paper>
                </main>
                </div>
                </Grid>
                </Grid>
                

        );
    }



  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'email':
        this.setState({email: event.target.value });
        break;

      case 'password':
        this.setState({password: event.target.value });
        break;

      default:
        break;
    }
  }

  submitLogin = async (e) => {
                        e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
                        this.props.history.push('/dashboard');
                        
      }, err => {
                        this.setState({ serverError: true });
        console.log('Error logging in: ', err);
      });
  };

}

       

export default withStyles(Styles)(Login)