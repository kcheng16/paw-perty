json.partial! "/api/users/user.json.jbuilder", user: @user

json.set! 'listings' do
  @user.listings.each do |listing|
    json.set! listing.id do
      # does not contain: longitude, latitude
      json.extract! listing, :id, :title, :description, :street_address, :city, :postal_code, :country, :price, :num_of_beds, :images
    end
  end
end