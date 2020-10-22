import React, { Component } from 'react'
import Login from "../../components/authPage/login";
import Register from "../../components/authPage/register";
import './AuthPage.scss'

export class AuthPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'first',
    }
  }

  changeDisplay = () => {
      let {display} = this.state;
      this.setState({
          display: display === 'first' ? 'second' : 'first'
      });
  }

  renderInner() {
    let { display } = this.state;

    if (display === 'first') {
      return <Login />
    } else if(display === 'second') {
      return <Register />
    }
  }

  render() {
    return (
        <div className="AuthPage">
          <div>&nbsp;</div>
          <div className="AuthPage__form-content">
            <h2 className="AuthPage__heading">Deal with verified business Providers</h2>
            <p className="AuthPage__paragraph">
              We help you choose the best business provider easily
            </p>
            <div className="AuthPage__toggle">
              <a className="AuthPage__toggle-trigger" onClick={this.changeDisplay}>Login</a>
              <a className="AuthPage__toggle-trigger" onClick={this.changeDisplay}>Sign Up</a>
              <hr/>
            </div>
              {this.renderInner()}
            <div className="AuthPage__foot">
              <p className="AuthPage__foot-paragraph">Or login with</p>
              <p className="AuthPage__foot-social">Google</p>
              <p className="AuthPage__foot-social">Facebook</p>
              <p className="AuthPage__foot-social">Twitter</p>
            </div>
          </div>
        </div>
    )
  }
  };


