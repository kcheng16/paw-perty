class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :host_id, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.integer :postal_code, null: false
      t.string :country, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :price, null: false
      t.integer :num_of_beds, null: false
      t.boolean :cat_friendly, null: false
      t.timestamps
    end
    add_index :listings, :host_id, unique: true
    add_index :listings, :street_address, unique: true
  end
end
