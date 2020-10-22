import React, { Component } from 'react'
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import './authPage.scss'
import axios from 'axios'



class Register extends Component{
    constructor () {
        super()

        this.state = {
            fullname: '',
            email: '',
            password: ''
        }
        // this.fullname = this.fullname.bind(this)
        // this.email = this.email.bind(this)
        // this.password = this.password.bind(this)

    }
    handleSubmit = event => {
        event.preventDefault()

        this.setState(
            {
                fullname:'',
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

    register(){
        axios.get('https://c-c-backend.herokuapp.com/api/v1/users/', {
            body: JSON.stringify({
                fullname: this.state.fullname,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.props.history.push("/dashboard")
            })
    }

    render(){
        return(
            <form className="form">
                <FormInput
                    name="fullname"
                    type="text"
                    value={this.state.fullname}
                    handleChange={this.handleChange}
                    placeholder="Full Name"
                    className="form__input"
                    required
                />
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
                    required
                />
                <Button className="form-button" name="Sign Up" type="submit" onClick={this.register} />
            </form>
        )
    }
}

export default Register;

