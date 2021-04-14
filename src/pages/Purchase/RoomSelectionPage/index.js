import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { DetailHead } from 'common/components';
import { RoomListContainer } from './containers';

export default function RoomSelectionPage(){
    const { partnerId } = useParams();
    const prevLink = `/kiosk/${partnerId}`;
    
    return (
        <S.RoomSelectionPage>
            <DetailHead 
                title="공간 선택하기"
                prevLink={prevLink}
            />

            <RoomListContainer />
        </S.RoomSelectionPage>
    )
}

const S = {
    RoomSelectionPage: styled.div``
}