import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  const sections = [
    { title: 'admin', url: 'admin' },
  ];

  const sidebar = {
    title: props.infoTitle,
    description: props.infoText,
    archives: [],
    social: [
      { name: 'GitHub', icon: GitHubIcon, link: props.githubLink},
      { name: 'Twitter', icon: TwitterIcon, link: props.twitterLink},
      { name: 'Facebook', icon: FacebookIcon, link: props.facebookLink},
    ],
  };
  

  const mainFeaturedPost = {
    title: props.mainTitle,
    description: props.mainText,
    image: props.picture,
    imgText: 'main image description',
  };

  const featuredPosts = [
    {
      title: props.subTitle1,
      date: props.eventDate,
      description: props.subText1,
      image: props.picture,
      imageText: 'Image Text',
    },
    {
      title: props.subTitle2,
      date: props.eventDate,
      description: props.subText2,
      image: props.picture,
      imageText: 'Image Text',
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
       <Header title={props.eventTitle} sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} eventWebsite={props.eventWebsite} />
            ))}
          </Grid>
          <Grid  className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title={props.eventTitle} description={props.footerText} author={props.authors} eventWebsite={props.eventWebsite}/>
    </React.Fragment>
  );
}