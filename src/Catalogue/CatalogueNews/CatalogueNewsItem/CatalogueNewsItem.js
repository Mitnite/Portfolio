import React from "react";
import "./CatalogueNewsItem.css"

const CatalogueNewsItem = props => {
  return (
      <div className={"CatalogueNewsItem"}>
        <div className={"Text"}>
          <h3 className={"Title"}>{props.title}</h3>
          <p className={"Description"}>{props.text}</p>
          <img src={props.arrow} alt="Polygon"/>
        </div>
        <img src={props.url} alt="News"/>
      </div>
  )
}
export default CatalogueNewsItem
