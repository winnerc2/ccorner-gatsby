import { useStaticQuery, Link, graphql } from "gatsby";
import React from "react"
import { css } from "@emotion/core";



export default function Futures(props){
    const data = useStaticQuery(
        graphql`
        {
          allCnnFuturesJson {
            edges {
              node {
                id
                symbol
                pointChange
                percentChange
                updateTime
              }
            }
          }
        }
        `
    );

    

    return(
        <div css={css`display: block; height: 100%;`}>
            <h3>Futures</h3>
            {data.allCnnFuturesJson.edges.map(ele => {
              return(<p className="futures" key={ele.node.id}>{ele.node.symbol}    {ele.node.pointChange} {ele.node.percentChange} {ele.node.updateTime} </p>);
            })}
             
        </div>
    );

}