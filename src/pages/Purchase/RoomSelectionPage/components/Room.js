import React from 'react';
import styled from 'styled-components';

import { SimpleCard } from 'common/components';

export default function Room({ id, number, name, seatCount, seatsInUseCount, onClick }){
    return (
        <S.Room
            width="30vw"
            extraStyles={{
                margin: '2vh 3vw'
            }}
            onClick={onClick}
        >
            <S.Inner>
                <div className="room-name">
                    {name}
                </div>
                <div className="infos">
                    <label>좌석 : </label>
                    <div>
                    <span>{seatsInUseCount}</span> / 
                    <span>{seatCount}</span>
                    </div>
                </div>
            </S.Inner>
        </S.Room>
    )
}

const S = {
    Room: styled(SimpleCard)`
    `,
    Inner: styled.div`
        padding: 2vh 0;

        .room-name{
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 2.5vh;
        }

        .infos{
            display: flex;
            justify-content: center;
        }
    `
}