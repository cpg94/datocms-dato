import React from "react";
import { graphql } from "gatsby";
import Background from "../components/Background";
import Music from '../components/Music'
import Header from '../components/Header'

const MusicPage = ({ data: { music } }) => (
    <>
    <Header />
    <Background>
    <Music music={music.edges}/>
    </Background>
  </>
)

export default MusicPage;

export const query = graphql`
  query MusicQuery {
    music: allDatoCmsMusic {
      edges {
        node {
          title
          embedString
        }
      }
    }
    about: datoCmsAboutPage {
      aboutImage {
        fluid {
          src
        }
      }
    }
  }
`;
