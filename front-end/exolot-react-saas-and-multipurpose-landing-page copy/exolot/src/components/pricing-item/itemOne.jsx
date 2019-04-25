import React, { Component } from "react";
import PropTypes from "prop-types";

export class ItemOne extends Component {
  render() {
    //Start ItemOne Loop
    const itemonedata = this.props.itemonesData.map((itemone, index) => (
      <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
        <div className={itemone.className}>
          <div className="pricing-header">{itemone.planName}</div>

          <div className="price">
            <sup>$</sup>
            {itemone.price}
          </div>

          <ul className="pricing-features">
            <li>{itemone.content1}</li>
            <li>{itemone.content2}</li>
            <li>{itemone.content3}</li>
            <li>{itemone.content4}</li>
            <li>{itemone.content5}</li>
            <li>{itemone.content6}</li>
            <li>{itemone.content7}</li>
            <li>{itemone.content8}</li>
          </ul>

          <a href={itemone.btnlink} className="btn btn-primary">
            {itemone.pricingBtn}
          </a>
        </div>
      </div>
    ));
    //End ItemOne Loop
    return (
      <React.Fragment>
        <div id="monthly" className="tab-slider-body">
          <div className="row">{itemonedata}</div>
        </div>
      </React.Fragment>
    );
  }
}
ItemOne.PropsTypes = {
  itemonesData: PropTypes.array
};
ItemOne.defaultProps = {
  itemonesData: [
    {
      planName: "BASIC",
      className: "pricing-table",
      price: "145",
      content1: "Any Ware Access",
      content2: "10 GB Hosting",
      content3: "2 Unique Users",
      content4: "12 GB Capacity",
      content5: "Weekly Backups",
      content6: "15 Domain Names",
      content7: "Enhanced Security",
      content8: "Support 24/7 Hour",
      pricingBtn: "Purchase Now",
      btnlink: "#"
    },
    {
      planName: "STANDARD",
      className: "pricing-table active",
      price: "250",
      content1: "Any Ware Access",
      content2: "10 GB Hosting",
      content3: "2 Unique Users",
      content4: "12 GB Capacity",
      content5: "Weekly Backups",
      content6: "15 Domain Names",
      content7: "Enhanced Security",
      content8: "Support 24/7 Hour",
      pricingBtn: "Purchase Now",
      btnlink: "#"
    },
    {
      planName: "PREMIUM",
      className: "pricing-table",
      price: "325",
      content1: "Any Ware Access",
      content2: "10 GB Hosting",
      content3: "2 Unique Users",
      content4: "12 GB Capacity",
      content5: "Weekly Backups",
      content6: "15 Domain Names",
      content7: "Enhanced Security",
      content8: "Support 24/7 Hour",
      pricingBtn: "Purchase Now",
      btnlink: "#"
    }
  ]
};
export default ItemOne;
