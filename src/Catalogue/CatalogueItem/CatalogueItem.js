import React from "react";
import "./CatalogueItem.css"

const CatalogueItem = props => {
  return (
      <div className={"CatalogueItem"}>
        <img src={props.url} alt="Photo" className={"Photo"}/>
        <p className={"TitleItem"}>{props.name}</p>
        <div className={"Info"}>
          <p style={{margin: 0, color: "white"}}>{props.price}</p>
          <img src={props.bucket} alt="Bucket"/>
        </div>
      </div>
  )
}
export default CatalogueItem
