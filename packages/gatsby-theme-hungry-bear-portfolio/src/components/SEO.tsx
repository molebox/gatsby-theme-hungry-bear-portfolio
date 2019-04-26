import * as React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

interface SEOProps {
    title?: string;
    description?: string;
    author?: string;
    url?: string;
    twitterUsername?: string;
    pathname?: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        url
        twitterUsername
      }
    }
  }
`;

const SEO = ({title, description, author, url, pathname, twitterUsername}: SEOProps) => (
    <StaticQuery
        query={query}
        render={({
        }) => {
        const seo = {
            title,
            description,
            author,
            url: `${url}${pathname || '/'}`,
        };

        return (
              <Helmet title={seo.title}>
                <meta name="description" content={seo.description} />
                {seo.url && <meta property="og:url" content={seo.url} />}
                {seo.title && <meta property="og:title" content={seo.title} />}
                {seo.description && (
                  <meta property="og:description" content={seo.description} />
                )}
                <meta name="twitter:card" content="summary_large_image" />
                {twitterUsername && (
                  <meta name="twitter:creator" content={twitterUsername} />
                )}
                {seo.title && <meta name="twitter:title" content={seo.title} />}
                {seo.description && (
                  <meta name="twitter:description" content={seo.description} />
                )}
              </Helmet>
          );
        }}
    />
);

export default SEO;
