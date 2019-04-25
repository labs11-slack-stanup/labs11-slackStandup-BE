import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Icofont from "react-icofont";
import Lightbox from "react-image-lightbox";
import "../assets/css/poup.scss";
const images = [
  require("../../src/assets/img/portfolio-img1.jpg"),
  require("../../src/assets/img/portfolio-img2.jpg"),
  require("../../src/assets/img/portfolio-img3.jpg"),
  require("../../src/assets/img/portfolio-img4.jpg"),
  require("../../src/assets/img/portfolio-img5.jpg"),
  require("../../src/assets/img/portfolio-img6.jpg")
];

const smallImages = [
  require("../../src/assets/img/portfolio-img1.jpg"),
  require("../../src/assets/img/portfolio-img2.jpg"),
  require("../../src/assets/img/portfolio-img3.jpg"),
  require("../../src/assets/img/portfolio-img4.jpg"),
  require("../../src/assets/img/portfolio-img5.jpg"),
  require("../../src/assets/img/portfolio-img6.jpg")
];

class LightboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
          <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={smallImages[0]}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={smallImages[1]}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>
                        
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={smallImages[2]}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={smallImages[2]}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={smallImages[4]}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={smallImages[5]}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>  
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;
