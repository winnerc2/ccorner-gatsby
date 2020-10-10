import React from "react"
import Banner from "./banner"
import Footer from "./footer"


export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Banner/>

          {console.log(children)}
        {children}

      <Footer/>
    </div>
  )
}