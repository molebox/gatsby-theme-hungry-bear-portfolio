import * as React from 'react';
import {graphql} from 'gatsby';
import * as styles from '../components/Layout.module.css';
import HeaderNavbar from '../components/Header-Navbar';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

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
      <div className={styles.gridContainer}>
        <div className={styles.headerNavbar}>
            <HeaderNavbar/>
        </div>
        <div className={styles.hero}>
            <Hero/>
        </div>
        <div className={styles.content}>
            <Content/>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
      </div>
  //  <div>
  //       <Box>
  //           <Title>Hello from the gatsby theme! Im styled!</Title>
  //       </Box>
  //       <Button onClick={() => console.log('HIT')} text="Im a button"/>
  //   </div>
   );
}
