# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.destroy_all
# Listing.destroy_all

user1 = User.create(username: 'demo', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!')


listing1 = Listing.create([
  {
  id: 1,
  title: 'Dog-out, here!',
  description: 'Dynamic parks in the area! Come relax on our cozy beds!',
  host_id: 1,
  street_address: '1 fake street', #need to change to real address
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: ["https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/amy-humphries-AllEP6K_TAg-unsplash_ovptsl.jpg", "https://res.cloudinary.com/de8carnhu/image/upload/v1638154900/cdc-SAwxJ8PHY3Q-unsplash_w1aqqi.jpg", "https://res.cloudinary.com/de8carnhu/image/upload/v1638155032/beatrice-selly-d5YEmZknHIs-unsplash_rb5mp8.jpg", "https://res.cloudinary.com/de8carnhu/image/upload/v1638155409/mathew-coulton-zxqaAkkayP8-unsplash_npk6ow.jpg", "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/francesca-tosolini-tHkJAMcO3QE-unsplash_rbjwck.jpg", "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/aaron-huber-G7sE2S4Lab4-unsplash_jkrdps.jpg" ]
},
{
  id: 2,
  title: '#2!',
  description: 'Dynamic parks in the area! Come relax on our cozy beds!',
  host_id: 2,
  street_address: '2 fake street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: ["https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/daniil-silantev-nBuiLbz_j4A-unsplash_aotovo.jpg", "https://res.cloudinary.com/de8carnhu/image/upload/v1637704692/magdalena-smolnicka-h0D5AycJxxc-unsplash_hmedpf.jpg"]
}]
)
