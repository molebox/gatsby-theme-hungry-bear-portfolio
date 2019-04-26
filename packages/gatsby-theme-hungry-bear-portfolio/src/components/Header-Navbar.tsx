import * as React from 'react';
import { Button } from './Button';
import { Title } from './Title';
import * as styles from './Layout.module.css';
import { useSiteMetadata } from '../utils/Utilities';

export default () => {
    const {title} = useSiteMetadata();
    return(
        <div className={styles.headerNavbar}>
            <div className={styles.spreadHorizontal}>
                <Title>{title}</Title>
            </div>
            <div className={styles.buttons}>
                <Button text="we" onClick={() => console.log()}/>
                <Button text="are" onClick={() => console.log()}/>
                <Button text="buttons" onClick={() => console.log()}/>
            </div>
        </div>
    );
};
