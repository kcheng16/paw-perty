# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Listings.destroy_all

user1 = User.create(username: 'demo', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!')
user2 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')
user3 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')
user4 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')
user5 = User.create(username: Faker::Movies::HarryPotter.character, password: 'password')

listing1 = Listing.create(
  id: 1,
  title: 'Dog-out here!',
  description: 'Dynamic parks in the area! Come relax on our cozy beds!',
  host_id: 1,
  street_address: '123 fake street',
  city: 'dogville',
  postal_code: '98765',
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  cat_friendly: true,
  created_at: Tue, 23 Apr 2021 00:03:21 +0430,
  updated_at: Tue, 25 Apr 2021 00:10:05 +3001
)

listing2 = Listing.create(
  id: 2,
  title: 'Dogtown in our town!',
  description: 'Let your dog explore and paint the town red!',
  host_id: 2,
  street_address: '532 state street',
  city: 'spotville',
  postal_code: '94321',
  country: 'USA',
  longitude: 37.7988248,
  latitude: -122.4019536,
  price: 10,
  num_of_beds: 3,
  cat_friendly: false,
  created_at: Wed, 2 Apr 2020 10:20:02 +1050,
  updated_at: Fri, 15 Mar 2021 08:40:50 +4300
)