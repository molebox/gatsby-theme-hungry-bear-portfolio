import * as React from 'react';
import styled from '@emotion/styled';
import colors from '../extendable/colors';

export const Title = styled.h1`
    margin: 0 0 12px 0;
    padding: 0;
    color: ${colors.primary};
`

export default ({children}) => <Title>{children}</Title>;
