import React from "react";
import "./ButtonMenu.css"

const ButtonMenu = props => {
  return (
      <div className={"ButtonMenu"}>
        <button className={"Button"}>{props.text}</button>
      </div>
  )
}
export default ButtonMenu
