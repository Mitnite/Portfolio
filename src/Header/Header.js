import React from "react";
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import "./Header.css"

function Header() {
  return (

      <div className={"ContainerHeader"}>

        <div className={"Header"}>

          <div className={"Logo"}/>

          <div>
            <div className={"Navigation"}>
              <ButtonNavigation text={"Главная"}/>
              <ButtonNavigation text={"Каталог"}/>
              <ButtonNavigation text={"О нас"}/>
              <ButtonNavigation text={"Где купить"}/>
              <ButtonNavigation text={"Контакты"}/>
              <ButtonNavigation text={"Партнерам"}/>
            </div>

            <div className={"Bucket"}/>

            <div className={"Menu"}>
              <ButtonMenu text={"Варочные поверхности"}/>
              <ButtonMenu text={"Индукционные плиты"}/>
              <ButtonMenu text={"Духовые шкафы"}/>
              <ButtonMenu text={"Плиты"}/>
              <ButtonMenu text={"Мини-печи"}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
