import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import checkmarkLogo from "../../assets/checkmark.png";

var loading = true;
var isExpanded = false;
var positionData = [];




export default function PositionOverview(props) {
    const queryData = useStaticQuery(
        graphql`
          query {
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
    );
    if (!isExpanded) {
        // return button to expand rss feed
        return(
            <button onClick={(e) => {isExpanded = true}}><img src={checkmarkLogo} alt="checkmark-loaded"></img> Expand Positions</button>
        );
    } else {
        var positions = queryData.ccornerDataJson.position_items
        return(
            <ul>
                {positions.map(pos => {
                    return(
                    <li key={'overview'+pos['id']}>{pos['tickers']} | avg. bought {pos['avg_buy']} | amount {pos['quantity']}</li>
                    )
                })}
            </ul>
        );
    }
}


const positionOverviewCss = css`
    {
        padding: 1rem;
        width: 95%;
    }

`;