import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from "react-bootstrap";

import ItemOne from "../components/pricing-item/itemOne";
import ItemTwo from "../components/pricing-item/itemTwo";

export class Pricing extends Component {
  render() {
    return (
        <React.Fragment>
            <section id="price" className="pricing-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="tab-slider-nav">
                                <div className="tab-slider">
                                    <Tabs defaultActiveKey="monthly" id="uncontrolled-tab">
                                        <Tab eventKey="monthly" title="Monthly">
                                            {/* ItemOne Component from src/components/pricing-item/itemOne */}
                                            <ItemOne />
                                        </Tab>
                                        <Tab eventKey="yearly" title="Yearly">
                                            {/* ItemOne Component from src/components/pricing-item/itemOne */}
                                            <ItemTwo />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>       
                        </div>       
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
Pricing.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,

}
Pricing.defaultProps = {
    sectionTitle: "Our Latest",
    sectionTitleSpan: "Pricing",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",

}
export default Pricing
