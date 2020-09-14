import * as React from "react";
import {graphql} from "gatsby";
import {Layout} from "../layout";
import {Documentation} from "../components/docs/Documentation";

type IndexPageProps = {
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
};

export default ({data, location}: IndexPageProps) => {
  // const {image, site} = data;
  return (
    <Layout location={location}>
      <Documentation />
    </Layout>
  );
};

export const indexPageQuery = graphql`
  query IndexPageQuery {
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
