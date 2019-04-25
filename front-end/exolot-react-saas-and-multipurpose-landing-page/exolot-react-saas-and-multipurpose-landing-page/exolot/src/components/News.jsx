import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class News extends Component {
  render() {
    //Start News Loop
        const newsdata = this.props.newssData.map((news, index ) =>(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-blog-post">
                    <div className="post-thumbnail">
                        <a href={news.imglink}><img src={news.image} alt="blog-img" /></a>
                    </div>

                    <div className="post-content">
                        <h3><a href={news.titlelink}>{news.title}</a></h3>
                        <a href={news.btnlink} className="read-more">{news.btnname}</a>
                    </div>
                </div>
            </div>
        ));
    //End News Loop
    return (
        <React.Fragment>
            <section id="blog" className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                        <p>{this.props.sectionContent}</p>
                    </div>

                    <div className="row">
                        {newsdata}

                        
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
News.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    newssData: PropTypes.array,

}
News.defaultProps = {
    sectionTitle: "Our Latest",
    sectionTitleSpan: "News",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    newssData:[
        {
            imglink: "#",
            image: require("../assets/img/blog-img1.jpg"),
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "read more",
        },
        {
            imglink: "#",
            image: require("../assets/img/blog-img2.jpg"),
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "read more",
        },
        {
            imglink: "#",
            image: require("../assets/img/blog-img3.jpg"),
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "read more",
        }
    ]

}
export default News
