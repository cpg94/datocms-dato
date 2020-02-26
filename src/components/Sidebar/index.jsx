import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import {
    Container,
    StyledLink,
    LinkContainer
} from './Sidebar.css'
import Logo from '../Logo'

const Sidebar = ({ sidebar }) => console.log({ sidebar }) || (
    <StaticQuery
        query={graphql`
        query SidebarQuery {
            sidebar: allDatoCmsSidebar {
              edges {
                node {
                  link
                  linkText
                }
              }
            }
          }  
        `}
          render={(data) => (
              <Container>
                  <Logo />
                  <LinkContainer>
                  {data.sidebar.edges.map(({ node }) => (
                      <StyledLink to={node.link}>
                          {node.linkText}
                      </StyledLink>
                  ))}
                  </LinkContainer>
              </Container>)
          }
    >
    </StaticQuery>
)


export default Sidebar