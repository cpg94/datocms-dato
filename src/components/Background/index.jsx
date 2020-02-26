import React from 'react'
import {
    Container
} from './Background.css'

const Background = ({ src, children }) => (
    <Container src={src}>
        {children}
    </Container>
)

export default Background