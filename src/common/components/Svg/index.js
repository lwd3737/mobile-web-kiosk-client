import React from 'react';

import { ReactComponent as Ticket } from 'assets/images/home/ticket.svg';
import { ReactComponent as ArrowLeft } from 'assets/images/arrow-left.svg';

const makeSvg = (Svg) => {
    return function SvgComponent({ style }){
        return <Svg 
            style={style}
        />
    }
}

export const TicketSvg = makeSvg(Ticket);
export const ArrowLeftSvg = makeSvg(ArrowLeft);