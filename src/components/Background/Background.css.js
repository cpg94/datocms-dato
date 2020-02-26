import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: ${({ src }) => `url("${src}")`}
`