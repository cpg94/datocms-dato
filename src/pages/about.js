import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Background from "../components/Background";
import Sidebar from '../components/Sidebar'

const About = ({ data: { about } }) => (
  <Background>
    <Sidebar />
    <HelmetDatoCms seo={about.seoMetaTags} />
    <h1 style={{ fontWeight: 'bolder', color: 'red', fontSize: '80px'}}>{about.title}</h1>
    <div style={{ display: 'flex', color: 'white', background: 'black', height: 'fit-content', padding: '20px', position: 'absolute', bottom: 0}}>
      <div
        dangerouslySetInnerHTML={{
          __html: about.bioNode.childMarkdownRemark.html
        }}
      />
    </div>
  </Background>
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
