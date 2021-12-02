# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  listing_id  :integer          not null
#  reviewer_id :integer          not null
#
# Indexes
#
#  index_reviews_on_listing_id   (listing_id) UNIQUE
#  index_reviews_on_reviewer_id  (reviewer_id) UNIQUE
#
class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update
      render :show
    else
      render json: @review.errors.full_messages, status: 422
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    
    if @review.destroy
      render json: ['Successfully deleted review.']
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params.require(:review).permit(:body, :rating, :listing_id, :reviewer_id)
  end
end
