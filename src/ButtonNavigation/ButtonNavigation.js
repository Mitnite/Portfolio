import React from "react";
import "./ButtonNavigation.css"

const ButtonNavigation = props => {
  return (
      <div className={"ButtonNavigation"}>
        <button className={"Button"}>{props.text}</button>
      </div>
  )
}
export default ButtonNavigation
