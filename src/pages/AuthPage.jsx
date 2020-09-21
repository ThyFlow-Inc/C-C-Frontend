import React, { Component } from 'react'

export class AuthPage extends Component {
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
              <a class="auth-login">Login</a>
              <a class="auth-login">Sign Up</a>
            </div>
            <form class="form">
              <input
                  type="text"
                  class="form__input"
                  placeholder="Email"
              />
              <input
                  type="password"
                  class="form__input"
                  placeholder="Password"
              />
              <a href="" type="submit" class="form__button">Login</a>
            </form>
            <form class="form">
              <input
                  type="text"
                  class="form__input"
                  placeholder="Full Name"
              />
              <input
                  type="text"
                  class="form__input"
                  placeholder="Email"
              />
              <input
                  type="password"
                  class="form__input"
                  placeholder="Password"
              />
              <a href="" type="submit" class="form__button">Sign Up</a>
            </form>
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


