import React from "react";
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import "./Header.css"

const Header = props => {
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
              {props.menu.map((name, index) => {
                return (
                    <ButtonMenu
                        key={index}
                        button={name}
  /*                      text={name.name}
                        clicked={name.clicked}*/
                        onButtonClick={props.onButtonClick}
                    />
                )
              })}
              {/*              <ButtonMenu text={"Варочные поверхности"}/>
              <ButtonMenu text={"Индукционные плиты"}/>
              <ButtonMenu text={"Духовые шкафы"}/>
              <ButtonMenu text={"Плиты"}/>
              <ButtonMenu text={"Мини-печи"}/>*/}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
