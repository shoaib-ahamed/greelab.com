import axios from "axios";
import React, { Component } from "react";
import Lottie from 'react-lottie';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import back from "../../assets/home/back.svg";
import form from '../../assets/home/form.svg';
import info from '../../assets/home/info.svg';
import getInTouchLottie from '../../assets/home/lottie/get-in-touch.json';
import thankYouLottie from '../../assets/home/lottie/thank-you.json';
import './Home.css';




Modal.setAppElement('#root')

class Form extends Component {

    constructor(props){
        super(props)
        const date = new Date()
        const x = this.formatDate(date)
        const dateString = x.toString()
        this.state = {
            name: '',
            email: '',
            company: '',
            description: '',
            budget: '',
            date: dateString,
            modal: false,
            geoLocation: []
        }
    }

    handleInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleInputEmailAddress = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleInputCompanyName = (event) => {
        this.setState({
            company: event.target.value
        })
    }

    handleInputDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleInputBudget = (event) => {
        this.setState({
            budget: event.target.value
        })
    }

    formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }

    // reference = (event) => {
    //     this.setState({
    //         referenceType : event.target.value
    //     })
    //     console.log(referenceType);
    // }


    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state

        axios.post('https://api.greelab.com/tasks', data)
            .then(() => {
                this.setState({modal: true})
                this.OtherForm.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }

    modalClose = () => {
        this.setState({modal: false})
    }

    async componentDidMount() {
        await axios.get('https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5')
            .then((data) => {
                const json = data.data
                this.setState({geoLocation: json})
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {

        const lottieStyle = {
            display: 'inline-flex',
            width: '40px',
            height: '40px',
            overflow: 'visible',
            margin: '0 0 0 12px'
        }
        const thankYouLottieStyle = {
            width: '100px',
            height: '100px',
            display: 'inline-flex',
            overflow: 'visible',
        }

        const getInTouchLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: getInTouchLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }
        const thankYouLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: thankYouLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        return (
            <div>

                <section className='contact-form'>
                    <div className='container'>
                        <div className='component-eight'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <Link to='/'><button className="btn back-btn"><span><img className='back-arrow' src={back} alt="back"/></span> Back</button></Link>
                                    <h2>Let's have a talk !</h2>
                                    <h5>It all starts with a good discussion</h5>
                                    <form onSubmit={this.handleSubmit} ref={(formData) => this.OtherForm = formData}>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputName} type="text" className="form-control" placeholder="Your name" required />
                                        </div>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputEmailAddress} type="email" className="form-control" placeholder="Your email" required />
                                        </div>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputCompanyName} type="text" className="form-control" placeholder="Company name (Optional)" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea style={{marginBottom: 0}} value={this.state.value} onChange={this.handleInputDescription} rows="4" className="form-control" placeholder="Tell us about your project (Optional)" />
                                            <div className="form-info">
                                                <img src={info} alt="info" />
                                                <p>
                                                    Tell us what it is you hope to accomplish with us and lay out any
                                                    problems.
                                                    Provide an overview of your project scope, timeline, and budget.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputBudget} type='text' className="form-control" placeholder="Budget in mind (Optional)" />
                                        </div>
                                        <div className="submit-btn">
                                            <button type="submit" className="btn" >Get in touch</button>
                                            <Lottie style={lottieStyle} options={getInTouchLottieOptions} />
                                        </div>
                                    </form>
                                </div>
                                <div className='col-lg-5 d-show'>
                                    <img src={form} alt="idea"/>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                background: '#0070C9',
                                borderRadius: '25px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                width: "473px",
                                margin: 'auto',
                                height: '505px',
                                border: 'none',
                                paddingTop: '50px'
                            }
                        }}

                    >
                        <Lottie style={thankYouLottieStyle} options={thankYouLottieOptions}/>
                        <h1>Thank you for <br/> reaching out!</h1>
                        <p>A member of the Gree Lab team <br/> will get back in touch with you as <br/> soon as possible.</p>
                        <Link to='/'>
                            <button className='btn' onClick={this.modalClose}>Okay</button>
                        </Link>
                    </Modal>
                </section>

            </div>
        )
    }
}

export default Form
