import { graphql, Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
export const query = graphql`
  {
    legacy: allSitePage(
      filter: { path: { glob: "/legacy/**" } }
      sort: { fields: [context___Film, context___Song] }
    ) {
      nodes {
        path
        component
        context {
          Song
          Film
        }
      }
    }
    notes: allSitePage(
      filter: { path: { glob: "/notes/**" } }
      sort: { fields: [context___Film, context___Song] }
    ) {
      nodes {
        path
        component
        context {
          Song
          Film
        }
      }
    }
  }
`;
// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main style={pageStyles}>
      Completed:
      <ul style={listStyles}>
        {data.notes.nodes.map((f) => {
          return (
            <li>
              <Link to={f.path}>
                {f.context.Film} - {f.context.Song}
              </Link>
            </li>
          );
        })}
      </ul>
      Remaining:
      <ul style={listStyles}>
        {data.legacy.nodes.map((f) => {
          return (
            <li>
              <Link to={f.path}>
                {f.context.Film} - {f.context.Song}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default IndexPage;
