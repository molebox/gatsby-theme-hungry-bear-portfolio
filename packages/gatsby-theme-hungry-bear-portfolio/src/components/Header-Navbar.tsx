import * as React from 'react';
import { Button } from './Button';
import { Title } from './Title';

export default () => {
    return(
        <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
                }}>
            <Button text="About" onClick={() => console.log()}/>
            <Button text="Blog" onClick={() => console.log()}/>
            <Button text="Contact" onClick={() => console.log()}/>
        </div>       
    )
}