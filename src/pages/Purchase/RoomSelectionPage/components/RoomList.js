import React from 'react';
import styled from 'styled-components';

import Room from './Room';

export default function RoomList({ rooms }){
    console.log('room list');
    return (
        <S.RoomList>
            <div className="inner">
                {rooms && rooms.map(room => <Room 
                    key={room.id}
                    {...room}
                />)}
            </div>
        </S.RoomList>
    )
}

const S = {
    RoomList: styled.ul`
        display: flex;
        justify-content: center;

        .inner{
            display: flex;
            flex-wrap: wrap;
            padding-left: 5vw;
        }
    `
}