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
class Review < ApplicationRecord

  belongs_to :user,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
end
