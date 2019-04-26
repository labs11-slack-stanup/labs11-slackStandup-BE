import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";

class Welcome extends Component {
    render() {
        //Welcome loop start
        const welcomedata = this.props.welcomesData.map((welcome, index) =>( 
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-box">
                    <Icofont icon={welcome.icon} />
                    <h3>{welcome.title}</h3>
                    <p>{welcome.content}</p>
                </div>
            </div>
            ));
        //Welcome loop END

        return (
            <React.Fragment>
                <section className="welcome-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectiontopTitle}</span>
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row">
                            {welcomedata}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

Welcome.propTypes = {
    sectiontopTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    welcomesData: PropTypes.array
};

Welcome.defaultProps = {
    sectiontopTitle: "WE ARE CREATIVE",
    sectionTitle: "Welcome to",
    sectionTitleSpan: "Exolot",
    sectionContent:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",

        welcomesData: [
        {
            icon: "icofont-magnet",
            title: "Creative Design",
            content:
                "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            icon: "icofont-laptop-alt",
            title: "Friendly Codes",
            content:
                "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            icon: "icofont-headphone-alt-2",
            title: "Fast Support",
            content:
                "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
    ]
};
export default Welcome;
