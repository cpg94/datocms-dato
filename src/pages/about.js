import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Background from "../components/Background";
import Header from "../components/Header";

const About = ({ data: { about } }) => (
  <>
  <Header />
  <Background />
    <HelmetDatoCms seo={about.seoMetaTags} />
    <h1 style={{ fontWeight: 'bolder', color: 'red', fontSize: '80px'}}>{about.title}</h1>
   </>
);

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      aboutImage {
        fluid {
          src
        }
      }
    }
  }
`;
