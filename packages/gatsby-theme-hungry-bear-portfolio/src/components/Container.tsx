import * as React from 'react';
import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 3rem auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default ({children}) => <Container>{children}</Container>;
