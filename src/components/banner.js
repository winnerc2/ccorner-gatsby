import React from "react"
import { Link } from "gatsby";

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Link to={props.to} style={{textDecoration: 'none'}}>{props.children}</Link>
    </li>
  )

export default function Banner(props){return(
<div style={{backgroundColor: '#99ffff', border: 'black solid 2px', padding: '1rem 0.5rem'}}>
    <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none', textDecoration: 'none' }}>
        <h3 style={{ display: 'inline' }}>Caleb's Corner</h3>
    </Link>
    <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
    </ul>
</div>
);}