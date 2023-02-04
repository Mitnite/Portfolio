import React from "react";
import "./ButtonMenu.css"

const ButtonMenu = props => {
  const cls= ["Button"]
  if (props.button.clicked){
    cls.push("Clicked")
  }
  return (
      <div className={"ButtonMenu"}>
        <button className={cls.join(' ')} onClick={() => props.onButtonClick(props.button.id)}>{props.button.name}</button>
      </div>
  )
}
export default ButtonMenu
