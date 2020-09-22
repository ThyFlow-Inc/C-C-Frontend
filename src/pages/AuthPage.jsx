import React, { Component } from 'react'

function Form(props) {
      if (props.isLoggingActive){
        return(
            <form className="form">
              <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
              />
              <input
                  type="text"
                  className="form__input"
                  placeholder="Email"
              />
              <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
              />
              <a href="" type="submit" className="form__button">Sign Up</a>
            </form>
        )
      }
      return (
          <form className="form">
            <input
                type="text"
                className="form__input"
                placeholder="Email"
            />
            <input
                type="password"
                className="form__input"
                placeholder="Password"
            />
            <a href="" type="submit" className="form__button">Login</a>
          </form>
      )
}

export class AuthPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggingActive: true,
    }
  }

  setLogin = () => {
    this.setState({
      isLoggingActive: true
    })
  };

  setRegistration = () => {
    this.setState({
      isLoggingActive: false
    })
  };

  render() {

    return (
        <div class="auth">
          <div>&nbsp;</div>
          <div class="formpage">
            <h2 class="form-heading">Deal with verified business Providers</h2>
            <p class="form-paragraph">
              We help you choose the best business provider easily
            </p>
            <div class="auth-toggle">
              <a class="auth-login" onClick={this.setLogin}>Login</a>
              <a class="auth-login" onClick={this.setRegistration}>Sign Up</a>
            </div>
            <Form value={this.state.isLoggingActive} />

            <div class="form__foot">
              <p class="form-paragraph">Or login with</p>
              <p class="form-social">Google</p>
              <p class="form-social">Facebook</p>
              <p class="form-social">Twitter</p>
            </div>
          </div>
        </div>
    )
  }
  };


