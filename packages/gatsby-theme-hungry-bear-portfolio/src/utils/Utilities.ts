import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import breakpoints from '../extendable/breakpoints';

/**
 * Hook to provide media query to css elements.
 * Pass in the breakpoint and get back the media query
 * @param breakpoint A breakpoint represented as a string value
 */
export function useBreakPoint(breakpoint: string) {
    const [bp, setBreakpoint] = React.useState(undefined);

    React.useEffect(() => {
    const bpArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

    const [result] = bpArray.reduce((acc, [name, size]) => {
          if (breakpoint === name) {
            return [...acc, `@media (max-width: ${size}px)`];
          }
          return acc;
        }, []);
    setBreakpoint(result);
    }, [breakpoint]);

    return bp;
}

/**
 * Hook to provide the site meta data.
 * Provides title, description and author
 */
export function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  return site.siteMetadata;
}
