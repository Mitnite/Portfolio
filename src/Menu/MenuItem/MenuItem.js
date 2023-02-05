import React from "react";
import "./MenuItem.css"

const MenuItem = props => {
  return (
      <div className={"MenuItem"} style={{backgroundImage: `url(${props.url})`}}>
        <div className={"Title"}>{props.text}</div>
      </div>
  )
}
export default MenuItem
