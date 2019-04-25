import React, { Component } from "react";
import PropTypes from "prop-types";

export class Footer extends Component {
  render() {
    return (
        <React.Fragment>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <p>{this.props.copyrightText}</p>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <ul>
                        <li>
                            <a href={this.props.footercopyrightLink1}>
                            {this.props.footercopyrightText1}
                            </a>
                        </li>
                        <li>
                            <a href={this.props.footercopyrightLink2}>
                            {this.props.footercopyrightText2}
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}
Footer.PropsTypes = {
  copyrightText: PropTypes.string,
  footercopyrightLink1: PropTypes.string,
  footercopyrightText1: PropTypes.string,
  footercopyrightLink2: PropTypes.string,
  footercopyrightText2: PropTypes.string
};
Footer.defaultProps = {
  copyrightText: "Copyright @ 2019 Exolot. All rights reserved",
  footercopyrightLink1: "#",
  footercopyrightText1: "Terms & Conditions ",
  footercopyrightLink2: "#",
  footercopyrightText2: "Privacy Policy"
};
export default Footer;
