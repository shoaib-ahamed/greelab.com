import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import './Admin.css'

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }

    }

    handleInputUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleInputPass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        const data = this.state
        if (data.userName === 'Admin' && data.password === '##GreeSadas16') {
            const hashDigest = sha256(data.password);
            localStorage.setItem('token', `${hashDigest.words}`)
            this.props.history.push('/admin')
        }
    }

    render() {

        return (
            <div>
                <section className='admin-login'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <form onSubmit={this.handleSubmitForm}>
                                    <div className='mb-3'>
                                        <input value={this.state.value} onChange={this.handleInputUserName} type="text" className="form-control" placeholder="User name" />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={this.state.value} onChange={this.handleInputPass} type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className='text-right'>
                                        <button type='submit' className='btn btn-outline-success'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }

}

export default withRouter(Login)
