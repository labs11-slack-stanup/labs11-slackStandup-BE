import React, { Component } from "react";
import PropTypes from "prop-types";
import PopupImage from "./PopupPortfolio";

export class Portfolio extends Component {
  render() {
    return (
        <React.Fragment>
            <section id="portfolio" className="portfolio-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>
                            {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
                        </h2>
                        <p>{this.props.sectionContent}</p>
                    </div>

                    <div className="row">
                        {/* PopupImage Component from src/components/PopupPortfolio/ */}
                        <PopupImage />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
Portfolio.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string
};
Portfolio.defaultProps = {
    sectionTitle: "Our",
    sectionTitleSpan: "Portfolio",
    sectionContent:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
};
export default Portfolio;
