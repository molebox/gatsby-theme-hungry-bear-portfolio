import * as React from 'react';
import { Button } from './Button';
import { Title } from './Title';
import * as styles from './Layout.module.css';

export default () => {
    return(
        <div className={styles.headerNavbar}>
            <div className={styles.spreadHorizontal}>
                <Title>hungry bear studio</Title>
            </div>
            <div className={styles.buttons}>
                <Button text="about" onClick={() => console.log()}/>
                <Button text="blog" onClick={() => console.log()}/>
                <Button text="contact" onClick={() => console.log()}/>
            </div>      
        </div> 
    )
}