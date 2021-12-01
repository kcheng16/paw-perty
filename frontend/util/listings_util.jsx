export const fetchListings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/listings'
  })
)

export const fetchListing = (listingId) => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
)

export const createListing = (listing) => (
  $.ajax({
    method: 'POST',
    url: `/api/listings`,
    data: listing,
    contentType: false,
    processData: false
  })
)

export const updateListing = (listing) => {
  console.log(listing.get('id'))
  return $.ajax({
    method: 'PATCH',
    url: `/api/listings/${listing.get('id')}`,
    data: listing,
    contentType: false,
    processData: false
  })
}

export const deleteListing = (listingId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/listings/${listingId}`
  })
)