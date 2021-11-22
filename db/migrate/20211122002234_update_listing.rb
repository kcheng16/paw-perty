class UpdateListing < ActiveRecord::Migration[5.2]
  def change
    remove_index :listings, :host_id
    add_index :listings, :host_id
  end
end
