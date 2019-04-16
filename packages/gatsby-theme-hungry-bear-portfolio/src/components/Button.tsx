import * as React from 'react';
import {css} from '@emotion/core';
import colors from '../extendable/colors';

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
    color: ${colors.secondary};
  }
`;

export const button = css`
  display: inline-block;
  text-decoration: none;
  position: relative;
  border: none;
  cursor: pointer;
  outline: none;

  & .bottom {
    position: absolute;
    left: 4px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: #2acdc1;
    display: block;
    -webkit-transition: all 0.15s ease-out;
    -moz-transition: all 0.15s ease-out;
    -o-transition: all 0.15s ease-out;
    transition: all 0.15s ease-out;
  }

  & .top {
    position: relative;
    left: 10px;
    top: 0;
    // width: 100%;
    // height: 100%;
    padding: 24px 34px 22px 34px;
    border: 2px solid ${colors.primary};
  }

  & .top .label {
    font-family: sans-serif;
    font-weight: 600;
    color: ${colors.primary};
    font-size: 12px;
    line-height: 110%;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all 0.15s ease-out;
    -moz-transition: all 0.15s ease-out;
    -o-transition: all 0.15s ease-out;
    transition: all 0.15s ease-out;
  }

  &:hover {
    ${buttonDark}
  }

  &:hover .bottom {
    left: 0;
    top: 0;
    background-color: #f3f3f3;
  }

  &:hover .top .label {
    // color: #2acdc1;
    color: ${colors.accent};
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
  background-color: #2acdc1;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
`;

interface ButtonProps {
  text: string;
}

export const Button = ({text}: ButtonProps) => (
  <div style={{display: 'flex'}}>
    <a css={button}>
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
