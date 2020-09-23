import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import './Register.css';
import { Grid, Container, 
        InputLabel, Card, 
        Select, TextField, 
        MenuItem, CardHeader, 
        CardContent, CardActions, 
        Snackbar, Button, Typography
} from '@material-ui/core';

import {Link} from 'react-router-dom';
import logo from "../../assets/img/Logo.png";


import { history, store } from '../../store';
import log from '../../utils/logger.service';
import { GpsFixed } from '@material-ui/icons';



var button_style={

    backgroundColor: '#0099cc', 
    color: '#fff',
    padding: '10px 0px 10px 0px',
    width: '80%',
    borderRadius: '1px',
    marginTop: '-20px'

}

export default class Register extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            errorMessage: '',
            phone_number: '',
            countries: [],
            formValid: false,
            country_code: '+91',
            open: false,
            errors: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                phone_number: '',
                message: ''
            }
        }
    }

    componentDidMount() {
        log('User on Registration Page')
        this.props.getCountries();
        store.subscribe(()=>{
            this.setState({countries: store.getState().getCountries.countries});
        })
    }

    handleAccessCode = (e)=> {
        this.setState({country_code: e.target.getAttribute('data-value')});
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
    };

    navigateToLogin = () => {
        history.push('/login');
    }
<<<<<<< HEAD
    
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a

    signUp = (e) => {
        e.preventDefault();
        this.props.userRegister(this.state.name, this.state.email, this.state.password, this.state.country_code+this.state.phone_number);
        store.subscribe(()=>{
            if(store.getState().userRegister.error) {
                this.setState({open: true});
                this.setState({
                    errorMessage: store.getState().userRegister.error
                })
            } else{ 
                history.push('/');
<<<<<<< HEAD
             
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
            }
        })
    }

    change = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch(name) {
<<<<<<< HEAD
            case 'name':    
                errors.name = value.match(/^[A-Za-z]+/)? '':'invalid name';
=======
            case 'name':
                errors.name = value.length < 3 ? 'Name should be more than 3 characters long': null;
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                break;
            case 'email':
                errors.email = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? '' : 'Invalid Email Address';
                break;
            case 'password':
                errors.password = value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? '' : 'Password should be atleast 7 characters with alphanumeric characters';
                break;
            case 'confirm_password':
                errors.confirm_password = (this.state.password === value) ? '' : 'Confirm Password should be equal to password';
                break;
            case 'phone_number':
                errors.phone_number = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) ? '' : 'Invalid phone number.';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value}, ()=> {
            return null;
        });
    }

    render() {
        return(
            <div>
<<<<<<< HEAD

                <HeaderContainer />

                <div class="sectionn box_shadow">


                    <div class="login_backgroundd">
                        
                        <div class="sub_login_backgroundd" >

                            <div class="sub_section_content_login_backgroundd">
                                
                                <br/>
                                <Typography variant="h5">Yoloj <img src ={logo} style={{width: '16px', height: '16px'}}/></Typography>

                                <br/><br/>
                                <Typography variant="body" style={{fontSize: '24px'}}>
                                    Manage your<br/> personal & professional Identity
                                </Typography>
                                <br/><br/>

                                <Typography varian="subtitle1" style={{fontSize: '14px'}}>
                                    Yolos delivers you the exquisite service by providing you the platform<br/>
                                    to build your peronal & professional identity to manage your individual and business<br/>
                                    expertises all over the world.
                                </Typography>

                            </div>

                        </div>

                    </div>


                    <div class="sub_sectionn">

                        <div class="login_sectionn">


                            <div style={{width: '72%', textAlign: 'left', marginLeft: '14%', marginTop:'-20px'}}>
                                <Typography variant="caption" style={{fontSize: '18px',color: '#4dd4d4d'}}>
                                    Create your free account here
                                </Typography>
                            </div>


                
=======
                <HeaderContainer />
                <div style={{backgroundColor:'#20ABC7', paddingTop:200, height:'100%', width:'100%', position: 'absolute',top: 0, left: 0}} className="rootCont">
                    <Grid container style={{justifyContent: 'center'}}>
                        <Grid item  style={{marginLeft:100}}>
                        <Card>
                            <CardHeader title="It seems you are new here! Register to Continue" />
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                            <CardContent>
                                <form noValidate autoCapitalize="off" onSubmit={(e) => this.signUp(e)}>
                                    <TextField 
                                        id="name"
                                        label="Enter your Name"
                                        name="name"
                                        fullWidth
                                        type="text"
<<<<<<< HEAD
                                        size="small"
                                        variant="outlined"
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                        error={this.state.errors.name}
                                        helperText={this.state.errors.name}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
<<<<<<< HEAD
                                        inputProps={{style: {fontSize: 12}}}
                                        style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                    />
                                    <TextField
                                        id="email"
                                        label="Enter your email"
                                        name="email"
                                        fullWidth
<<<<<<< HEAD
                                        size="small"
                                        variant="outlined"
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                        type="email"
                                        error={this.state.errors.email}
                                        helperText={this.state.errors.email}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
<<<<<<< HEAD
                                        inputProps={{style: {fontSize: 12}}}
                                        style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                    />
                                    <TextField
                                        id="password"
                                        label="Enter your password"
                                        name="password"
                                        fullWidth
<<<<<<< HEAD
                                        size="small"
                                        variant="outlined"
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                        type="password"
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
<<<<<<< HEAD
                                        inputProps={{style: {fontSize: 12}}}
                                        style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                    />
                                    <TextField 
                                        id="confirm_password"
                                        label="Re-Enter your password"
                                        name="confirm_password"
                                        fullWidth
<<<<<<< HEAD
                                        size="small"
                                        variant="outlined"
=======
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                        type="password"
                                        error={this.state.errors.confirm_password}
                                        helperText={this.state.errors.confirm_password}
                                        autoFocus
                                        required
                                        onChange={(e)=> this.change(e)}
<<<<<<< HEAD
                                        inputProps={{style: {fontSize: 12}}}
                                        style={{marginBottom: 15,width: '80%',borderRadius: '1px'}}
                                    />

                                    <div>
=======
                                    />
                                    <Grid item xs={4} style={{display:'flex'}}>
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.country_code}
<<<<<<< HEAD
                                            variant="outlined"
                                            style={{marginBottom: 15,width: '20%',borderRadius: '1px'}}
=======
                                            style={{minWidth:150}}
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                        >
                                            {
                                                (this.state.countries && this.state.countries.length) ? this.state.countries.map((item, index)=>{
                                                return <MenuItem key={index} value={item.dial_code} autoWidth={true} onClick={(e)=> this.handleAccessCode(e)}>{item.dial_code}</MenuItem>
                                                }) : <span>Loading</span>
                                            }
                                        </Select>
                                        <TextField 
                                            id="phone_number"
<<<<<<< HEAD
                                            label="Phone number"
                                            name="phone_number"
                                            fullWidth
                                            variant="outlined"
=======
                                            label="Enter your Phone number"
                                            name="phone_number"
                                            fullWidth
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                                            type="number"
                                            className="phoneNumber"
                                            error={this.state.errors.phone_number}
                                            helperText={this.state.errors.phone_number}
                                            autoFocus
                                            required
<<<<<<< HEAD
                                            style={{marginBottom: 15,width: '55%',marginLeft:'5%',borderRadius: '1px'}}
                                            onChange={(e)=> this.change(e)}
                                        />
                                    </div>

                                    <br />
                                    <Button variant="contained" style={button_style} type="submit" color="primary">Register</Button>
                                </form>
                            </CardContent>


                            <div class="forget_section">
                                <Link style={{color: '#4d4d4d'}} onClick={this.navigateToLogin}>Already have an account ? Sign In</Link>
                            </div>
      

                            </div>

                           

                            </div>





</div>


<br/><br/>

                           

   



=======
                                            style={{minWidth:800}}
                                            onChange={(e)=> this.change(e)}
                                        />
                                    </Grid>
                                    <br />
                                    <Button variant="contained" type="submit" color="primary">Create a Free Account</Button>
                                </form>
                            </CardContent>
                            <CardActions>
                                <label>Already have an account ? </label>
                                <Link href="#" onClick={this.navigateToLogin}>Link</Link>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
>>>>>>> 5610d71902f4f9a6736dd67a0cfb0ae6cbf1d42a
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={(e,r)=>this.handleClose(e,r)}
                    message={this.state.errorMessage}
                    action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={(e,r)=>this.handleClose(e,r)}>
                            Hide
                        </Button>
                    </React.Fragment>
                    }
                />
            </div>
        )
    }
}
