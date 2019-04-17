import * as React from 'react';
import colors from '../extendable/colors';
import {css} from '@emotion/core';

export const container = css`
    display: inline-block;
    text-decoration: none;
    position: relative;

    & .bottom {
        position: absolute;
        left: 4px;
        top: 7px;
        width: 100%;
        height: 100%;
        background-color: ${colors.accent};
        display: block;
    }

    & .top {
        position: relative;
        left: 10px;
        top: 0;
        padding: 24px 34px 22px 34px;
        border: 2px solid ${colors.primary};
      }
`;

export const Box = ({children}) => (
    <div style={{display: 'flex', margin: '1.5rem'}}>
    <div css={container}>
        <div className="bottom"/>
        <div className="top">
            {children}
        </div>
    </div>
  </div>
);
