import * as React from 'react';
import { Box } from './Box';
import { Title } from '../components/Title';

export default () => {
    return(
        <Box noBackground noBorder>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
            <Title fontWeight="300">
             im the footer
            </Title>
          </div>
        </Box>
    )
}