import * as reviewApiUtil from "../util/reviews_util"

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

//================================================
export const receiveReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

//================================================

export const requestReviews = () => dispatch => (
  reviewApiUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const createReview = (review) => dispatch => (
  reviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
  reviewApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
  reviewApiUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)