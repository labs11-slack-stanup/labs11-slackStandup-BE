import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class BannerTwo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <div id="home" className="main-banner item-bg-two">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="hero-content">
                  <h5 className="animated fadeInDown slow">{this.props.toptitle}</h5>
                  <h1 className="animated fadeInUp slow">
                    {this.props.mainlefttitle}{" "}
                    <span>{this.props.mainspantitle}</span>{" "}
                    {this.props.mainrighttitle}
                  </h1>
                  <p className="animated zoomIn slow">{this.props.content}</p>
                  <a href={this.props.leftbtnlink} className="btn btn-primary animated fadeInDown slow">
                    {this.props.leftbtn}
                  </a>

                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId={this.props.videoId}
                    onClose={() =>
                      this.setState({
                        isOpen: false
                      })
                    }
                  />
                  <button onClick={this.openModal} className="video-btn animated fadeInDown slow">
                    <Icofont icon="icofont-play-alt-2" /> {this.props.videobtn}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="down_arrow">
            <Link
              activeClass="scroll_down"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="scroll_down"
            />
          </div>

          <div className="animation-box1">
            <img src={this.props.animationImg1} alt="sliderimage" />
          </div>
          <div className="animation-box2">
            <img src={this.props.animationImg2} alt="sliderimage" />
          </div>
          <div className="animation-box3">
            <img src={this.props.animationImg3} alt="sliderimage" />
          </div>
          <div className="animation-box4">
            <img src={this.props.animationImg4} alt="sliderimage" />
          </div>
          <div className="animation-box6">
            <img src={this.props.animationImg5} alt="sliderimage" />
          </div>

          <div className="creative-box1" />
        </div>
      </React.Fragment>
    );
  }
}

BannerTwo.propTypes = {
  animationImg1: PropTypes.string,
  animationImg2: PropTypes.string,
  animationImg3: PropTypes.string,
  animationImg4: PropTypes.string,
  animationImg5: PropTypes.string,
  BannerTwoData: PropTypes.array
};

BannerTwo.defaultProps = {
  animationImg1: require("../../assets/img/1.png"),
  animationImg2: require("../../assets/img/2.png"),
  animationImg3: require("../../assets/img/1.png"),
  animationImg4: require("../../assets/img/5.png"),
  animationImg5: require("../../assets/img/6.png"),
  toptitle: "WE ARE CREATIVE",
  mainlefttitle: "THE BEST",
  mainspantitle: "DIGITAL",
  mainrighttitle: "AGENCY",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  leftbtn: "Get Started",
  leftbtnlink: "#",
  videoId: "vr0qNXmkUJ8",
  videobtn: "Watch Video"
};

export default BannerTwo;
