import React, { useEffect } from 'react'
import styled, { css } from 'styled-components';

import { MenuCard } from './components';
import { TicketSvg } from 'common/components/Svg';
import { ReactComponent as TicketIcon } from 'assets/images/home/ticket.svg';

const menuList = [
    {
        name: '이용권 구매하기',
        Icon: <TicketIcon />
    },
    {
        name: '시간 연장하기'
    },
    {
        name: '입실하기'
    },
    {
        name: '퇴실하기'
    },
    {
        name: '좌석 이동하기'
    },
];

export default function HomePage({}){
    const renderMenuCards = () => {
        return menuList.map(menu => {
            const { name, Icon } = menu;
            
            return(
                <MenuCard>
                    <div className="menu-icon">
                        {Icon}
                    </div>
                    <div className="menu-name">
                        {name}
                    </div>
                </MenuCard>
            )
                
        })
    }
    
    return (
        <S.HomePage>
            {renderMenuCards()}
        </S.HomePage>
    )
}


const S = {
    HomePage: styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .menu-icon{
            display:flex;
            justify-content:center;

            svg{
                width: 40%;

                path{
                    color: rgba(0,0,0,0.35);
                }
            }
        }

        .menu-name{
            font-size: 0.8rem;
            text-align: center;
            padding: 6% 0 2% 0;
            font-weight: bold;
        }
    `
};