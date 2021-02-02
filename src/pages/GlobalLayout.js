import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import {
    HomePage,
    PurchasePage,
    TimeExtensionPage,
    CheckInPage,
    CheckOutPage,
    SeatChangePage,
  } from 'pages';
import { appLoadingThunk } from 'modules/flags';
import { getPartnerDataThunk } from 'modules/partner';
  
export default function GlobalLayout(){
    const dispatch = useDispatch();

    const match = useRouteMatch('/:partnerId');
    const { partnerId } = match ? match.params : {};
    const basePath = `/${partnerId}`;
    
    const { name, homeThumbnails } = useSelector(state => state.partner);
    useEffect(() => {
        dispatch(getPartnerDataThunk(partnerId));
    }, []);

    return (
        <S.GlobalLayout>
            <Router>
                <header className="global-header">
                    <div className="partner-logo">
                        {name}
                    </div>
                </header>
                <main className="contents">
                    <Switch>
                        <Route exact path={basePath}>
                            <HomePage />
                        </Route>
                        <Route exact path={`${basePath}/purchase`}>
                            <PurchasePage />
                        </Route>
                        <Route exact path={`${basePath}/time-extension`}>
                            <TimeExtensionPage />
                        </Route>
                        <Route exact path={`${basePath}/check-in`}>
                            <CheckInPage />
                        </Route>
                        <Route exact path={`${basePath}/check-out`}>
                            <CheckOutPage />
                        </Route>
                        <Route exact path={`${basePath}/seat-change`}>
                            <SeatChangePage />
                        </Route>
                        <Route render={() => {
                            return `404 Not Page`
                        }} />
                    </Switch>
                </main>
                <footer className="global-footer">

                </footer>
            </Router>
        </S.GlobalLayout>
    )
}



const S = {
    GlobalLayout: styled.div`
        .global-header{
            display: flex;
            justify-content: space-between;
            padding: 5% 10%;

            .partner-logo{
                font-size: 1.2rem;
            }
        }

        .contents{
            padding: 2% 10% 0 10%;
        }

        .global-footer{

        }
    `
};