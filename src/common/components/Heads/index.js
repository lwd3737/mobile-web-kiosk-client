import React from 'react';
import styled from 'styled-components';

import { PrevButton } from '../Buttons';

export function DetailHead({ title, prevLink }){
    return (
        <S.DetailHead>
            {prevLink && (
                <div className="left">
                    <PrevButton 
                        link={prevLink}
                    />
                </div>
            )}
            <h1 className="title">{title}</h1>
        </S.DetailHead>
    )
}

const S = {
    DetailHead: styled.header`
        position: relative;
        margin-bottom: 8vh;

        .left{
            position: absolute;
            top:0;
            left:0;
        }
       
       .title{
           text-align: center;
           font-size: 1.5rem;
           font-weight: bold;
       }
    `
}