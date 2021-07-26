exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          id
          slug
          fileAbsolutePath
          frontmatter {
            Song
            Film
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
        }
      }
    }
  `);
  data.allMdx.nodes.forEach((node) => {
    const parent = node.parent.sourceInstanceName === "legacy" ? "legacy/" : "notes/";
    const slug = `${parent}${node.slug}`;
    actions.createPage({
      path: slug,
      component:
        parent === "legacy/"
          ? require.resolve("./src/templates/legacy.js")
          : require.resolve("./src/templates/notes.js"),
      context: { id: node.id, slug, ...node.frontmatter },
    });
  });
};
