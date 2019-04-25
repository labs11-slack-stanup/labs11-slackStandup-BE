import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";
import ReactWOW from 'react-wow';

export class Team extends Component {
  render() {
    //Start Team Loop
    const teamdata = this.props.teamsData.map((team, index ) =>(
        <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
            <div className="single-team">
                <img src={team.img} alt="team-img" />
                <ReactWOW>
                    <ul className="member-social-links wow fadeInUp">
                        <li><a href={team.sociallink1} className={team.socialicon1}> </a></li>
                        <li><a href={team.sociallink2} className={team.socialicon2}> </a></li>
                        <li><a href={team.sociallink3} className={team.socialicon3}> </a></li>
                        <li><a href={team.sociallink4} className={team.socialicon4}> </a></li>
                    </ul>
                </ReactWOW>
                <h3>{team.name}</h3>
                <span>{team.profession}</span>
            </div>
        </div>
    ));
    //End Team Loop
    return (
        <React.Fragment>
            <section id="team" className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>
                    <div className="row">
                        <OwlCarousel 
                            className="team-slides owl-theme"
                            loop={true}
                            autoplay={true}
                            nav={false}
                            mouseDrag={true}
                            autoplayHoverPause={true}
                            responsiveClass={true}
                            dots={true}
                            navText={[
                                "<i class='icon icon-Arrow'></i>",
                                "<i class='icon icon-Arrow'></i>"
                            ]}
                            responsive={{
                                0:{
                                    items:1,
                                },
                                576:{
                                    items:2,
                                },
                                768:{
                                    items:3,
                                },
                                1200:{
                                    items:4,
                                }
                            }}
                        >
                            {teamdata}
                        </OwlCarousel>
                    </div>
                </div>
                <div className="animation-box1"><img src={this.props.animationimg1} alt="animateimage" /></div>
                <div className="animation-box2"><img src={this.props.animationimg2} alt="animateimage" /></div>
                <div className="animation-box3"><img src={this.props.animationimg3} alt="animateimage" /></div>
                <div className="animation-box4"><img src={this.props.animationimg4} alt="animateimage" /></div>
            </section>
        </React.Fragment>
    );
  }
}
Team.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    animationimg1: PropTypes.string,
    animationimg2: PropTypes.string,
    animationimg3: PropTypes.string,
    animationimg4: PropTypes.string,
    teamsData: PropTypes.array,
}
Team.defaultProps = {
    sectionTitle: "Expert",
    sectionTitleSpan: "Team",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    animationimg1: require("../../src/assets/img/3.png"),
    animationimg2: require("../../src/assets/img/4.png"),
    animationimg3: require("../../src/assets/img/1.png"),
    animationimg4: require("../../src/assets/img/5.png"),
    teamsData: [
        {
            img: require("../../src/assets/img/team-img1.jpg"),
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img2.jpg"),
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img3.jpg"),
            name: "Maxwel Smith",
            profession: "Web Developer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img4.jpg"),
            name: "Lucy Doe",
            profession: "UX/UI Designer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img1.jpg"),
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img2.jpg"),
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img3.jpg"),
            name: "Maxwel Smith",
            profession: "Web Developer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img4.jpg"),
            name: "Lucy Doe",
            profession: "UX/UI Designer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img1.jpg"),
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img2.jpg"),
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img3.jpg"),
            name: "Maxwel Smith",
            profession: "Web Developer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: require("../../src/assets/img/team-img4.jpg"),
            name: "Lucy Doe",
            profession: "UX/UI Designer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        }
        
    ]

}
export default Team
