import React from 'react';
import styled, { css } from 'styled-components';

export default function Card({ children, width, height, extraStyles }){
    return (
        <S.Card
            width={width}
            height={height}
            style={extraStyles}
        >
            {children}
        </S.Card>
    )
}

const S = {
    Card: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 12px;
        padding: 3% 0;
        
        ${({ width, height }) => {
            return css`
                width: ${width || '35vw'};
                height: ${height || 'auto'};
            `
        }}
    `
}