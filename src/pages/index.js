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
        ...pageComponents
      }
    }
    notes: allSitePage(
      filter: { path: { glob: "/notes/**" } }
      sort: { fields: [context___Film, context___Song] }
    ) {
      nodes {
        ...pageComponents
      }
    }
  }

  fragment pageComponents on SitePage {
    path
    component
    context {
      Song
      Film
      Composer
      Lyrics
      Artists
      Link
    }
  }
`;
// markup
const IndexPage = ({ data }) => {
  const qualityMetrics = {
    Song: 0,
    Film: 0,
    Composer: 0,
    Lyrics: 0,
    Artists: 0,
    Link: 0,
  };
  const qualCount = (f) => {
    if (f.context.Song) qualityMetrics.Song++;
    if (f.context.Film) qualityMetrics.Film++;
    if (f.context.Composer) qualityMetrics.Composer++;
    if (f.context.Lyrics) qualityMetrics.Lyrics++;
    if (f.context.Artists) qualityMetrics.Artists++;
    if (f.context.Link) qualityMetrics.Link++;
  };
  data.notes.nodes.forEach(qualCount);
  data.legacy.nodes.forEach(qualCount);

  return (
    <main style={pageStyles}>
      Quality Metrics:
      <ul style={listStyles}>
        {Object.entries(qualityMetrics).map(([k, v]) => (
          <li>
            {k}: {v}
          </li>
        ))}
      </ul>
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
