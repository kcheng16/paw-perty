class RemoveCatFriendly < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :cat_friendly
  end
end
