import * as listingApiUtil from '../util/listings_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'
//=================================================

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings
})

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
})

export const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId
})
//=================================================

export const requestListings = () => dispatch => (
  listingApiUtil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
)

export const requestListing = (listingId) => dispatch => (
  listingApiUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
)

export const createListing = (listing) => dispatch => (
  listingApiUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)

export const updateListing = (listing) => dispatch => (
  listingApiUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)

export const deleteListing = (listingId) => dispatch => (
  listingApiUtil.deleteListing(listingId)
    .then(() => dispatch(removeListing(listingId)))
)