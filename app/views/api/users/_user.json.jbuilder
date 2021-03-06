json.extract! user, :username, :id, :bio, :email

json.set! 'listings' do
  user.listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :title, :description, :street_address, :city, :postal_code, :country, :price, :num_of_beds, :images, :longitude, :latitude
      json.photos listing.photos.map {|photo| url_for(photo)}
    end
  end
end

json.set! 'reservations' do
  user.reservations.each do |reservation|
    json.set! reservation.id do
      json.extract! reservation, :id, :start_date, :end_date, :listing_id, :guest_id, :total_price, :num_of_guests
      json.listing reservation.listing
      json.photos reservation.listing.photos.map {|photo| url_for(photo)} 
    end
  end
end


