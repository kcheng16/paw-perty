class RemoveReviewsIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :reviewer_id
  end
end
