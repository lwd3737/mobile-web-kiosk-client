import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { DetailHead } from 'common/components';
import { SeatSelectionContainer } from './containers';

export default function SeatSelectionPage(){
    const { partnerId, roomId } = useParams();
    const prevLink = `/kiosk/${partnerId}/purchase/rooms`;

    return (
        <S.SeatSelectionPage>
            <DetailHead 
                title="좌석 선택하기"
                prevLink={prevLink}
            />

            <SeatSelectionContainer />
        </S.SeatSelectionPage>
    )
}

const S = {
    SeatSelectionPage: styled.div``
}