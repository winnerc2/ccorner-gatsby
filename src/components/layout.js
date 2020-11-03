import React from "react"
import Banner from "./banner"
import Footer from "./footer"
import { css } from "@emotion/core"
import Navbar from "./nav-bar"

const cssData = css`
    margin: 0 auto;
    max-width: 80%;
    padding: 0 1em;
    background-color: #7fc8f8;
`


export default function Layout({ children }, props) {
  return (
    <div 
        css={cssData}
    >
      <Navbar></Navbar>
      <Banner pageTitle={props.pageTitle}/>
        {children}
      <Footer/>
    </div>
  )
}