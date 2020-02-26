import React from 'react'
import { graphql } from 'gatsby'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import '../styles/index.sass'
// import Img from 'gatsby-image'

const IndexPage = ({ data }) => console.log({ data }) || (
  <Background src={"https://www.datocms-assets.com/21260/1581362795-7714714525075074026383018442990729873063936o.jpg?auto=format"}>
    <Sidebar />
  </Background>
)

export default IndexPage

export const query = graphql`
query HomeQuery {
  allDatoCmsHome {
    edges {
      node {
        promoImage {
          fluid {
            src
          }
        }
      }
    }
  }
}
`
