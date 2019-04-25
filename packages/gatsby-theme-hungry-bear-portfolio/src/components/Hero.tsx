import * as React from 'react';
import {Box} from './Box';
import { Title } from '../components/Title';
import colors from '../extendable/colors';

export default () => {
    return(
        <Box color={colors.accent}>
          <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
            }}
          >
            <Title fontWeight="300" fontSize="2rem">
              im a gatsby theme. you can use me as i am, or you can edit me!
              all you have to do is shadow the component you wish to edit. 
            </Title>
            <Title fontWeight="300" fontSize="2rem">
              you can also change my colors, animate my boxes,
              remove my box borders and much more..
            </Title>
            <Title fontWeight="300" fontSize="2rem">
              you can use this section to write about your site,
              or you can override it and do whatever you like, thats the beauty of themes!
            </Title>
          </div>
        </Box>
    );
};
