import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Lottie from 'react-lottie'
import axios from "axios";
import Modal from 'react-modal'

import './Home.css'
import componentOne from '../../assets/home/component-1.png'
import componentTwo from '../../assets/home/component-2.png'
import componentThree from '../../assets/home/component-3.png'
import componentFour from '../../assets/home/component-4.png'
import ashraf from '../../assets/home/ashraf.png'
import pranto from '../../assets/home/pranto.png'
import shanto from '../../assets/home/shanto.png'
import shafi from '../../assets/home/shafi.png'
import daiyan from '../../assets/home/daiyan.png'
import workshop from '../../assets/home/workshop.png'
import form from '../../assets/home/form.svg'
import info from '../../assets/home/info.svg'

import viewServiceLottie from '../../assets/home/lottie/view-our-services.json'
import buildIdentityAndPrototypeLottie from '../../assets/home/lottie/build-your-identity.json'
import buildingWebsiteLottie from '../../assets/home/lottie/start-building-your-website.json'
import workshopLottie from '../../assets/home/lottie/workshop.json'
import getInTouchLottie from '../../assets/home/lottie/get-in-touch.json'
import thankYouLottie from '../../assets/home/lottie/thank-you.json'

Modal.setAppElement('#root')

class Home extends Component {

    constructor(props) {
        super(props);

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
            geoLocation: [],
            reference: ""
        }

