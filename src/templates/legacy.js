import React from "react";
import { graphql, Link } from "gatsby";

export default function Notes({ data }) {
  const post = data.mdx;
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{post.frontmatter.Song}</h1>
      <h2>{post.frontmatter.Film}</h2>
      <pre dangerouslySetInnerHTML={{ __html: post.rawBody }} />
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      slug
      frontmatter {
        Song
        Film
        Composer
      }
      rawBody
    }
  }
`;
