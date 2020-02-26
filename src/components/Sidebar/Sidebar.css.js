import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledLink = styled(Link)`
color: white;
outline: none;
text-decoration: none;
margin-bottom: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    background-color: black;
    height: fit-content;
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`