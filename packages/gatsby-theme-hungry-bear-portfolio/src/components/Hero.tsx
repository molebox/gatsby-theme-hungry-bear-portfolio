import * as React from 'react';
import {Box} from './Box';
import { Title } from '../components/Title';

export default () => {
    return(
        <Box>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <Title fontWeight="300">
              i make websites and mobile apps
            </Title>
          </div>
        </Box>
    )
}