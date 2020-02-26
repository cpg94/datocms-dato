const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsEvent {
          edges {
            node {
              heading
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsEvent.edges.map(({ node: event }) => {
        console.log(event)
        createPage({
          path: `works/${event.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: event.slug,
          },
        })
      })
      resolve()
    })
  })
}
