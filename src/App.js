import './App.css';
import Header from "./Header/Header";
import Catalogue from "./Catalogue/Catalogue";
import {Component} from "react";
import amir from "./img/amir 2.7.png"

class App extends Component {

  state = {
    checked: false,
    id: "cooking_surfaces",

    catalogue: [
      {name: "Варочная поверхность PG6040 W RSTB", show: true, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: true, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: true, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: true, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: false, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: false, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: false, id: "cooking_surfaces", price: 99999, url: amir},
      {name: "Варочная поверхность PG6040 W RSTB", show: false, id: "cooking_surfaces", price: 99999, url: amir},

      {name: "Индукционные плиты ", show: true, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: true, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: true, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: true, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: false, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: false, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: false, id: "induction", price: 10000, url: amir},
      {name: "Индукционные плиты", show: false, id: "induction", price: 10000, url: amir},

      {name: "Духовые шкафы", show: true, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: true, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: true, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: true, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: false, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: false, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: false, id: "ovens", price: 12500, url: amir},
      {name: "Духовые шкафы", show: false, id: "ovens", price: 12500, url: amir},

      {name: "Плиты", show: true, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: true, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: true, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: true, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: false, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: false, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: false, id: "plates", price: 15000, url: amir},
      {name: "Плиты", show: false, id: "plates", price: 15000, url: amir},

      {name: "Мини-печи", show: true, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: true, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: true, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: true, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: false, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: false, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: false, id: "mini-ovens", price: 17500, url: amir},
      {name: "Мини-печи", show: false, id: "mini-ovens", price: 17500, url: amir},
    ],

    buttons: [
      {clicked: true, name: "Варочные поверхности", id: "cooking_surfaces"},
      {clicked: false, name: "Индукционные плиты", id: "induction"},
      {clicked: false, name: "Духовые шкафы", id: "ovens"},
      {clicked: false, name: "Плиты", id: "plates"},
      {clicked: false, name: "Мини-печи", id: "mini-ovens"}
    ]
  }

  ClickedHandler = (ButtonId) => {
    const buttons = [...this.state.buttons]
    buttons.forEach((name, index) => {
      if (name.id === ButtonId) {
        name.clicked = !name.clicked
        this.setState({id: ButtonId})
      } else if (name.clicked) {
        name.clicked = !name.clicked
      }
    })
    this.setState({
      buttons
    })
  }

  CheckedHandler = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {

    return (
        <div className="App">

          <header>

            <Header
                menu={this.state.buttons}
                onButtonClick={this.ClickedHandler}
            />

            <div className={"HeaderFooter"}>
              <p>АМИР - производитель бытовой электроники с вниманием к каждой детали </p>
            </div>

          </header>
          <div className={"ContainerBody"}>
            <Catalogue
                id={this.state.id}
                array={this.state.catalogue}
                onClick={this.CheckedHandler}
                checked={this.state.checked}
            />
          </div>
        </div>
    );
  }
}

export default App;
