json.extract! @reservation, :id, :start_date, :end_date, :listing_id, :guest_id, :total_price, :num_of_guests
json.listing @reservation.listing 
json.photos @reservation.listing.photos.map {|photo| url_for(photo)}
