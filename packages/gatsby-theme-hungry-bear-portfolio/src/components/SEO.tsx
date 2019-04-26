import * as React from 'react';
import {Helmet} from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

interface SEOProps {
    title?: string;
    description?: string;
    author?: string;
    image?: string;
    pathname?: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

const SEO = ({title, description, author, image, pathname}: SEOProps) => (
    <StaticQuery
        query={query}
        render={({
        site: {
            siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
            }
        }
        }) => {
        const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            image: `${siteUrl}${image || defaultImage}`,
            url: `${siteUrl}${pathname || '/'}`,
        };

        return (
            <>
              <Helmet title={seo.title} titleTemplate={titleTemplate}>
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
                {seo.url && <meta property="og:url" content={seo.url} />}
                {seo.title && <meta property="og:title" content={seo.title} />}
                {seo.description && (
                  <meta property="og:description" content={seo.description} />
                )}
                {seo.image && <meta property="og:image" content={seo.image} />}
                <meta name="twitter:card" content="summary_large_image" />
                {twitterUsername && (
                  <meta name="twitter:creator" content={twitterUsername} />
                )}
                {seo.title && <meta name="twitter:title" content={seo.title} />}
                {seo.description && (
                  <meta name="twitter:description" content={seo.description} />
                )}
                {seo.image && <meta name="twitter:image" content={seo.image} />}
              </Helmet>
            </>
          );
        }}
    />
);
