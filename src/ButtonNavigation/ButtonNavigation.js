import React from "react";
import "./ButtonNavigation.css"

const ButtonNavigation = props => {
  return (
      <div className={"ButtonNavigation"}>
        <button className={"Button"}><a href="#">{props.text}</a></button>
      </div>
  )
}
export default ButtonNavigation
