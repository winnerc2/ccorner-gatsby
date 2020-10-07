import React from "react"
import Header from "../components/header";
import { Link } from "gatsby";

export default function Home() {
  return (
  <div>
    <Header headerText="Caleb's Corner"/>
    <div>
      <Link to="/">Home</Link><br/>
      <Link to="/about">about</Link>
    </div>
    <div>
      <h2>News</h2>
      <h2>bookmarks</h2>
    </div>

  </div>);
}