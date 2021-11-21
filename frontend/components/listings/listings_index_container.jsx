import React from "react";
import { connect } from "react-redux";
import { fetchListings } from "../../util/listings_util";
import ListingsIndex from "./listings_index"

const mSTP = state => ({
  listings: [
    {
      id: 1,
      title: 'Dog-out, here!',
      description: 'Dynamic parks in the area! Come relax on our cozy beds!',
      host_id: 1,
      street_address: '123 fake street',
      city: 'dogville',
      postal_code: '98765',
      country: 'USA',
      longitude: 37.798967,
      latitude: -122.403546,
      price: 20,
      num_of_beds: 1,
      cat_friendly: true
    },
    {
      id: 5,
      title: 'Dogtown in our town!',
      description: 'Let your dog explore and paint the town red!',
      host_id: 2,
      street_address: '532 state street',
      city: 'spotville',
      postal_code: '94321',
      country: 'USA',
      longitude: 37.7988248,
      latitude: -122.4019536,
      price: 10,
      num_of_beds: 3,
      cat_friendly: false,
    }
  ]
})

const mDTP = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(ListingsIndex)