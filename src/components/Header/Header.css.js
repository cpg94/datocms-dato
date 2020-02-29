import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledLink = styled(Link)`
color: white;
outline: none;
text-decoration: none;
margin-right: 8px;
font-family: 'Asap' 
letter-spacing: 2px;
   font-size: 14px;
text-transform: uppercase;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: black;
    color: white;
    position: static;
    align-items: center;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
`