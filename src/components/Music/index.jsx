import React from 'react'
import {
    Container,
    Single
} from './Music.css'

const Music = ({ music }) => (
    <>
    <h1>Music</h1>
    <Container>
        {music && music.length ? (
            music.map(({ node }) => (
                <Single>
                <p>{node.title}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.embedString
                  }}
                />
                </Single>
            ))
        ) : <h1>No Music Yet!</h1>}
    </Container>
    </>
)

export default Music