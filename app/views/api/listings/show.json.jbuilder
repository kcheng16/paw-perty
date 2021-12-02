json.listing do
    json.partial! "api/listings/listing", listing: @listing
end
# uses the info extracted from the partial file with designated folder path
# Sets the KEY for the specific 'listing' as the @listing from listing_controller 
    # containing the info pulled form the partial file

# json.set! 'reviews' do
#     @listing.reviews.each do |review|
#         json.set! review.id do 
#             json.extract! review, :body, :rating, :listing_id, :reviewer_id
#         end
#     end
# end

@listing.reviews.each do |review|
    json.reviews do
        json.set! review.id do 
            json.extract! review, :body, :rating, :listing_id, :reviewer_id
        end
    end
end
