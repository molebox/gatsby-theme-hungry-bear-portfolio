import * as React from 'react';
import colors from '../extendable/colors';
import {css} from '@emotion/core';

interface BoxProps {
    noBackground?: boolean;
    noBorder?: boolean;
    children: React.ReactNode;
}

export const Box = ({children, noBackground, noBorder}: BoxProps) => (
    <div css={css`
    position: relative;
    height: 100%;

    & .bottom {
        position: absolute;
        left: 4px;
        top: 7px;
        width: 100%;
        height: 100%;
        background-color: ${noBackground ? 'none' : colors.accent};
        display: block;
    }

    & .top {
        position: relative;
        left: 10px;
        top: 0;
        height: 100%;
        padding: 24px 34px 22px 34px;
        border: 2px ${noBorder ? 'none' : 'solid'} ${colors.primary};
      }`}>
        <div className="bottom"/>
        <div className="top">
            {children}
        </div>
    </div>
);
