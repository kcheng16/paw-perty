json.extract! listing, :id, :host_id, :title, :description, :street_address, :city, :postal_code, :country, :longitude, :latitude, :price, :num_of_beds, :images, :host_name, :average_rating
# json.extract! pulls all the columns listed from the table 'listing'

json.photos listing.photos.map {|photo| url_for(photo)}