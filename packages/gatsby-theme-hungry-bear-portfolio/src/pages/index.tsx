import * as React from 'react';
import { Box } from '../components/Container';
import { Title } from '../components/Title';
import {Button} from '../components/Button';

export default () => (
    <div>
        <Box>
            <Title>Hello from the gatsby theme! Im styled!</Title>
        </Box>
        <Button onClick={() => console.log('HIT')} text="Im a button"/>
    </div>
);
