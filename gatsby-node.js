const path = require("path")

const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type InspirationYaml implements Node { image: File @link(from: "id", by: "name") }`,
  ]
  createTypes(typeDefs)
}

const onCreateWebpackConfig = ({ stage, actions }) => {
  // Allow us to use 'clean' import urls for modules
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve("src"), "node_modules"],
    },
  })

  // No sourcemaps in production
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.onCreateWebpackConfig = onCreateWebpackConfig

exports.createSchemaCustomization = createSchemaCustomization
