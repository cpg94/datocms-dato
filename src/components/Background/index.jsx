import React from 'react'
import {
    Container
} from './Background.css'
import { StaticQuery, graphql } from "gatsby";
import sample from 'lodash/sample'
import get from 'lodash/get'

const Background = ({ children }) => (
    <StaticQuery
        query={graphql`
        query BGQuery {
            background: allDatoCmsBackgroundImage {
              edges {
                node {
                  id
                  backgroundImages {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
          `}
          render={({ background }) => console.log(background) || (
            <Container>
            <video muted={true} autoPlay={true} loop={true} style={{ 'filter': 'greyscale(100%)'}}>
                <source src={"https://www.datocms-assets.com/21260/1582982187-getfvid163741674298070938.mp4"} type="video/mp4" />
            </video>
            </Container>
          )}
    />
)

export default Background