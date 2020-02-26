import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
    background-image: ${({ src }) => `url("${src}")`}
`