import React from "react";
import { graphql } from "gatsby";
import Background from "../components/Background";
import Sidebar from '../components/Sidebar'
import Music from '../components/Music'

const MusicPage = ({ data: { music } }) => (
    <>
    <Background>
    <Sidebar />
    <Music music={music.edges}/>
    </Background>
  </>
);

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
