# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
# Listing.destroy_all

user1 = User.create(username: 'demo', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!')
user2 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')
user3 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')
user4 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')
user5 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')

listing1 = Listing.create(
  id: 1,
  title: 'Dog-out, here!',
  description: 'Dynamic parks in the area! Come relax on our cozy beds!',
  host_id: 1,
  street_address: '123 fake street', #need to change to real address
  city: 'San Francisco',
  postal_code: '94111',
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  cat_friendly: true
)

listing2 = Listing.create(
  id: 2,
  title: 'Dogtown in our town!',
  description: 'Let your dog explore and paint the town red!',
  host_id: 2,
  street_address: '532 state street',#need to change to real address
  city: 'San Francisco',
  postal_code: '94111',
  country: 'USA',
  longitude: 37.7988248,
  latitude: -122.4019536,
  price: 10,
  num_of_beds: 3,
  cat_friendly: false,
)