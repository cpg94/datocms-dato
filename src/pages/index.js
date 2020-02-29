import React from 'react'
import { graphql } from 'gatsby'
import Background from '../components/Background'
import Header from '../components/Header'
import '../styles/index.sass'
// import Img from 'gatsby-image'

const IndexPage = () => (
  <div style={{ height: '100%' }}>
    <Header />
    <Background />
    <h1 style={{ fontWeight: 'bolder', color: 'red', fontSize: '80px'}}>Index</h1>
   </div>
)

export default IndexPage
