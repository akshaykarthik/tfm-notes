module.exports = {
  siteMetadata: {
    pathPrefix: "/tfm-notes",
    siteUrl: "https://akshaykarthik.github.io/tfm-notes",
    title: "tfm-notes",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "legacy",
        path: "./legacy",
      },
      __key: "legacy",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: "./notes",
      },
      __key: "notes",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.mdx', '.md', '.html']
      }
    }
  ],
};
