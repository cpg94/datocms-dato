import React from 'react'
import  Logo from '../Logo'
import {
	Container,
	StyledLink
} from './Header.css'
import { StaticQuery, graphql } from 'gatsby'

const Header =  () => (
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
          render={(data) => console.log({ data }) || (
              <Container>
              		<div style={{ display: 'flex', alignItems: 'center' }}>
                  		<Logo />
              			<h1 style={{ marginLeft: '10px', fontFamily: 'Asap', fontWeight: 'bolder'}}>DIMENSION</h1>
              		</div>
                  <div>
                  {data.sidebar.edges.map(({ node }) => (
                      <StyledLink to={node.link}>
                          {node.linkText}
                      </StyledLink>
                  ))}
                  </div>
              </Container>)
          }
    >
    </StaticQuery>
)


export default Header
