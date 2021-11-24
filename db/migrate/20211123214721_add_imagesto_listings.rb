class AddImagestoListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :images, :string, array: true, default: []
  end
end
