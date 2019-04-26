import * as React from 'react';
import * as styles from '../components/Layout.module.css';
import HeaderNavbar from '../components/Header-Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Box } from './../components/Box';
import { Title } from './../components/Title';
import colors from '../extendable/colors';

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
                <Title>im a box! but i have no border</Title>
            </Box>
            <Box noBackground animate>
                <Title>im a box! and i am animated</Title>
            </Box>
            <Box color={colors.secondary}>
                <Title>im a box! i have a background color</Title>
            </Box>
            <Box>
                <Title>im a normal box</Title>
            </Box>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
      </div>
   );
};
