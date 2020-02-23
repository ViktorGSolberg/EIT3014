import React, { Component } from 'react';
import Blog from './Blog';
import picture from '../../SamplePics/bondens_marked.jfif'
import getContent from '../../contentfulHandler';


class Blogpage extends Component {

  

  async componentDidMount() {
    let content = await getContent();
    return content;
  }

  render() {
    return (
    <Blog
    eventTitle="Bondens marked" // check (header, footer)
    mainTitle="MAT MED KVALITET" // check (mainPost)
    mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorge magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." //check (main)
    eventDate="Mar 12" // check (post1, post2)
    subTitle1="SE MARKEDET" // check (post1)
    subText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut." // check (post1)
    subTitle2="MØT BØNDENDE" // check (post2)
    subText2="This is a wider card with supporting text below as a natural lead-in to additional content." // check (post2)
    infoTitle="NÆRMERE INFORMASJON OM ARRANGEMENTET" // check (info)
    infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorge magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." // check (info)
    footerText="Les mer om arrangementet her." // check (footer)
    authors="Gruppe A, EiT" // check (footer)
    
    githubLink="https://github.com/ViktorGSolberg/EIT3014"
    twitterLink="https://www.twitter.com/bondensmarked"
    facebookLink="https://www.facebook.com/Bondensmarkedtrondelag"

    eventWebsite="https://www.bondensmarked.no"
    picture={picture}
    >
    </Blog>
    );
  }
}
export default Blogpage;