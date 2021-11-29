import * as listingApiUtil from '../util/listings_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'

export const RECEIVE_LISTING_ERRORS ='RECEIVE_LISTING_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS"
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

const receiveErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
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
    .then(listing => dispatch(receiveListing(listing)),
    errors => dispatch(receiveErrors(errors)))
)

export const updateListing = (listing) => dispatch => (
  listingApiUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)),
    errors => dispatch(receiveErrors(errors)))
)

export const deleteListing = (listingId) => dispatch => (
  listingApiUtil.deleteListing(listingId)
    .then(() => dispatch(removeListing(listingId)))
)