        this.scrollRef = React.createRef()
        this.scrollViewSection = this.scrollViewSection.bind(this);

    }

    scrollViewSection() {
        this.scrollRef.current.scrollIntoView({behavior: "smooth"})
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



    handleCalendly = () => {
        window.Calendly.initPopupWidget({url: 'https://calendly.com/greelab/discovery-workshop-booking'});
        return false
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

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        axios.post('https://api.greelab.com/tasks', data)
            .then(() => {
                this.setState({modal: true})
                this.homeForm.reset()
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
            width: '24px',
            height: '24px',
            overflow: 'visible',
            margin: '0 12px 0 0'
        }

        const formLottie = {
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

        const viewServicesLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: viewServiceLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        const buildIdentityAndPrototypeLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: buildIdentityAndPrototypeLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        const buildingWebsiteLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: buildingWebsiteLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }

        const workshopLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: workshopLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
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
            <div style={{overflow: "hidden"}}>

                <section className="content-one">
                    <div className="container">
                        <div className="component-one">
                            <div className="row">
                                <div className="col-lg-5 d-hide">
                                    <img src={componentOne} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7">
                                    <div className='textarea'>
                                        <h1>Speed up your growth with custom web solutions</h1>
                                        <p>
                                            We create the technical heart of your business
                                            and make processes simple and understandable.
                                        </p>
                                        <button className="btn" onClick={this.scrollViewSection}>
                                            <Lottie style={lottieStyle} options={viewServicesLottieOptions}/>
                                            View our services
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-show">
                                    <img src={componentOne} alt="Gree Lab" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-two" ref={this.scrollRef}>
                    <div className='container'>
                        <div className="component-two-three-four">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img src={componentTwo} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7 ">
                                    <div className='textarea'>
                                        <h2>Your identity is <br/> where everything starts</h2>
                                        <p>
                                            Whether you already have an identity or you want to create it from scratch,
                                            it needs to be precise towards your strategy & market.
                                        </p>
                                        <Link to='/form' >
                                            <button className="btn" name="buildYourIdentity" onClick="">
                                                <Lottie style={lottieStyle} options={buildIdentityAndPrototypeLottieOptions}/>
                                                Build your identity
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-three">
                    <div className='container'>
                        <div className="component-two-three-four">
                            <div className="row">
                                <div className="col-lg-5 d-hide">
                                    <img src={componentThree} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7">
                                    <div>
                                        <h2>Web platforms are direct <br/> link your customers</h2>
                                        <p>
                                            Your website needs to be sharply elaborated with your identity.
                                            It starts from building a structure aligned with your strategy
                                            & goals then the design and finally the development.
                                        </p>
                                        <Link to='/form'>
                                            <button className="btn">
                                                <Lottie style={lottieStyle} options={buildingWebsiteLottieOptions}/>
                                                Start building your website
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-show">
                                    <img src={componentThree} alt="Gree Lab" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-four">
                    <div className='container'>
                        <div className="component-two-three-four">
                            <div className="row">
                                <div className="col-lg-5">
                                    <img src={componentFour} alt="Gree Lab" />
                                </div>
                                <div className="col-lg-7">
                                    <div className='textarea'>
                                        <h2>Get Build-Ready with intuitive UX</h2>
                                        <p>
                                            New product or service? Our Workshops & Design Sprints will help you build
                                            user interfaces that increase conversion, reduce the cost of maintenance
                                            and build a consistent user experience so you can bring your next idea
                                            to market.
                                        </p>
                                        <Link to='/form'>
                                            <button className="btn">
                                                <Lottie style={lottieStyle} options={buildIdentityAndPrototypeLottieOptions}/>
                                                Build your prototype
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-five">
                    <div className='container'>
                        <div className="component-five">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Our process is what makes us, us</h2>
                                    <div className="quote">
                                        <i>
                                            Before something meaningful can be made we need to make sense of business
                                            requirements,
                                            user needs, diverse strategies, available technologies and everything
                                            else
                                            that goes into the recipe for a successful project.
                                        </i>
                                    </div>

                                    <div className="project-content">
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>1</h6>
                                                <h3> Discovery </h3>
                                            </div>
                                            <p>
                                                We'll start your project with an in-depth discovery call where
                                                we get to know each other, discuss your current and future objectives,
                                                and recommend the best course of action.
                                            </p>
                                        </div>
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>2</h6>
                                                <h3> Strategy </h3>
                                            </div>
                                            <p>
                                                Every end-to-end project of ours begins with a bespoke pre-build
                                                strategy. From brand ID consultation to in-depth code reviews
                                                we're here to set the stage for success.
                                            </p>
                                        </div>
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>3</h6>
                                                <h3> Design </h3>
                                            </div>
                                            <p style={{width: '100%'}}>
                                                After we have a comprehensive understanding of your brand,
                                                we'll be ready to move onto design. Each page or asset will
                                                be designed, reviewed, and given your stamp of approval.
                                            </p>
                                        </div>
                                        <div className="project-process border-right-0">
                                            <div className="d-flex mb-2">
                                                <h6>4</h6>
                                                <h3> Build </h3>
                                            </div>
                                            <p>
                                                Whether we've just finished designing your new site or you're handing off
                                                finished designs for us to develop,
                                                we're here to apply our trusted development process to your project.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tablet & Desktop Small Version */}

                                    <div className="project-content-sm">
                                        <div className="project-process">
                                            <div className="d-flex mb-2">
                                                <h6>1</h6>
                                                <h3> Discovery </h3>
                                            </div>
                                            <p>
                                                We'll start your project with an in-depth discovery call where
                                                we get to know each other, discuss your current and future objectives,
                                                and recommend the best course of action.
                                            </p>
                                        </div>
                                        <div className="project-process border-none">
                                            <div className="d-flex">
                                                <h6>2</h6>
                                                <h3> Strategy </h3>
                                            </div>
                                            <p>
                                                Every end-to-end project of ours begins with a bespoke pre-build
                                                strategy. From brand ID consultation to in-depth code reviews
                                                we're here to set the stage for success.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="project-content-sm">
                                        <div className="project-process design">
                                            <div className="d-flex">
                                                <h6>3</h6>
                                                <h3> Design </h3>
                                            </div>
                                            <p>
                                                After we have a comprehensive understanding of your brand,
                                                we'll be ready to move onto design. Each page or asset will
                                                be designed, reviewed, and given your stamp of approval.
                                            </p>
                                        </div>
                                        <div className="project-process border-right-0">
                                            <div className="d-flex">
                                                <h6>4</h6>
                                                <h3> Build </h3>
                                            </div>
                                            <p>
                                                Whether we've just finished designing your new site or you're handing off
                                                finished designs for us to develop,
                                                we're here to apply our trusted development process to your project.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-six">
                    <div className='container'>
                        <div className="component-six">
                            <div className="row">

                                <div className="col-lg-12">
                                    <h2>Meet the team...</h2>

                                    <div className="team-member">
                                        <div className="text-center">
                                            <img src={ashraf} alt="ashraf" />
                                            <h3>Md Ashraf</h3>
                                            <p>UX/UI designer</p>
                                        </div>
                                        <div className="text-center">
                                            <img src={pranto} alt="pranto" />
                                            <h3>Pranto Shuvo</h3>
                                            <p>Project manager</p>
                                        </div>
                                        <div className="text-center">
                                            <img src={shanto} alt="shanto" />
                                            <h3>Hasibul Hasan</h3>
                                            <p>Full stack developer</p>
                                        </div>
                                        <div className="text-center">
                                            <img src={shafi} alt="shafi" />
                                            <h3>Shoaib Ahmed</h3>
                                            <p>Full stack developer</p>
                                        </div>
                                        <div className="text-center">
                                            <img src={daiyan} alt="daiyan" />
                                            <h3>Daiyan Ahmed</h3>
                                            <p>Financial analyst</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='team-member-sm'>
                                            <div className="text-center">
                                                <img src={ashraf} alt="ashraf" />
                                                <h3>Md Ashraf</h3>
                                                <p>UX/UI designer</p>
                                            </div>
                                            <div className="text-center">
                                                <img src={pranto} alt="pranto" />
                                                <h3>Pranto Shuvo</h3>
                                                <p>Project manager</p>
                                            </div>
                                        </div>
                                        <div className='team-member-sm'>
                                            <div className="text-center">
                                                <img src={shanto} alt="shanto" />
                                                <h3>Hasibul Hasan</h3>
                                                <p>Full stack developer</p>
                                            </div>
                                            <div className="text-center">
                                                <img src={shafi} alt="shafi" />
                                                <h3>Shoaib Ahmed</h3>
                                                <p>Full stack developer</p>
                                            </div>
                                        </div>
                                        <div className='team-member-sm'>
                                            <div className="text-center">
                                                <img src={daiyan} alt="daiyan" />
                                                <h3>Daiyan Ahmed</h3>
                                                <p>Financial analyst</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="quote">
                                        <i>
                                            “Our ambition has always been to continue to evolve, to learn,
                                            to surpass ourselves. Our team - united, proud & made up of real
                                            creative personalities, will always seek to put you in the spotlight,
                                            to make you stand out.”
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="workshop">
                    <div className="container">
                        <div className='component-seven'>
                            <div className="row">
                                <div className="col-lg-7">
                                    <img src={workshop} alt="workshop" />
                                </div>
                                <div className="col-lg-5">
                                    <div>
                                        <h4>Wish to try our services?</h4>
                                        <h2>A discovery workshop to kick-off your project</h2>
                                        <h5>Start your project in the best possible way with a one-day discovery workshop.</h5>
                                        <p onClick={this.handleCalendly}>
                                            <button className="btn">
                                                <Lottie style={lottieStyle} options={workshopLottieOptions} />
                                                Book my free workshop
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='contact-form'>
                    <div className='container'>
                        <div className='component-eight'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <h2>Let's have a talk !</h2>
                                    <h5>It all starts with a good discussion</h5>
                                    <form onSubmit={this.handleSubmit} ref={(el) => this.homeForm = el}>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputName} type="text" className="form-control" placeholder="Your name" required/>
                                        </div>
                                        <div className="mb-3">
                                            <input value={this.state.value} onChange={this.handleInputEmailAddress} type="email" className="form-control" placeholder="Your email" required/>
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
                                            <button type="submit" className="btn">Get in touch</button>
                                            <Lottie style={formLottie} options={getInTouchLottieOptions} />
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
                                background: 'rgba(0, 0, 0, 0.55)',
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

export default Home
