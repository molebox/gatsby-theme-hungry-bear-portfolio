import * as React from 'react';
import {css} from '@emotion/core';
import colors from '../extendable/colors';
import { useBreakPoint } from '../utils/Utilities';

export const buttonBorderLeft = css`
  left: -2px;
  bottom: -2px;
  width: 2px;
  height: 0;
`;

export const buttonBorderRight = css`
  right: -2px;
  top: -2px;
  width: 2px;
  height: 0;
`;

export const buttonBorderTop = css`
  left: -2px;
  top: -2px;
  width: 0;
  height: 2px;
`;

export const buttonBorderBottom = css`
  right: -2px;
  bottom: -2px;
  width: 0;
  height: 2px;
`;

export const buttonDark = css`
  & .top {
    border: 2px solid ${colors.accent};
  }

  & .top .label {
    color: ${colors.accent};
  }
`;

export const button = css`
  display: inline-block;
  text-decoration: none;
  position: relative;
  border: none;
  outline: none;

  & .bottom {
    position: absolute;
    left: 4px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: ${colors.secondary};
    display: block;
    -webkit-transition: all 0.20s ease-out;
    -moz-transition: all 0.20s ease-out;
    -o-transition: all 0.20s ease-out;
    transition: all 0.20s ease-out;
  }

  & .top {
    position: relative;
    left: 10px;
    top: 0;
    padding: 24px 34px 22px 34px;
    border: 2px solid ${colors.primary};
  }

  & .top .label {
    font-family: Montserrat;
    font-weight: 600;
    color: ${colors.primary};
    font-size: 12px;
    line-height: 110%;
    letter-spacing: 2px;
    text-align: center;
    // text-transform: uppercase;
    -webkit-transition: all 0.15s ease-out;
    -moz-transition: all 0.15s ease-out;
    -o-transition: all 0.15s ease-out;
    transition: all 0.15s ease-out;
  }

  &:active {
    ${buttonDark}
  }

  &:hover .bottom {
    left: 10px;
    top: 0;
    background-color: ${colors.light};
  }

  &:hover .top .label {
    color: ${colors.primary};
    cursor: pointer;
  }

  &:hover
    .top
    .${buttonBorderLeft},
    &:hover
    .top
    .${buttonBorderRight} {
    height: calc(100% + 2px);
    cursor: pointer;
  }

  &:hover
    .top
    .${buttonBorderTop},
    &:hover
    .top
    .${buttonBorderBottom} {
    width: calc(100% + 2px);
    cursor: pointer;
  }
`;

export const buttonBorder = css`
  position: absolute;
  background-color: ${colors.primary};
  -webkit-transition: all .25s ease-out;
  -moz-transition: all .25s ease-out;
  -o-transition: all .25s ease-out;
  transition: all .25s ease-out;
`;

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({text, onClick}: ButtonProps) => (

  <div
    css={{
    display: 'flex',
    margin: '1.5rem',
    [useBreakPoint('medium')]: {
      height: '40%'
      },
    // [useBreakPoint('largeMobile')]: {
    //     width: '5rem',
    //     // height: '100%'
    //   }
    }}
  >
    <a onClick={onClick} css={button}>
        <div className="bottom"/>
        <div className="top">
            <div className="label">{text}</div>
            <div css={[buttonBorder, buttonBorderLeft]}/>
            <div css={[buttonBorder, buttonBorderTop]}/>
            <div css={[buttonBorder, buttonBorderRight]}/>
            <div css={[buttonBorder, buttonBorderBottom]}/>
        </div>
    </a>
  </div>
);
