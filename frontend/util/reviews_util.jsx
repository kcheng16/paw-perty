export const fetchReviews = () => (
  $.ajax({
    method: "GET",
    url: '/api/reviews'
  })
)
export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
)

export const updateReview = (review) => (
  console.log("REVIEW_UTIL:",review),
  $.ajax({
    method: 'PATCH',
    // url: `/api/reviews/${review.get('id')}`,
    url: `/api/reviews/${review.id}`,
    data: {review}
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
)