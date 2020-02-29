import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: 100vh;
  z-index:-1;
 /* to edit the grayscale effect edit the percentage below in your code*/
  filter:grayscale(100%);`