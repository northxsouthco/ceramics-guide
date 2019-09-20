const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type InspirationYaml implements Node { image: File @link(from: "id", by: "name") }`,
  ]
  createTypes(typeDefs)
}

exports.createSchemaCustomization = createSchemaCustomization
