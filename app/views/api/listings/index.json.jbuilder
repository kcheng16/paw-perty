@listings.each do |listing|
  json.set! listing.id do 
      json.partial! "api/listings/listing", listing: listing
  end
end
# iterate through all the listings
#setting the KEY to <listing.id>
#setting the VALUE to the object of a single <listing>