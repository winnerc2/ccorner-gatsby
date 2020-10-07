import React from "react"
import Header from "../components/header"
import { Link } from "gatsby";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Header headerText="About me" />
        <Link to="/">Home</Link>
      <p>Hello stranger, turn back now.</p>
    </div>
  )
}