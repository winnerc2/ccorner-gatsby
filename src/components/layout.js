import React from "react"
import Banner from "./banner"
import Footer from "./footer"
import { css } from "@emotion/core"

const cssData = css`
    margin: 3rem auto;
    max-width: 60%;
    padding: 0 1rem;
    background-color: red;
`


export default function Layout({ children }) {
  return (
    <div 
        css={cssData}
    >
      <Banner/>

        {console.log(children)}
        {children}

      <Footer/>
    </div>
  )
}