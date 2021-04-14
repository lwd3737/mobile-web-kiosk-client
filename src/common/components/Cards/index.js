import React from 'react';
import styled, { css } from 'styled-components';

export function SimpleCard({ children, width, height, extraStyles, onClick }){
    return (
        <S.Card
            width={width}
            height={height}
            style={extraStyles}
            onClick={onClick}
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
        box-shadow: 0 1.5px 10px rgb(0 0 0 / 10%);
        
        ${({ width, height }) => {
            return css`
                width: ${width || '35vw'};
                height: ${height || 'auto'};
            `
        }}
    `
}
