import React from "react";
import {Helmet} from "react-helmet";
import {graphql, StaticQuery} from "gatsby";
import {MainTheme} from "../layout/theme";

interface IHeadProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  article?: boolean;
  pathname: string;
}

export const Head = ({
  title,
  description,
  thumbnail,
  pathname,
  article
}: IHeadProps) => (
  <StaticQuery
    query={QueryHead}
    render={({
      site: {
        siteMetadata: {
          site,
          defaultTitle,
          titleTemplate,
          defaultDescription,
          language,
          siteUrl,
          color,
          twitter
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: thumbnail || `${siteUrl}/assets/thumbnail.png`,
        url: `${siteUrl}${pathname}`,
        twitter
      };
      const link = MainTheme.googleUrl;
      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          <html lang={language} />
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="theme-color" content={color} />
          <meta name="application-name" content={site} />
          <link rel="canonical" href={seo.url} />
          <link href={link} rel="stylesheet" />
          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          {article && <meta property="og:type" content="article" />}

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={site} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <meta name="twitter:creator" content={seo.twitter} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:url" content={seo.url} />
        </Helmet>
      );
    }}
  />
);

const QueryHead = graphql`
  query QueryHead {
    site {
      siteMetadata {
        site
        siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        language
        color
        twitter
      }
    }
  }
`;
