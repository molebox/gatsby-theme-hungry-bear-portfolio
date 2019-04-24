import * as React from 'react';
import * as styles from '../components/Layout.module.css';
import HeaderNavbar from '../components/Header-Navbar';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Box } from './../components/Box';
import { Title } from './../components/Title';
import colors from '../extendable/colors';

// interface IndexPageProps {
//     data: {
//         site: {
//            siteMetadata: {
//                 test: string
//            }
//         }
//     };
//   }

// export const pageQuery = graphql`
//   query IndexQuery {
//       site {
//         siteMetadata {
//             test
//         }
//       }
//   }
// `;

export default () => {

    return (
      <div className={styles.gridContainer}>
        <div className={styles.headerNavbar}>
            <HeaderNavbar/>
        </div>
        <div className={styles.hero}>
            <Hero/>
        </div>
        <div className={[styles.content, styles.spreadHorizontal].join(' ')}>
            <Box noBackground noBorder>
                <Title>i am box! but i have no border</Title>
            </Box>
            <Box noBackground animate>
                <Title>i am box! and i am animated</Title>
            </Box>
            <Box color={colors.light}>
                <Title>i am box! i have a background color</Title>
            </Box>
            {/* <Content/>
            <Content/>
            <Content/>
            <Content/> */}
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
      </div>
   );
}
