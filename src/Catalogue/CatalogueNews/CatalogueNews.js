import React from "react";
import "./CatalogueNews.css"
import CatalogueNewsItem from "./CatalogueNewsItem/CatalogueNewsItem";
import amir from "../../img/amir-23.png"

const CatalogueNews = props => {

  return (
      <div className={"CatalogueNews"}>
        <CatalogueNewsItem
          title={"Серия “Вдохновляющее ретро”"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "}
          url={amir}
          arrow={props.arrow}
        />
        <CatalogueNewsItem
            title={"Серия “Вдохновляющее ретро”"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "}
            url={amir}
            arrow={props.arrow}
        />
      </div>
  )
}
export default CatalogueNews