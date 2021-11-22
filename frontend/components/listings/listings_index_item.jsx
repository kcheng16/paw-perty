import React from "react";
import { Link } from "react-router-dom";

const ListingsIndexItem = (props) => {
  return(
  <div>
    <Link to={`/listings/${props.listing.id}`}>link</Link>
      <h2>{props.listing.title}</h2>
      <h3>{props.listing.price} Doge Coins/night</h3>
      <h3>{props.listing.city}</h3>
  </div>
  )
}

export default ListingsIndexItem