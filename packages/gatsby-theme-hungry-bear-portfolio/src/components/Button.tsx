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
  margin-top: 40px;
  width: 100%;

  & .bottom {
    position: absolute;
    left: 7px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: ${colors.accent};
    display: block;
    -webkit-transition: all 0.15s ease-out;
    -moz-transition: all 0.15s ease-out;
    -o-transition: all 0.15s ease-out;
    transition: all 0.15s ease-out;
  }

  & .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 24px 34px 22px 34px;
    border: 2px solid ${colors.primary};
  }

  & .top .label {
    font-family: sans-serif;
    font-weight: 600;
    color: #04049d;
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

  &:active {
    ${buttonDark}
  }

  &:hover .bottom {
    left: 0;
    top: 0;
    background-color: #f3f3f3;
  }

  &:hover .top .label {
    color: ${colors.secondary};
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

export const Button = () => (
    <div css={button}>
        <div className="bottom"/>
        <div className="top">
            <div className="label">THIS IS A BUTTON</div>
            <div css={[buttonBorder, buttonBorderLeft]}/>
            <div css={[buttonBorder, buttonBorderTop]}/>
            <div css={[buttonBorder, buttonBorderRight]}/>
            <div css={[buttonBorder, buttonBorderBottom]}/>
        </div>
    </div>
);
