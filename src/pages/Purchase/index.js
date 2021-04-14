import React, { useEffect } from 'react'
import styled from 'styled-components';
import { 
    Switch, 
    Route,
    useRouteMatch,
    useHistory,
    useParams
} from 'react-router-dom';

import RoomSelectionPage from './RoomSelectionPage';
import SeatSelectionPage from './SeatSelectionPage';
import UseTicketSelectionPage from './UseTicketSelectionPage';
import PaymentPage from './PaymentPage';
import PaymentCompletionPage from './PaymentCompletionPage';

function PurchasePage(){
    const basePath = '/kiosk/:partnerId/purchase'
    const history = useHistory();
    const { path, url } = useRouteMatch(basePath);
    
    useEffect(() => {
        if(path === basePath){
            history.replace(`${url}/rooms`);
        }
    }, [path]);

    return (
        <S.PurchasePage>
            <Switch>
                <Route exact 
                    path={`${basePath}/rooms`}
                >
                    <RoomSelectionPage />
                </Route>
                <Route exact 
                    path={`${basePath}/rooms/:roomId/seats`}
                >
                    <SeatSelectionPage />
                </Route>
                <Route exact 
                    path={`${basePath}/rooms/:roomId/seat/:seatId/useticket`}
                >
                    <UseTicketSelectionPage />
                </Route>
                <Route exact 
                    path={`${basePath}/rooms/:roomId/seat/:seatId/useticket/:useticketId/payment`}
                >
                    <PaymentPage />
                </Route>
                <Route exact 
                    path={`${basePath}/payment/completion`}
                >
                    <PaymentCompletionPage />
                </Route>
            </Switch>
        </S.PurchasePage>
    )
}

export default PurchasePage;

const S = {
    PurchasePage: styled.div`
    `
};