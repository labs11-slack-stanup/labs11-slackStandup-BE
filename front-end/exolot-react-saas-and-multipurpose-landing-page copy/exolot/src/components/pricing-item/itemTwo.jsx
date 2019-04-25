import React, { Component } from "react";
import PropTypes from "prop-types";

export class ItemTwo extends Component {
  render() {
    //Start ItemTwo Loop
    const itemtwodata = this.props.itemtwosData.map((itemtwo, index) => (
      <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
        <div className={itemtwo.className}>
          <div className="pricing-header">{itemtwo.planName}</div>

          <div className="price">
            <sup>$</sup>
            {itemtwo.price}
          </div>

          <ul className="pricing-features">
            <li>{itemtwo.content1}</li>
            <li>{itemtwo.content2}</li>
            <li>{itemtwo.content3}</li>
            <li>{itemtwo.content4}</li>
            <li>{itemtwo.content5}</li>
            <li>{itemtwo.content6}</li>
            <li>{itemtwo.content7}</li>
            <li>{itemtwo.content8}</li>
          </ul>
          <a href={itemtwo.btnlink} className="btn btn-primary">
            {itemtwo.pricingBtn}
          </a>
        </div>
      </div>
    ));
    //End ItemTwo Loop
    return (
      <React.Fragment>
        <div id="monthly" className="tab-slider-body">
          <div className="row">{itemtwodata}</div>
        </div>
      </React.Fragment>
    );
  }
}
ItemTwo.PropsTypes = {
  itemtwosData: PropTypes.array
};
ItemTwo.defaultProps = {
  itemtwosData: [
    {
      planName: "BASIC",
      className: "pricing-table",
      price: "345",
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
      price: "550",
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
      price: "725",
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
export default ItemTwo;
