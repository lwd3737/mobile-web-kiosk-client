import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Redirect,
} from "react-router-dom";

import {
  HomePage,
  Purchase,
  TimeExtension,
  CheckIn,
  CheckOut,
  SeatChange,
} from "pages";
import { appLoadingThunk } from "modules/flags";
import { GET_PARTNER_DATA_FAILED, getPartnerDataThunk } from "modules/partner";
import { ReactComponent as HomeIcon } from "assets/images/home.svg";
import { ReactComponent as UserIcon } from "assets/images/user.svg";

export default function GlobalLayout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const basePath = `/kiosk/:partnerId`;
  const { url, params } = useRouteMatch(basePath) || {};
  const { partnerId } = params || {};
  const { serviceName } = useSelector((state) => state.partner);
  const error = useSelector((state) => state.flags.error);

  useEffect(() => {
    dispatch(getPartnerDataThunk(partnerId));
  }, []);

  const handleHomeMoveClick = () => {
    history.push(url);
  };

  if (error.actions.find((action) => action.type === GET_PARTNER_DATA_FAILED)) {
    return <Redirect to="/error/404" />;
  }

  return (
    <S.GlobalLayout>
      <header className="global-header">
        <div className="partner-logo">{serviceName}</div>
      </header>
      <Switch>
        <main className="contents">
          <Route exact path={basePath}>
            <HomePage />
          </Route>
          <Route path={`${basePath}/purchase`}>
            <Purchase />
          </Route>
          <Route path={`${basePath}/time-extension`}>
            <TimeExtension />
          </Route>
          <Route path={`${basePath}/check-in`}>
            <CheckIn />
          </Route>
          <Route path={`${basePath}/check-out`}>
            <CheckOut />
          </Route>
          <Route path={`${basePath}/seat-change`}>
            <SeatChange />
          </Route>
        </main>
        <Route
          path="/error/404"
          render={() => {
            return `404 Not Page`;
          }}
        />
      </Switch>

      <footer className="global-footer">
        <div className="footer-inner">
          <div className="footer-menu" onClick={handleHomeMoveClick}>
            <HomeIcon />
          </div>
          <div className="footer-menu">
            <UserIcon />
          </div>
        </div>
      </footer>
    </S.GlobalLayout>
  );
}

const S = {
  GlobalLayout: styled.div`
    ${({ theme }) => {
      const { colors } = theme;

      return css`
        .global-header {
          display: flex;
          justify-content: space-between;
          padding: 5% 10%;

          .partner-logo {
            font-size: 0.8rem;
          }
        }

        .contents {
          padding: 5% 10% 0 10%;
        }

        .global-footer {
          position: fixed;
          bottom: 0;
          width: 100vw;

          .footer-inner {
            display: flex;
            justify-content: space-between;
            padding: 3% 10%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);

            .footer-menu {
              width: 8vw;
              height: 8vw;

              svg {
                path {
                  color: ${colors.icon};
                }
              }
            }
          }
        }
      `;
    }}
  `,
};
