import React, { Component } from 'react';
import Blog from './Blog';
import getContent from '../../contentfulHandler';


class Blogpage extends Component {

  constructor(props) {
    super(props);

    let content = getContent();
    this.state = content;
  }
  

  async componentDidMount() {
    let content = await getContent();
    this.setState(content);
  }

  render() {
    return (
    <Blog
    eventTitle={this.state.eventTitle} // check (header, footer)
    mainTitle={this.state.mainTitle} // check (mainPost)
    mainText={this.state.mainText} //check (main)
    eventDate={this.state.eventDate}// check (post1, post2)
    subTitle1={this.state.subTitle1} // check (post1)
    subText1={this.state.subText1} // check (post1)
    subTitle2={this.state.subTitle2} // check (post2)
    subText2={this.state.subText2} // check (post2)
    infoTitle={this.state.infoTitle} // check (info)
    infoText={this.state.infoText} // check (info)
    footerText={this.state.footerText} // check (footer)
    authors={this.state.authors} // check (footer)
    
    githubLink={this.state.githubURL}
    twitterLink={this.state.twitterURL}
    facebookLink={this.state.facebookURL}

    eventWebsite={this.state.eventURL}
    picture={this.state.eventImage}
    >
    </Blog>
    );
  }
}
export default Blogpage;