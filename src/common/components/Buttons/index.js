import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { ReactComponent as PrevIcon} from 'assets/images/arrow-left.svg';

export function PrevButton({ link }){
    const history = useHistory();
   
    return (
        <S.PrevButton
            onClick={() => history.replace(link)}
        >
                <PrevIcon />
        </S.PrevButton>
    )
}

const S = {
    PrevButton: styled.div`
        width: 20px;
        height: 20px;
       
    `
}