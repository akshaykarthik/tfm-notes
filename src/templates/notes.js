import React from "react";
import Video from "../components/Video";
import { graphql, Link } from "gatsby";

export default function Notes({ data }) {
  const post = data.mdx;
  let body = post.rawBody;
  body = body.replace(/---(.|\n)*?---/im, "");
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{post.frontmatter.Song}</h1>
      <h2>Film: {post.frontmatter.Film}</h2>
      <h3>Composer: {post.frontmatter.Composer}</h3>
      <h3>Lyrics: {post.frontmatter.Lyrics}</h3>
      <h3>Artists: {post.frontmatter.Artists}</h3>
      {post.frontmatter.Link && <Video videoSrcURL={post.frontmatter.Link} />}
      <pre dangerouslySetInnerHTML={{ __html: body }} />
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
        Lyrics
        Artists
        Link
      }
      rawBody
    }
  }
`;
