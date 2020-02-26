import React from 'react'
import { graphql } from 'gatsby'
import Background from "../components/Background";
import Sidebar from '../components/Sidebar'

const Photos = ({ data: { about } }) => (
    <Background>
    <Sidebar />
        <h1 style={{ fontWeight: 'bolder', color: 'red', fontSize: '80px'}}>Nothing yet boss</h1>
    </Background>
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
