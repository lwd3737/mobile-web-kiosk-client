import React from 'react';
import styled, { css } from 'styled-components';

import { useHistory } from 'react-router-dom';
import { SimpleCard } from 'common/components';

export default function MenuCard({ children, onMenuMoveClick }){
    return (
        <S.MenuCard
            onClick={onMenuMoveClick}
        >
            <SimpleCard
                extraStyles={{
                    marginBottom: "25%",
                    height: "25vw",
                }}
            >
                    {children}
            </SimpleCard>
        </S.MenuCard>
    )
}

const S = {
    MenuCard: styled.div`
        
    `
}