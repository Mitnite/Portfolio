import './App.css';
import Header from "./Header/Header";
import Catalogue from "./Catalogue/Catalogue";
import {Component} from "react";
import amir from "./img/amir 2.7.png"
class App extends Component {

  state = {
    checked: false,
    cooking_surfaces: [
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: true},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: true},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: true},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: true},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: false},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: false},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: false},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir, show: false},
    ]
  }

  CheckedHandler = () => {
    this.setState({
      checked: !this.state.checked
    })
    console.log(this.state.checked)
  }

  render() {
    return (
        <div className="App">

          <header>

            <Header/>

            <div className={"HeaderFooter"}>
              <p>АМИР - производитель бытовой электроники с вниманием к каждой детали </p>
            </div>

          </header>
          <div className={"ContainerBody"}>
          <Catalogue
          array={this.state.cooking_surfaces}
          onClick={this.CheckedHandler}
          checked={this.state.checked}
          />
          </div>
        </div>
    );
  }
}

export default App;
