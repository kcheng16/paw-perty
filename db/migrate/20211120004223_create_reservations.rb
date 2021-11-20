class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      t.integer :num_of_guests, null: false
      t.timestamps
    end
    add_index :reservations, :guest_id
    add_index :reservations, :listing_id
  end
end
