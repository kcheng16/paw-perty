class RemoveReviewsListingUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :listing_id
  end
end
