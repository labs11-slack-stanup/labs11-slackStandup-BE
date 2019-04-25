import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class HomeSlides extends Component {
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
        //Home Slides loop start
        const homeslidesdata = this.props.homeslidesData.map(
            (homeslides, index) => (
                <React.Fragment key={index}>
                    <div className={homeslides.bgImgClass}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                        <div className="hero-content">
                                            <h5
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {homeslides.toptitle}
                                            </h5>
                                            <h1
                                                className={
                                                    isVisible
                                                        ? "animated fadeInUp slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {homeslides.mainlefttitle}{" "}
                                                <span>
                                                    {
                                                        homeslides.mainspantitle
                                                    }
                                                </span>{" "}
                                                {homeslides.mainrighttitle}
                                            </h1>
                                            <p
                                                className={
                                                    isVisible
                                                        ? "animated zoomIn Slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {homeslides.content}
                                            </p>
                                            <a
                                                href={
                                                    homeslides.leftbtnlink
                                                }
                                                className={
                                                    isVisible
                                                        ? "btn btn-primary animated fadeInDown slow opacityOne"
                                                        : " btn btn-primary opacityZero"
                                                }
                                            >
                                                {homeslides.leftbtn}
                                            </a>
                                            
                                            <button onClick={this.openModal} className={
                                                    isVisible
                                                        ? "video-btn animated fadeInDown slow opacityOne"
                                                        : "video-btn opacityZero"
                                                }>
                                                <Icofont icon="icofont-play-alt-2" /> {homeslides.videobtn}
                                            </button>
                                        </div>
                                    )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                        <div className="animation-box1">
                            <img
                                src={this.props.animationImg1}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box2">
                            <img
                                src={this.props.animationImg2}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box3">
                            <img
                                src={this.props.animationImg3}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box4">
                            <img
                                src={this.props.animationImg4}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box6">
                            <img
                                src={this.props.animationImg5}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box7">
                            <img
                                src={this.props.animationImg6}
                                className="rotateme"
                                alt="sliderimage"
                            />
                        </div>
                    </div>
                </React.Fragment>
            )
        );
        //Home Slides END
        return (
            <React.Fragment>
                <div id="home">
                    <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId={this.props.homeslidesData[0].videoId}
                        onClose={() =>
                        this.setState({
                            isOpen: false
                        })
                        }
                    />
                    <OwlCarousel
                        className="home-slides owl-theme"
                        items={1}
                        nav={true}
                        dots={false}
                        loop={true}
                        touchDrag={false}
                        mouseDrag={false}
                        autoplay={true}
                        autoplayHoverPause={true}
                        animateOut={"slideOutDown"}
                        animateIn={"slideInDown"}
                        smartSpeed={700}
                        autoplayTimeout ={8000}
                        navText={[
                            "<i class='icofont-swoosh-right'></i>",
                            "<i class='icofont-swoosh-right'></i>"
                        ]}
                    >
                    
                        {homeslidesdata}
                    </OwlCarousel>
                </div>
            </React.Fragment>
        );
    }
}

HomeSlides.propTypes = {
    animationImg1: PropTypes.string,
    animationImg2: PropTypes.string,
    animationImg3: PropTypes.string,
    animationImg4: PropTypes.string,
    animationImg5: PropTypes.string,
    animationImg6: PropTypes.string,
    homeslidesData: PropTypes.array
};

HomeSlides.defaultProps = {
    animationImg1: require("../../assets/img/1.png"),
    animationImg2: require("../../assets/img/2.png"),
    animationImg3: require("../../assets/img/1.png"),
    animationImg4: require("../../assets/img/5.png"),
    animationImg5: require("../../assets/img/6.png"),
    animationImg6: require("../../assets/img/7.png"),

    homeslidesData: [
        {
            bgImgClass: "main-banner item-bg-one",
            toptitle: "WE ARE CREATIVE",
            mainlefttitle: "THE BEST",
            mainspantitle: "DIGITAL",
            mainrighttitle: "AGENCY",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            leftbtn: "Get Started",
            leftbtnlink: "#",
            videobtn: "Watch Now",
            videoId: "vr0qNXmkUJ8",
        },
        {
            bgImgClass: "main-banner item-bg-two",
            toptitle: "WE ARE CREATIVE",
            mainlefttitle: "THE BEST",
            mainspantitle: "DIGITAL",
            mainrighttitle: "AGENCY",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            leftbtn: "Get Started",
            leftbtnlink: "#",
            videobtn: "Watch Now",
            videoId: "vr0qNXmkUJ8",
        },
        {
            bgImgClass: "main-banner item-bg-three",
            toptitle: "WE ARE CREATIVE",
            mainlefttitle: "THE BEST",
            mainspantitle: "DIGITAL",
            mainrighttitle: "AGENCY",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            leftbtn: "Get Started",
            leftbtnlink: "#",
            videobtn: "Watch Now",
            videoId: "vr0qNXmkUJ8",
        }
    ]
};

export default HomeSlides;
