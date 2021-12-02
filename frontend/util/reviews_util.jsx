export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data: review,
  })
)

export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.get('id')}`,
    data: review,
  })
}

export const deleteReview = (reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
)