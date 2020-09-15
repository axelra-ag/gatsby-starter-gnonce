import React from "react";
import {H1} from "axelra-styled-bootstrap-grid";
import {graphql} from "gatsby";
import {Layout} from "../layout";

interface IndexPageProps {
  location: {
    pathname: string;
  };
  data: {
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}

export default ({data, location}: IndexPageProps) => {
  // const {image, site} = data;
  return (
    <Layout location={location}>
      <H1>Page not found!</H1>
    </Layout>
  );
};

export const NotFoundQuery = graphql`
  query NotFoundPageQuery {
    image: file(relativePath: {eq: "icon.png"}) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
