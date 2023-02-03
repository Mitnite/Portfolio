import React from "react";
import "./Catalogue.css"
import CatalogueItem from "./CatalogueItem/CatalogueItem";
import bucket from "../img/shopping-cart.png"
import polygon from "../img/Polygon.svg"

const Catalogue = props => {
  return (

      <div className={"ContainerCatalogue"}>
        <div onClick={props.onClick} className={"Button"}>
          <p>Популярное</p>
          <img src={polygon} alt=""/>
        </div>

        <div className={"Catalogue"}>
          {props.array.map((a, index) => {
            return (
                props.checked ?
                <CatalogueItem
                    key={index}
                    name={a.name}
                    price={a.price}
                    url={a.url}
                    bucket={bucket}
                />
                    : a.show ?
                        <CatalogueItem
                            key={index}
                            name={a.name}
                            price={a.price}
                            url={a.url}
                            bucket={bucket}
                        />
                    : null
            )
          })}
        </div>
      </div>
  )
}
export default Catalogue