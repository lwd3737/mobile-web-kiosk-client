import React from 'react';
import styled, { css } from 'styled-components';

import { Card } from 'common/components/Cards';

export default function MenuCard({ children }){
    return (
        <Card
            extraStyles={{
                marginBottom: "10%"
            }}
        >
            <S.CardInner>
                {children}
            </S.CardInner>
        </Card>
    )
}

const S = {
    CardInner: styled.div`
        
    `
}