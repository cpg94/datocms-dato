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
          render={({ background }) => (
            <Container src={get(sample(get(background, 'edges.[0].node.backgroundImages')), 'fluid.src', '')}>
                {children}
            </Container>
          )}
    />
)

export default Background