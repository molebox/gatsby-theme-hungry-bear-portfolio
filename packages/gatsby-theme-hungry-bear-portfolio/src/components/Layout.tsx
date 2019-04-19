import * as React from 'react';
import * as styles from './Layout.module.css';
import HeaderNavbar from './Header-Navbar';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';

export default () => {

    return (
        <div className={styles}>
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
    )
}