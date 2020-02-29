import React from 'react'
import { graphql } from 'gatsby'
import Background from "../components/Background";
import Header from "../components/Header";

const Photos = ({ data: { about } }) => (
    <>
    <Header />
    <Background />
    </>
)

export default Photos

export const query = graphql`
  query PhotosQuery {
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
`
