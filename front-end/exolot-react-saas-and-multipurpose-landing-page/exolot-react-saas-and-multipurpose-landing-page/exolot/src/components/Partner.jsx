import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";

class Partners extends Component {
  render() {
    //Partner loop start
    const partnerData = this.props.partnersData.map((partner, index) => (
        <div className="col-lg-12 col-md-12" key={index}>
            <a href={partner.partnerLink}>
            <img src={partner.partnerLogo} alt="partner" />
            </a>
        </div>
    ));
    //Partner loop END
    return (
        <React.Fragment>
            <div className="partner-area ptb-100 bg-f9f9f9">
            <div className="container">
                <div className="row">
                <OwlCarousel
                    className="owl-theme partner-slides"
                    loop
                    autoplay={true}
                    nav={false}
                    mouseDrag={true}
                    autoplayHoverPause={true}
                    responsiveClass={true}
                    dots={false}
                    responsive={{
                    0: { items: 2 },
                    768: {
                        items: 4
                    },
                    1200: {
                        items: 6
                    }
                    }}
                >
                    {partnerData}
                </OwlCarousel>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
  }
}

Partners.propTypes = {
  sectionName: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  partnersData: PropTypes.array
};

Partners.defaultProps = {
  sectionName: "",
  sectionTitle: "",
  sectionDescription: "",
  partnersData: [
    {
      partnerLogo: require("../../src/assets/img/partner-1.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-2.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-3.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-4.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-5.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-6.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-3.png"),
      partnerLink: "#0"
    },
    {
      partnerLogo: require("../../src/assets/img/partner-4.png"),
      partnerLink: "#0"
    }
  ]
};
export default Partners;
