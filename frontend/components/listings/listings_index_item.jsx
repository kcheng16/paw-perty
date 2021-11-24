import React from "react";
import { Link } from "react-router-dom";
import ListingsImages from "./listings_images";

const ListingsIndexItem = (props) => {
  return(
    <div className="listings-index-item">
      <ListingsImages images={props.listing.images}/>

      
      <Link to={`/listings/${props.listing.id}`} className='listings-index-link'>
        <div className="title">{props.listing.title}</div>
        <div className="price">{props.listing.price} Doge Coins/night</div>
        <div className="city">{props.listing.city}</div>
      </Link>
    </div>
  )
}

export default ListingsIndexItem