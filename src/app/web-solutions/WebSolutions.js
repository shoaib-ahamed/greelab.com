import React, { Component } from "react";

import './WebSolutions.css'
import {Link} from "react-router-dom";
import Lottie from 'react-lottie'

import arrow from '../../assets/web-solutions/arrow.svg'
import thinking from '../../assets/web-solutions/thinking-emoji.png'
import tick from '../../assets/web-solutions/tick-emoji.png'
import goal from '../../assets/web-solutions/goal-emoji.png'
import idea from '../../assets/web-solutions/idea.svg'

import workshopLottie from '../../assets/home/lottie/workshop.json'

class WebSolutions extends Component {


    handleCalendly = () => {
        window.Calendly.initPopupWidget({url: 'https://calendly.com/greelab/discovery-workshop-booking'});
        return false
    }


    render() {

        const lottieStyle = {
            display: 'inline-flex',
            width: '24px',
            height: '24px',
            overflow: 'visible',
            margin: '0 12px 0 0'
        }

        const workshopLottieOptions = {
            loop: true,
            autoplay: true,
            animationData: workshopLottie,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }


        return (
            <div>
                <div style={{background: '#f6f6f6'}}>

                    <section className='web-content-one'>
                        <div className='container'>
                            <div className='web-component-one'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div>
                                            <h1>How much would building <br className='d-none d-lg-block'/> <span>a new website</span> cost you? <img src={thinking} alt='emoji'/></h1>
                                            <h5>Determining the type of website you need the price <br className='d-none d-xl-block'/> may vary like this...</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='web-content-two'>
                        <div className='container'>
                            <div className='web-component-two'>

                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='solution-card'>
                                            <div className='textarea'>
                                                <h3>An online presence</h3>

                                                <div className='mt-4'>
                                                    <h6><img src={tick} alt="emoji"/> 1 page</h6>
                                                    <h6><img src={tick} alt="emoji"/> Full responsive design</h6>
                                                    <h6><img src={tick} alt="emoji"/> Lead collection</h6>
                                                </div>

                                                <div className='mt-5'>
                                                    <p><img src={goal} alt="emoji"/> Promote a product or service</p>
                                                    <p><img src={goal} alt="emoji"/> Promote an event or project</p>
                                                    <p><img src={goal} alt="emoji"/> Market yourself or your business</p>
                                                    <p><img src={goal} alt="emoji"/> Offer a contact form</p>
                                                    <p><img src={goal} alt="emoji"/> Get appointments</p>
                                                </div>
                                            </div>

                                            <Link to='/form' className='bottom-design'>
                                                <h4>$ 850</h4>
                                                <h5>
                                                    Get started
                                                    <img src={arrow} alt="arrow"/>
                                                </h5>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='solution-card'>
                                            <div className='textarea'>
                                                <h3>More than a website</h3>

                                                <div className='mt-4'>
                                                    <h6><img src={tick} alt="emoji"/> 3 pages</h6>
                                                    <h6><img src={tick} alt="emoji"/> Full responsive design</h6>
                                                    <h6><img src={tick} alt="emoji"/> Editable contents</h6>
                                                    <h6><img src={tick} alt="emoji"/> Content management system</h6>
                                                </div>

                                                <div className='mt-5'>
                                                    <p><img src={goal} alt="emoji"/> Market yourself or your business</p>
                                                    <p><img src={goal} alt="emoji"/> Promote a physical business</p>
                                                    <p><img src={goal} alt="emoji"/> Showcase work / expertise</p>
                                                    <p><img src={goal} alt="emoji"/> Offer a contact form</p>
                                                    <p><img src={goal} alt="emoji"/> Get appointments</p>
                                                </div>
                                            </div>

                                            <Link to='/form' className='bottom-design'>
                                                <h4>$ 1,490</h4>
                                                <h5>
                                                    Get started
                                                    <img src={arrow} alt="arrow"/>
                                                </h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='solution-card'>
                                            <div className='textarea'>
                                                <h3>Sell anything</h3>

                                                <div className='mt-4'>
                                                    <h6><img src={tick} alt="emoji"/> 5-10 pages</h6>
                                                    <h6><img src={tick} alt="emoji"/> Full responsive design</h6>
                                                    <h6><img src={tick} alt="emoji"/> Unlimited product inventory</h6>
                                                    <h6><img src={tick} alt="emoji"/> Content management system</h6>
                                                    <h6><img src={tick} alt="emoji"/> Cart checkout</h6>
                                                    <h6><img src={tick} alt="emoji"/> Payment system</h6>
                                                </div>

                                                <div className='mt-5'>
                                                    <p><img src={goal} alt="emoji"/> Sell products</p>
                                                    <p><img src={goal} alt="emoji"/> Sell services</p>
                                                    <p><img src={goal} alt="emoji"/> Sell memberships</p>
                                                    <p><img src={goal} alt="emoji"/> Collect donations</p>
                                                    <p><img src={goal} alt="emoji"/> Secure payment & checkout</p>
                                                </div>
                                            </div>

                                            <Link to='/form' className='bottom-design'>
                                                <h4>$ 3,870</h4>
                                                <h5>
                                                    Get started
                                                    <img src={arrow} alt="arrow"/>
                                                </h5>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='solution-card'>
                                            <div className='textarea'>
                                                <h3>Build a digital product</h3>

                                                <div className='mt-4'>
                                                    <p><img src={goal} alt="emoji"/> Launch a new product or service</p>
                                                    <p><img src={goal} alt="emoji"/> Test your minimum viable product</p>
                                                </div>

                                                <div className='line-break'/>

                                                <div>
                                                    <h6 style={{lineHeight: '34px'}}>The specific challenges you might face building a new product can't be fixed with a one-size-fits-all solution.</h6>
                                                    <h6 style={{lineHeight: '34px'}} className='pt-4'>To create a detailed estimate, you will take part in a free Discovery Workshop. No-Cost, No-Obligation!</h6>
                                                </div>
                                            </div>

                                            <Link to='/form' className='bottom-design'>
                                                <h4> </h4>
                                                <h5>
                                                    Get started
                                                    <img src={arrow} alt="arrow"/>
                                                </h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className='web-content-three'>
                        <div className='container'>
                            <div className='web-component-three'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div>
                                            <img src={idea} alt="idea"/>
                                            <h4>Wish to try our services?</h4>
                                            <h2>A discovery workshop to <br className='d-none d-xl-block'/> kick-off your project</h2>
                                            <h6>Start your project in the best possible way with a one-day <br className='d-none d-xl-block'/> discovery workshop.</h6>
                                            <p onClick={this.handleCalendly}>
                                                <button className="btn">
                                                    <Lottie style={lottieStyle} options={workshopLottieOptions} />
                                                    Book my free workshop
                                                </button>
                                            </p>
                                            <i>You’ll get a more detailed quotation after this workshop!</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default WebSolutions
