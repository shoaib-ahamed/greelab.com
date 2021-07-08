import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal';

import './Admin.css'


Modal.setAppElement('#root')

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            single: [],
            modal: false
        }
    }

   async componentDidMount() {
        const response = await fetch('https://api.greelab.com/tasks')
        const json = await response.json();
        const tasks = json.data.data
       const array = tasks.reverse();
        this.setState({tasks: array})
    }

    async handleModal (event) {
        const response = await fetch(`https://api.greelab.com/tasks/${event}`);
        const json = await response.json();
        const data = json.data.data;
        this.setState({single: data});
        this.setState({modal: true});
    }


    deleteData (event) {
        fetch(`https://api.greelab.com/tasks/${event}`, { method: 'DELETE' })
        .then(() => this.setState({modal: false}))
    }



    modalClose = () => {
        this.setState({modal: false})
    }



    render() {

        const isAuthenticated = localStorage.getItem('token');

        return isAuthenticated ? (
            <div>

                <section>
                        <table className="table table-dark table-hover">

                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date & Time</th>
                            </tr>
                            </thead>

                            {this.state.tasks.map((data) => (
                                <tbody key={data._id}>
                                <tr onClick={() => this.handleModal(data._id)}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.date}</td>
                                </tr>
                                </tbody>
                            ))}

                        </table>
                </section>

                <section>
                    <Modal
                        isOpen={this.state.modal}
                        shouldCloseOnOverlayClick={false}
                        onRequestClose = {() => this.setState({modal: false})}
                        style = {{
                            overlay: {
                                background: 'rgba(0, 0, 0, 0.35)',
                                zIndex: '1000'
                            },

                            content: {
                                background: '#343a40',
                                borderRadius: '25px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                width: '888px',
                                margin: '0 auto',
                                border: 'none',
                                height: 'auto'
                            }
                        }}

                    >
                        {
                            <div className='Client-Details'>
                                <div className='text-right'>
                                    <button className='btn' onClick={this.modalClose}>x</button>
                                    <button className='btn' onClick={() => this.deleteData(this.state.single._id)} ></button>
                                </div>
                                <ul key={this.state.single._id}>
                                    <li>Name: <span>{this.state.single.name}</span></li>
                                    <li>Email: <span>{this.state.single.email}</span></li>
                                    <li>Company: <span>{this.state.single.company}</span></li>
                                    <li>Description: <span>{this.state.single.description}</span></li>
                                    <li>Budget: <span>{this.state.single.budget}</span></li>
                                    <li>Location:
                                        {this.state.single.geoLocation && this.state.single.geoLocation.map((data, index) =>(
                                            <ul key={index}>
                                                <li>City: <span>{data.city}</span></li>
                                                <li>State: <span>{data.state}</span></li>
                                                <li>Country: <span>{data.country_name}</span></li>
                                            </ul>
                                        ))}
                                    </li>
                                    <li>Date: <span>{this.state.single.date}</span></li>
                                </ul>
                        </div>}

                    </Modal>
                </section>

            </div>
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        )
    }
}

export default Admin
