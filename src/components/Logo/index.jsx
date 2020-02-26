import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

const Logo = ({ logo }) => console.log({ logo }) || (
    <StaticQuery
        query={graphql`
        query LogoQuery {
            logo: datoCmsLogo {
              logo {
                fluid(maxWidth: 100) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
          
           
        `}
          render={({ logo }) => (
                <Img style={{ marginBottom: '20px'}} fluid={logo.logo.fluid} />
              )
          }
    >
    </StaticQuery>
)


export default Logo