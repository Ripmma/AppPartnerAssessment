import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import axios from 'axios';
import { 
  Jumbotron, 
  Input,
  InputGroupAddon,
  InputGroupText, 
  Button 
} from 'reactstrap';

import '../styles/login.css';

import emailIc from '../APReactTest/ic-email.png';
import passwordIc from '../APReactTest/ic-password.png';
import usernameIc from '../APReactTest/ic-username.png';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: "login",
      username: '',
      email: '',
      password: ''
    }
    this.changeForm = this.changeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
  }

  changeForm(form) {
    this.setState({
      form: form
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmitLogin() {
    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', {
      email: this.state.email,
      password: this.state.password
    }).then(res => console.log(res))
  }

  handleSubmitSignup() {
    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php' , {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }).then(res => console.log(res))
  }

  render() {
    return (
      <Jumbotron className="login-bg">
        <AppNavbar />
        <center>
          {
            this.state.form === "signup" ?
            <div>
              <div className="form-buttons">
                <h4 onClick={()=>this.changeForm("signup")} className={`form-button ${this.state.form==="signup"?"selected":""}`}>
                  <u><strong>SIGN UP</strong></u>
                </h4>
                <h4 onClick={()=>this.changeForm("login")} className={`form-button ${this.state.form==="login"?"selected":""}`}>
                  <u>LOGIN</u>
                </h4>
              </div>
                <div className="form">
                  <div className="form-log">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="iconImg">
                        <img className="icon" src={usernameIc} alt="Icon1Sign" />
                      </InputGroupText>
                      <Input onChange={this.handleChange} className="input-log" name="username" placeholder="Username" />
                    </InputGroupAddon>
                  </div>
                  <br/>
                  <div className="form-log">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="iconImg">
                        <img className="icon" src={emailIc} alt="Icon2Sign" />
                      </InputGroupText>
                      <Input onChange={this.handleChange} className="input-log" name="email" placeholder="Email" />
                    </InputGroupAddon>
                  </div>
                  <br/>
                  <div className="form-log">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="iconImg">
                        <img className="icon" src={passwordIc} alt="Icon3Sign" />
                      </InputGroupText>
                      <Input onChange={this.handleChange} type="password" className="input-log" name="password" placeholder="Password" />
                    </InputGroupAddon>
                  </div>
                  <br/>
                  <Button onClick={this.handleSubmitSignup} className="log-button" size="lg">SIGN UP</Button>
                </div>
              </div>
              :
            <div>
              <div className="form-buttons">
                <h4 onClick={()=>this.changeForm("signup")} className={`form-button ${this.state.form==="signup"?"selected":""}`}>
                  <u>SIGN UP</u>
                </h4>
                <h4 onClick={()=>this.changeForm("login")} className={`form-button ${this.state.form==="login"?"selected":""}`}>
                  <u><strong>LOGIN</strong></u>
                </h4>
              </div>
                <div className="form">
                  <div className="form-log">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="iconImg">
                        <img className="icon" src={emailIc} alt="icon1Log" />
                      </InputGroupText>
                      <Input onChange={this.handleChange} className="input-log" name="email" placeholder="Email" />
                    </InputGroupAddon>
                  </div>
                  <br/>
                  <div className="form-log">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className="iconImg">
                        <img className="icon" src={passwordIc} alt="icon2Log" />
                      </InputGroupText>
                      <Input onChange={this.handleChange} type="password" className="input-log" name="password" placeholder="Password" />
                    </InputGroupAddon>
                  </div>
                  <br/>
                  <Button onClick={this.handleSubmitLogin} className="log-button" size="lg">LOGIN</Button>
                </div>
              </div>
          }
        </center>
      </Jumbotron>
    );
  }
}

export default LogIn;
