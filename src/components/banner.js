import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import { Jumbotron } from "react-bootstrap";
import NavBar from "../components/nav-bar"

export default function Banner(props){
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
);
    return(
        <div 
            css={css`
              backgroundColor: #99ffff;
              border: none;
              width: 100%;

            `}
        >
            <Link to="/" css={css`
                textShadow: none;
                backgroundImage: none;
                textDecoration: none;

            `}
            >
                <Jumbotron>
                <h1 css={css`
                    display: inline;
                    textDecoration: none;
                `}> {data.site.siteMetadata.title} </h1>
                </Jumbotron>
            </Link>
            <span css={css`float: center;`}>{props.pageTitle}</span>
        </div>
    );}