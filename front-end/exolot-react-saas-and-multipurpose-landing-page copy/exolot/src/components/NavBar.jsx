import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

import SideNav from  "../components/SideNav";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                <Container>
                    <Navbar.Brand >
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            <span>E</span>xolot
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        id="collaspe-btn"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Home
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    About
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Services
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Team
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Portfolio
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="price"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Price
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Blog
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Contact
                                </Link>
                            </Nav.Item>
                                
                            <Nav.Item>
                                {/* SideNav: src/components/SideNav */}
                                <SideNav />
                            </Nav.Item>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </React.Fragment> 
    );
  }
}

export default NavBar;
