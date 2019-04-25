import React, { Component } from 'react';
import axios from "axios";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from 'prop-types';

export class ContactUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            successMsg: ""
        };
    }
    handleForm = e => {
        let that = this;
        axios
            .post("https://formcarry.com/s/qJalZsYuqY-", this.state, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                document.getElementById("contactForm").reset();
                that.setState({
                    successMsg: "We received your submission"
                });
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    
  render() {
    //Start ContactUs Loop
    const contactusdata = this.props.contactussData.map((contactus, index ) =>(
        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="contact-box">
                <div className="icon">
                    <i className={contactus.boxicon} />
                </div>
                <h4>{contactus.boxtitle}</h4>
                <p><a href={contactus.boxitem1link}>{contactus.boxitem1}</a></p>
                <p><a href={contactus.boxitem2link}>{contactus.boxitem2}</a></p>
            </div>
        </div>
    ));
    //End ContactUs Loop
    return (
        <React.Fragment>
            <section id="contact" className="contact-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>
                    <div className="row">
                        {contactusdata}
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="get-in-touch">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.content}</p>
                                <ul>
                                    <li><a href={this.props.fblink} className="icofont-facebook"> </a></li>
                                    <li><a href={this.props.twitterlink} className="icofont-twitter"> </a></li>
                                    <li><a href={this.props.instagramlink} className="icofont-instagram"> </a></li>
                                    <li><a href={this.props.linkedinlink} className="icofont-linkedin"> </a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <ValidationForm
                                id="contactForm"
                                onSubmit={(e, formData, inputs) => {
                                    e.preventDefault();
                                    this.handleForm(formData);
                                }}
                            >
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <TextInput
                                                name="name"
                                                id="name"
                                                required
                                                successMessage=""
                                                errorMessage="Please enter your name"
                                                className="form-control"
                                                placeholder="Name"
                                                autoComplete="off"
                                                onChange={
                                                    this.handleFields
                                                }
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-group">
                                        <TextInput
                                            name="email"
                                            id="email"
                                            type="email"
                                            required
                                            successMessage=""
                                            errorMessage="Please enter your email address"
                                            className="form-control"
                                            placeholder="Email"
                                            autoComplete="off"
                                            onChange={
                                                this.handleFields
                                            }
                                        />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                        <TextInput
                                            name="message"
                                            id="description"
                                            multiline
                                            placeholder="Your message"
                                            className="form-control"
                                            required
                                            successMessage=""
                                            errorMessage="Please write your message"
                                            rows="5"
                                            autoComplete="off"
                                            onChange={
                                                this.handleFields
                                            }
                                        />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>  
                        </ValidationForm>
                        {this.state.successMsg !== "" ? (
                            <h3 className="contactMsg">
                                {this.state.successMsg}
                            </h3>
                        ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
ContactUs.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    fblink: PropTypes.string,
    twitterlink: PropTypes.string,
    instagramlink: PropTypes.string,
    linkedinlink: PropTypes.string,
    contactussData: PropTypes.array,
}
ContactUs.defaultProps = {
    sectionTitle: "Contact",
    sectionTitleSpan: "Us",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    title: "Get in Touch",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    fblink: "#",
    twitterlink: "#",
    instagramlink: "#",
    linkedinlink: "#",
    contactussData:[
        {
            boxicon: "icofont-location-pin",
            boxtitle: "Address",
            boxitem1link: "#",
            boxitem1: "Exercisplan 4, 111 49",
            boxitem2link: "#",
            boxitem2: "Stockholm, Sweden",

        },
        {
            boxicon: "icofont-mail",
            boxtitle: "Email",
            boxitem1link: "#",
            boxitem1: "Info@exolot.com",
            boxitem2link: "#",
            boxitem2: "support@exolot.com",

        },
        {
            boxicon: "icofont-phone",
            boxtitle: "Phone",
            boxitem1link: "#",
            boxitem1: "+44 4587 458",
            boxitem2link: "#",
            boxitem2: "+44 4587 458",

        }
    ]
}
export default ContactUs
