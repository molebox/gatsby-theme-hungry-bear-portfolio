import * as React from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import {Button} from '../components/Button';

export default () => (
    <Container>
        <Title>Hello from the gatsby theme! Im styled!</Title>
        <div style={{width: '500px'}}>
            <Button/>
        </div>
    </Container>
);
