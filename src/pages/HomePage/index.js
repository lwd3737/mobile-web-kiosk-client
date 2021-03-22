import React from 'react'
import styled, { css } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import { MenuCard } from './components';
import { ReactComponent as TicketIcon } from 'assets/images/home/ticket.svg';
import { ReactComponent as TimeIcon } from 'assets/images/home/time.svg';
import { ReactComponent as CheckInIcon } from 'assets/images/home/checkin.svg';
import { ReactComponent as CheckOutIcon } from 'assets/images/home/checkout.svg';
import { ReactComponent as ChangeIcon } from 'assets/images/home/change.svg';


export default function HomePage(){
    const history = useHistory();
    const { pathname } = useLocation();
    const menuList = [
        {
            name: '이용권 구매하기',
            Icon: <TicketIcon />,
            link: `${pathname}/purchase`
        },
        {
            name: '시간 연장하기',
            Icon: <TimeIcon />,
            link: `${pathname}/time-extension`
        },
        {
            name: '입실하기',
            Icon: <CheckInIcon />,
            link: `${pathname}/check-in`
        },
        {
            name: '퇴실하기',
            Icon: <CheckOutIcon />,
            link: `${pathname}/check-out`
        },
        {
            name: '좌석 이동하기',
            Icon: <ChangeIcon />,
            link: `${pathname}/seat-change`
        },
    ];

    const handleMenuMoveClick = (link) => {
        history.push(link);
    }

    const renderMenuCards = () => {
        return menuList.map(menu => {
            const { name, Icon, link } = menu;
            
            return(
                <MenuCard
                    key={name}
                    onMenuMoveClick={() => handleMenuMoveClick(link)}
                >
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

    console.log('home');
    return (
        <S.HomePage>
            {renderMenuCards()}
        </S.HomePage>
    )
}


const S = {
    HomePage: styled.div`
        ${({ theme }) => {
            const { colors } = theme;

            return css`
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
        
                .menu-icon{
                    display:flex;
                    justify-content:center;
        
                    svg{
                        width: 30%;
                        height: 2.3em;
                        padding: 8% 0;
        
                        path{
                            color: ${colors.icon};
                        }
                    }
                }
        
                .menu-name{
                    font-size: 0.85rem;
                    text-align: center;
                    padding: 4% 0 4% 0;
                    font-weight: bold;
                }
            `
        }}
    `
};