import React, { Component } from 'react'
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import './authPage.scss'
import axios from 'axios'

class Login extends Component{
    state =  {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState(
            {
                email: '',
                password: ''
            }
        )
    }


    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    login(){
        axios.get('https://c-c-backend.herokuapp.com/api/v1/users/',{ body: JSON.stringify(
            {
                email: this.state.email,
                password: this.state.password
            }
            )})
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.props.history.push("/dashboard")
            })
    }

    render(){
        return(
            <form className="form">
                <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    placeholder="Email"
                    className="form__input"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    placeholder="Password"
                    className="form__input"
                    required
                />
                <Button className="form-button" name="Login" type="submit" onClick={this.login} />
            </form>
        )
    }
}

export default Login;

