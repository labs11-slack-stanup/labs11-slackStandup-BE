import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";

export class Feadback extends Component {
  render() {
    //Start Feadback Loop
        const feadbackdata = this.props.feadbacksData.map((feadback, index ) =>(
            <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                <div className="single-feedback">
                    <div className="client-info">
                        <div className="img">
                            <img src={feadback.image} alt="client" />
                        </div>
                        <h4>{feadback.name}</h4>
                        <span>{feadback.profession}</span>
                    </div>

                    <p>{feadback.content}</p>

                    <i className="icofont-quote-right" />
                </div>
            </div>
        ));
    //End Feadback Loop
    return (
        <React.Fragment>
            <section className="feedback-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>

                    <div className="row">
                        <OwlCarousel 
                            className="feedback-slides owl-theme"
                            loop={true}
                            autoplay={true}
                            nav={false}
                            mouseDrag={true}
                            autoplayHoverPause={true}
                            responsiveClass={true}
                            dots={true}
                            navText={[
                                "<i class='icon icon-Arrow'></i>",
                                "<i class='icon icon-Arrow'></i>"
                            ]}
                            responsive={{
                                0:{
                                    items:1,
                                },
                                768:{
                                    items:2,
                                },
                                1200:{
                                    items:3,
                                }
                            }}
                        >
                            {feadbackdata}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
Feadback.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    feadbacksData: PropTypes.array,

}
Feadback.defaultProps = {
    sectionTitle: "Expert",
    sectionTitleSpan: "Feadback",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    feadbacksData:[
        {
            image: require("../../src/assets/img/client-avatar1.jpg"),
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            image: require("../../src/assets/img/client-avatar2.jpg"),
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            image: require("../../src/assets/img/client-avatar3.jpg"),
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            image: require("../../src/assets/img/client-avatar3.jpg"),
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        }
    ]

}
export default Feadback
