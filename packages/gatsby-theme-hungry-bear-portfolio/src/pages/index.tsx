import * as React from 'react';
import {graphql} from 'gatsby';
import { Box } from '../components/Container';
import { Title } from '../components/Title';
import {Button} from '../components/Button';

interface IndexPageProps {
    data: {
        site: {
           siteMetadata: {
                test: string
           }
        }
    };
  }

export const pageQuery = graphql`
  query IndexQuery {
      site {
        siteMetadata {
            test
        }
      }
  }
`;

export default ({data}: IndexPageProps) => {
    console.log({data});
    return (
   <div>
        <Box>
            <Title>Hello from the gatsby theme! Im styled!</Title>
        </Box>
        <Button onClick={() => console.log('HIT')} text="Im a button"/>
    </div>
   );
}
