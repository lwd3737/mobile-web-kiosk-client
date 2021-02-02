import React from 'react';

import { ReactComponent as Ticket } from 'assets/images/home/ticket.svg';

const makeSvg = (Svg) => {
    return function Svg({ style }){
        return <Svg 
            style={style}
        />
    }
}

export const TicketSvg = makeSvg(Ticket);