import React from "react";
import "./Catalogue.css"
import CatalogueItem from "./CatalogueItem/CatalogueItem";
import bucket from "../img/shopping-cart.png"
import polygon from "../img/Polygon.svg"
import polygon_down from  "../img/Polygon_down.svg"
import CatalogueNews from "./CatalogueNews/CatalogueNews";

const Catalogue = props => {

  let cls = polygon;
  if (props.checked){
    cls = polygon_down
  }

  return (

      <div className={"ContainerCatalogue"}>
        <div onClick={props.onClick} className={"Button"}>
          <p>Популярное</p>
          <img src={cls}/>
        </div>

        <div className={"Catalogue"}>
          {props.array.map((a, index) => {
            return (
                props.checked && a.id === props.id ?
                    <CatalogueItem
                        key={index}
                        name={a.name}
                        price={a.price}
                        url={a.url}
                        bucket={bucket}
                    />
                    : a.show && a.id === props.id ?
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

        <div className={"Button"}>
          <p>Новости и советы</p>
          <img src={polygon} alt=""/>
        </div>
        <div className={"Catalogue"}>
          <CatalogueNews arrow={polygon}/>
        </div>
      </div>
  )
}
export default Catalogue