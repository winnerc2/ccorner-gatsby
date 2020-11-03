import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import TradingViewCustomView from '../components/TradingViewCustomView';
import TradingViewWidget from 'react-tradingview-widget';
import Futures from '../components/futures';
import { Router } from '@reach/router'
import { Link } from 'react'
import Login from "../components/login";
import Profile from "../components/profile";
import privateRoute from '../components/privateRoute'
import PrivateRoute from "../components/privateRoute";
import { isLoggedIn } from "../services/auth";
import PositionOverview from "../components/positionOverview"
import { css } from "@emotion/core";
import Container from "../components/container";

// TODO FINISH LOGIN AND COMMIT CHANGES TO GIT

export default function AuthTest( {data} ) {
    let positions = data.ccornerDataJson.position_items
    let protectedPath = '/authTest/*'

    return (
    <div >
        <Layout pageTitle="RH Portfolio">
            <Container>
                <Futures></Futures>
                <Login path="/authTest/login"></Login>
                <Router>
                    <PrivateRoute path="/authTest/positions" component={PositionOverview} />
                </Router>
                    <div css={css`height: 360px; max-width: 90%;`}>
                    {<TradingViewWidget autosize></TradingViewWidget>}
                
                    
                    </div>
            </Container>
        </Layout>
    </div>
  )
}

export const query = graphql`
{
    ccornerDataJson {
        position_items {
            id
            avg_buy
            quantity
            tickers
            market_name
        }
    }
}
`