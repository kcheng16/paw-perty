import React from "react";
import { Link } from "react-router-dom";
import ListingsImages from "./listings_images";

const ListingsIndexItem = (props) => {
  return(
    <div className="listings-index-item">
      <ListingsImages listing={props.listing} images={props.listing.images} id={props.listing.id}/>
      
      <Link to={`/listings/${props.listing.id}`} className='listings-index-link'>
        <div className="city">{props.listing.city}</div>
        <div className="price">{props.listing.price} Doge Coins/night</div>
        <div className="title">{props.listing.title}</div>
      </Link>
    </div>
  )
}

export default ListingsIndexItem