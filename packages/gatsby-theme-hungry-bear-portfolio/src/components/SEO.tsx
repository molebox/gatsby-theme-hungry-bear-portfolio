import * as React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../utils/Utilities';

export default () => {

  const {title, description, twitterUsername} = useSiteMetadata();

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};
