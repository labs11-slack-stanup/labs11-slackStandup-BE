import React, { Component } from 'react';
import Icofont from "react-icofont";
import PropTypes from "prop-types";

export class Services extends Component {
  render() {
    //Start Services Loop
    const servicedata = this.props.servicesData.map((services, index ) =>(
        <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
            <div className="single-services">
                <Icofont icon={services.icon} />
                <h3>{services.title}</h3>
                <p>{services.content}</p>

                <div className="bg-number">{services.bgnumber}</div>
            </div>
        </div>
    ));
    //End Services Loop
    return (
        <React.Fragment>
            <section id="services" className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>
                    <div className="row">{servicedata}</div>
                </div>
                <div className="animation-box5">
                    <img src={this.props.animationImg} className="rotateme" alt="vector" />
                </div>
            </section>
        </React.Fragment>
    );
  }
}
Services.propsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    animationImg: PropTypes.string,
    servicesData: PropTypes.array
}
Services.defaultProps = {
    sectionTitle: "Our",
    sectionTitleSpan: "Services",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    animationImg: require("../../src/assets/img/vector-bg.png"),

    servicesData: [
        {
            icon: "icofont-crown",
            title: "Branding",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "1"
        },
        {
            icon: "icofont-pen-alt-3",
            title: "UX/UI Design",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "2"
        },
        {
            icon: "icofont-camera-alt",
            title: "Photography",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "3"
        },
        {
            icon: "icofont-chart-growth",
            title: "Marketing",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "4"
        },
        {
            icon: "icofont-laptop-alt",
            title: "Web Design",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "5"
        },
        {
            icon: "icofont-tick-boxed",
            title: "Development",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "6"
        },
        {
            icon: "icofont-pencil-alt-1",
            title: "Content Writer",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "7"
        },
        {
            icon: "icofont-telescope",
            title: "SEO & SMM",
            content: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            bgnumber: "8"
        }
    ]
}
export default Services

