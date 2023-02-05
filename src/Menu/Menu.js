import React from "react";
import "./Menu.css"
import MenuItem from "./MenuItem/MenuItem";
import menu_1 from "../img/Menu/menu_1.png"
import menu_2 from "../img/Menu/menu_2.png"
import menu_3 from "../img/Menu/menu_3.png"
import menu_4 from "../img/Menu/menu_4.png"

const Menu = props => {
  return (
      <div className={"Menu"}>
          <MenuItem text={"Меню"} url={menu_1} />
          <MenuItem text={"Каталог"} url={menu_2} />
          <MenuItem text={"Ваш AMIR"} url={menu_3} />
          <MenuItem text={"Контакты"} url={menu_4} />
      </div>
  )
}
export default Menu
