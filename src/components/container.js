import React from "react"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
  return <div className="container">{children}</div>
}