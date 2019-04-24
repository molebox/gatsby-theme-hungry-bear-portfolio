import * as React from 'react';
import {Box} from './Box';
import { Title } from '../components/Title';
import colors from '../extendable/colors';

export default () => {
    return(
        <div>
            <Box animate color={colors.accent}>
                <Title>i am box! i can be animated</Title>
            </Box>
        </div>

    )
}