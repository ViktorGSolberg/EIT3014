import React, { Component } from 'react';
import Blog from './Blog';
import picture from '../../SamplePics/bondens_marked.jfif'

class Blogpage extends Component {
  render() {
    return (
    <Blog
    eventTitle="BONDENS MARKED"
    mainTitle="SMAKSFULL KVALITETSMAT"
    mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorge magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    eventDate="Mar 12"
    subTitle1="SE MARKEDET"
    subText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    subTitle2="MØT BØNDENDE"
    subText2="This is a wider card with supporting text below as a natural lead-in to additional content."
    infoTitle="NÆRMERE INFORMASJON OM ARRANGEMENTET"
    infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorge magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    footerText="TEKS I FOOTEREN?"
    authors="Gruppe A, EiT"

    picture={picture}

    >
    </Blog>
    );
  }
}
export default Blogpage;