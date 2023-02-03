import React from "react";
import "./ButtonNavigation.css"

const ButtonNavigation = props => {
  return (
      <div className={"ButtonNavigation"}>
        <button className={"Button"}><a href="src/Header/ButtonNavigation/ButtonNavigation#">{props.text}</a></button>
      </div>
  )
}
export default ButtonNavigation
