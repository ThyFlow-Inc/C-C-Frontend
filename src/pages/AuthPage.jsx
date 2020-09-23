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
          <div className="formpage">
            <h2 className="form-heading">Deal with verified business Providers</h2>
            <p className="form-paragraph">
              We help you choose the best business provider easily
            </p>
            <div className="auth-toggle">
              <a className="auth-login" onClick={this.setLogin}>Login</a>
              <a className="auth-login" onClick={this.setRegistration}>Sign Up</a>
            </div>
            <Form value={this.state.isLoggingActive} />

            <div className="form__foot">
              <p className="form-paragraph">Or login with</p>
              <p className="form-social">Google</p>
              <p className="form-social">Facebook</p>
              <p className="form-social">Twitter</p>
            </div>
          </div>
        </div>
    )
  }
  };


