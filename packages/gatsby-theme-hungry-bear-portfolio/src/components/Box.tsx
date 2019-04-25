import * as React from 'react';
import colors from '../extendable/colors';
import {css} from '@emotion/core';
import { useSpring, animated } from 'react-spring';

interface BoxProps {
    noBackground?: boolean;
    noBorder?: boolean;
    children: React.ReactNode;
    color?: string;
    animate?: boolean;
}

export const Box = ({children, noBackground, noBorder, color, animate}: BoxProps) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans: any = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    if (animate) {
       return (
        <animated.div
            css={css`
                position: relative;
                height: 100%;

                & .bottom {
                    position: absolute;
                    left: 4px;
                    top: 7px;
                    width: 100%;
                    height: 100%;
                    background-color: ${noBackground ? 'none' : color ? color : undefined};
                    display: block;
                }

                & .top {
                    position: relative;
                    left: 10px;
                    top: 0;
                    height: 100%;
                    padding: 24px 34px 22px 34px;
                    border: 2px ${noBorder ? 'none' : 'solid'} ${colors.primary};
            }`}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
        <div className="bottom"/>
            <div className="top">
                {children}
        </div>
        </animated.div>
       );
    } else {
        return (
            <div
                css={css`
                position: relative;
                height: 100%;

                & .bottom {
                    position: absolute;
                    left: 4px;
                    top: 7px;
                    width: 100%;
                    height: 100%;
                    background-color: ${noBackground ? 'none' : color ? color : undefined};
                    display: block;
                }

                & .top {
                    position: relative;
                    left: 10px;
                    top: 0;
                    height: 100%;
                    padding: 24px 34px 22px 34px;
                    border: 2px ${noBorder ? 'none' : 'solid'} ${colors.primary};
                }`}
            >
            <div className="bottom"/>
                <div className="top">
                    {children}
                </div>
            </div>
        );
    }
};
