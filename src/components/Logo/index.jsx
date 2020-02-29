import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

const Logo = ({ logo }) => console.log({ logo }) || (
    <StaticQuery
        query={graphql`
        query LogoQuery {
            logo: datoCmsLogo {
              logo {
                fixed(width: 60) {
                  ...GatsbyDatoCmsFixed
                }
              }
            }
          }
          
           
        `}
          render={({ logo }) => (
                <Img fixed={logo.logo.fixed} />
              )
          }
    >
    </StaticQuery>
)


export default Logo