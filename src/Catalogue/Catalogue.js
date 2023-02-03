import React, {Component} from "react";
import "./Catalogue.css"
import CatalogueItem from "./CatalogueItem/CatalogueItem";
import bucket from "../img/shopping-cart.png"
import amir from "../img/amir 2.7.png"

export default class Catalogue extends Component {

  state = {
    cooking_surfaces: [
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir},
      {id: 0, name: "Варочная поверхность PG6040 W RSTB", price: 99999, url: amir},
    ]
  }


  render() {
    return (
        <div className={"ContainerCatalogue"}>
          <div className={"Catalogue"}>
            {this.state.cooking_surfaces.map((a, index) => {
              return (
                  <CatalogueItem
                      key={index}
                      name={a.name}
                      price={a.price}
                      url={a.url}
                      bucket={bucket}
                  />
              )
            })}
          </div>
        </div>
    )
  }
}