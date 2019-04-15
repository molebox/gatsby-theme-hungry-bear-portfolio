import * as React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

// wraps the whole button component
const buttonWrapper = css`
    display: inline-block;
    text-decoration: none;
    position: relative;
    margin-top: 40px;
    width: 100%;

    &:hover {
        left: 0;
        top: 0;
        background-color: #f3f3f3;

        height: calc(100% + 2px);
        width: calc(100% + 2px);
    }
`

// the top section of the button with a solid border
const buttonTop = css`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 24px 34px 22px 34px;
    border: 2px solid #04049d;

    
    &:hover {
        color: #2acdc1;
        height: calc(100% + 2px);
        width: calc(100% + 2px);
    }
`

// the bottom section of the button that hangs below the main border
const buttonBottom = css`
    position: absolute;
    left: 7px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: #2acdc1;
    display: block;
    -webkit-transition: all .15s ease-out;
    -moz-transition: all .15s ease-out;
    -o-transition: all .15s ease-out;
    transition: all .15s ease-out;

    &:hover {
        left: 0;
        top: 0;
        background-color: #f3f3f3;
    }
`

// the buttion label
const buttonLabel = css`
    font-family: sans-serif;
    font-weight: 600;
    color: #04049d;
    font-size: 12px;
    line-height: 110%;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all .15s ease-out;
    -moz-transition: all .15s ease-out;
    -o-transition: all .15s ease-out;
    transition: all .15s ease-out;

    &:hover {
        color: #2acdc1;
    }
`

const buttonBorder = css`
    position: absolute;
    background-color: #2acdc1;
    -webkit-transition: all .25s ease-out;
    -moz-transition: all .25s ease-out;
    -o-transition: all .25s ease-out;
    transition: all .25s ease-out;
`

const buttonBorderLeft = css`   
    ${buttonBorder}
    left: -2px;
    bottom: -2px;
    width: 2px;
    height: 0;

    &:hover {
        height: calc(100% + 2px);
    }
`

const buttonBorderTop = css`
    ${buttonBorder}
    left: -2px;
    top: -2px;
    width: 0;
    height: 2px;

    &:hover {
        width: calc(100% + 2px);
    }
`

const buttonBorderRight = css`
    ${buttonBorder}
    right: -2px;
    top: -2px;
    width: 2px;
    height: 0;

    &:hover {
        height: calc(100% + 2px);
    }
`

const buttonBorderBottom = css`
    ${buttonBorder}
    right: -2px;
    bottom: -2px;
    width: 0;
    height: 2px;

    &:hover {
        width: calc(100% + 2px);
    }
`

export default () => (
    <a css={buttonWrapper}>
        <div css={buttonBottom}/>
        <div css={buttonTop}>
            <div css={buttonLabel}>THIS IS A BUTTON</div>
                <div css={buttonBorderLeft}></div>
                <div css={buttonBorderTop}></div>
                <div css={buttonBorderRight}></div>
        		<div css={buttonBorderBottom}></div>
        </div>
    </a>
)