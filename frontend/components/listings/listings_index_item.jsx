import React from "react";
import { Link } from "react-router-dom";
import ListingsImages from "./listings_images";

const ListingsIndexItem = (props) => {
  return(
    <div className="listings-index-item">
      <ListingsImages images={props.listing.images}/>

      
      <Link to={`/listings/${props.listing.id}`}>Link to show</Link>
      <h2>{props.listing.title}</h2>
      <h3>{props.listing.price} Doge Coins/night</h3>
      <h3>{props.listing.city}</h3>
    </div>
  )
}

export default ListingsIndexItem