import React from "react"
import { Link, navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { getUser, isLoggedIn, logout } from "../services/auth"
let linkCSS = css`
display: inline-block;
margin-right: 1rem;
font-size: 1.5rem;
border-radius: 30%;
padding: 0.5rem;
transition: background-color .6s
:hover {
  background-color: #5aa9e6;
  font-weight: bold;
  drop-shadow(.5rem .5rem 1rem black)
}`
const ListLink = props => (
  <li css={linkCSS}>
    <Link to={props.to} style={{textDecoration: 'none'}}>{props.children}</Link>
  </li>
)

export default function NavBar() {

  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{greetingMessage}</span>

      <nav>
      <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/account/">Account</ListLink>
                <ListLink to="/authTest">RH Data</ListLink>
                <a href="https://robinhood.com/" css={linkCSS}>RH</a>
                <a href="https://www.tradingview.com/chart/Z9q5ggO4/" css={linkCSS}> Charts </a>
        {` `}
        <Link to="/">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            css={linkCSS}
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/authTest/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}