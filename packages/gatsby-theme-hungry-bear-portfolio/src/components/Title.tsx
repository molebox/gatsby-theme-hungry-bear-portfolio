import * as React from 'react';
import colors from '../extendable/colors';
import {css} from '@emotion/core';

interface TitleProps {
    fontSize?: string;
    fontWeight?: string;
    children: React.ReactNode;
}

// TODO: ADD JSDOCS
export const Title = ({fontSize, fontWeight, children}: TitleProps) => (
    <div css={
        css`
        font-family: Montserrat;
        font-weight: ${fontWeight ? fontWeight : '300'};
        line-height: 110%;
        font-size: ${fontSize ? fontSize : '3rem'};
        letter-spacing: 2px;
        margin: 0 0 12px 0;
        padding: 0;
        color: ${colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        word-wrap: break-word;
    `}>
        {children}
    </div>
);
