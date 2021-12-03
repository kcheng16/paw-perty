# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Listing.destroy_all

user1 = User.create!(username: 'demo', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!')


listing1 = Listing.create!([
  {
  title: 'Dog-out, here!',
  description: "I've cared for dogs for a long time! I've fostered many dogs throughout high school and as an dult. I currently have 1 dog that is friendly with everybody. I am originally from the Bay Area. My parents are also home all day to care for your pet! \n
  I've worked with caring for dogs for about 5 years and love every single one of them. You can trust in me and my family to provide your dog a lot of love and affection while they're in our care. Your pup will also get to play with our dog in the backyard!
  \n
  We take frequent walks (3 times a day), and occasionally visit parks. 
  \n
  Please let us know if your pup has any special needs. Such as: medication, dietary restrictions, allergies. We would also like to know how much your pup eats and what times you prefer them to be fed. We provide healthy organic food if you're unable to provide your own. Please let us know if they're house trained or not. We can also accomodate for any interest quirks your pup may have, just let us know! Thanks",
  host_id: User.first.id,
  street_address: '1 fake street', #need to change to real address
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/amy-humphries-AllEP6K_TAg-unsplash_ovptsl.jpg", 
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638154900/cdc-SAwxJ8PHY3Q-unsplash_w1aqqi.jpg", 
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638155032/beatrice-selly-d5YEmZknHIs-unsplash_rb5mp8.jpg", 
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638155409/mathew-coulton-zxqaAkkayP8-unsplash_npk6ow.jpg", 
          "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/francesca-tosolini-tHkJAMcO3QE-unsplash_rbjwck.jpg", 
          "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/aaron-huber-G7sE2S4Lab4-unsplash_jkrdps.jpg"
        ]
},
{
  title: 'Flex those paws!',
  description: 'Dynamic parks in the area! Come relax on our cozy beds!
  I am a full time stay home mom and have more than 20 years experience of caring and training dogs.

I only take one dog at a time for boarding or daycare because I want to make sure your dog will have my full attention.

Our house is always kept clean and we also have a beautiful backyard where the dogs can play together. Moreover, I will also take your dogs for at least two 15 minutes walks during their stay with us. Your dog will be stimulated mentally and physically and come home happy.

Feel free to schedule a meet and greet with us, to see if your dog is comfortable with the environment. We will definitely treat your dog like a family ',
  host_id: User.first.id,
  street_address: '2 fake street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638507625/house-2a/josue-michel-x8y0mJCVs6g-unsplash_iutzov.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638507541/house-2a/shaun-montero-ZxDX8D9HHNM-unsplash_hqa4ao.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638507726/house-2a/mathew-coulton-ZnHEa8mHOxw-unsplash_xjftj5.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638507541/house-2a/oskar-kadaksoo-1Vg-PKmvbEY-unsplash_rxs1wk.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638508404/house-2a/david-saw-dawg-guarino-xy0cdItRhDU-unsplash_iwvwjt.jpg"
          ]
},
{
  title: "Your dog can sit with us!",
  description: "Hello and thanks for reading my profile.

  My name is Joe and I must confess I'm a dog lover! I used to breed, train and show Doberman Pinschers. I've owned and raised a Miniature Pinscher who lived to be almost 18 years.
  I host your family member at my house!
  
  Thank you!
  
  Drop off/Pickups - By Appointment Only
  * Between 8 am-7 pm is best 
  
  Meet and Greets:
  * Held at my house in San Leandro Hills .
  
  At drop off:
  Please bring:
  * Dogs kibble for the length of the stay
  * Leash
  * Special care instructions
  * Medication
  * Please be current on vaccinations
  
  Thanks and see you soon!
  
  I work from home and spend a lot of time at home when not working. This means I’m able to spend a lot of time with my new pup-pal!
  
  I have a fenced-in yard and board dogs Simultaneously from different households.
  
  If you have a dog that is not that socialized just let me know as I am often able to also board and care for them as well.",
  host_id: User.first.id,
  street_address: '345 Main street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 30,
  num_of_beds: 2,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638499584/house3/devn-JmmXKlJ8MKQ-unsplash_d3udjg.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493297/house3/bonnie-kittle-sYVncFdbAIA-unsplash_ju248w.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493429/house3/res-console.cloudinary_wxc1ai.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493232/house3/martin-edholm-JrMj65DGH00-unsplash_rq0fr1.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493232/house3/nathan-fertig-FBXuXp57eM0-unsplash_sqlygv.jpg"
        ]
},
{
  title: "A second home for your pupper",
  description: "Your pup will have plenty of company! We live in a spacious house that's usually filled with the pitter patter of puppy paws! What you can expect from your dog's vacation with us is a lot of playtime and belly rubs, plus walks to the nearby park and trails and sunbathing on the deck. We want your furry friend to know that they are on vacation!

  Special needs and senior pets are welcome. We love animals and have been taking care of them since we were children. You won't have to worry about your baby because we come with a lot of experience.
  
  If we are showing as booked on the calendar, check with us by message! (We may only be sitting for a few hours or for daycare.)
  
  Baths and additional walks can be arranged; cats and other animals are welcome too! We look forward to meeting you and your little (or big) ones!
  
  Our entire family loves dogs and cats so your pup or cat will will have plenty of company between the humans and other furry friends!
  
  Our backyard is approximately 7,000 square feet of fun and is fully enclosed by 6 and 8 foot fencing. Even Nitro, the 3 pound Chi couldn’t find an escape route.
  
  If your pup can scale a 6 or 8 foot fence, please do let us know so that we can keep an extra close eye out.",
  host_id: User.first.id,
  street_address: '6222 Paradise street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 18,
  num_of_beds: 3,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638497089/house4/edge2edge-media-C2Yxp5iINn4-unsplash_wyhy07.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493383/house4/ruby-schmank-u8m78vjugM8-unsplash_i7er1a.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493382/house4/sophie-elvis-F7h_E37IWn4-unsplash_k6ef95.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493382/house4/sonnie-hiles-iANAdaNu7mg-unsplash_byweb6.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493381/house4/rob-wingate-Fd9tUmRBJzk-unsplash_ds6z7p.jpg"
        ]
},
{
  title: "Fun times only! Come have some fun with us!",
  description: "My family and I all share a love for dogs. Not long ago, we had 2 dogs, 1 dobermans, and a german shepherd, husky mix. I am also a stay at home mother, meaning there will always be someone at home with your pup. Walks are also an every morning routine, so your fur baby will always be guaranteed a morning adventure! Our house offers a well fenced yard as well for your pet to roam free safely. Our goal is for you to enjoy your vacation, rest assured your precious pup is safe and comfortable in our care.

  meet and greet: hosted at my house
  
  Drop-off/pickup:
  -flexible times
  
  boarding drop off:
  please include:
  -dog food required for the amount of stay
  -leash
  -any medication
  -any other instructions, toys, etc",
  host_id: User.first.id,
  street_address: '9437 Lake street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 55,
  num_of_beds: 2,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493571/house5/katja-rooke-11HgK_P8uW0-unsplash_xq31n0.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493549/house5/jonathan-formento-2Osf8c0BpsQ-unsplash_hadzt0.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493537/house5/collov-home-design-nUgtNEkuqy8-unsplash_igpu7j.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493537/house5/sidekix-media-wRzBarqn3hs-unsplash_pp2pqt.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638493537/house5/obi-onyeador-MMHcFUKkBD4-unsplash_jzrhto.jpg"
        ]
},
{
  title: "Lots of pets, snacks, and zoomies! Work hard play hard!",
  description: "I’ve taken care of dogs for neighbors, friends and family have relied on me to walk, feed them. I am here to service your furry baby!

  My schedule is flexible to fit for your need! You can always reach me anytime to drop off and pick up your furry pets. I am here to service your furry baby!
  
  I have huge fenced in back yard for your furry pet to run around and play. I am here to service your furry baby and take good care of your baby!",
  host_id: User.first.id,
  street_address: '7243 Hill Valley street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638497266/house6/tamara-bellis-baKsNGGKZ3w-unsplash_jhergo.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638497267/house6/darren-richardson-nhEHcQx7g3w-unsplash_y7zq2c.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638497221/house6/dollar-gill-PWZRdZuiQEA-unsplash_1_amx3dm.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638497220/house6/undine-tackmann-Y--nH4n-AhA-unsplash_cssgvr.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638497220/house6/vlad-tchompalov-LUEtQLqza7k-unsplash_rvi2wi.jpg"
        ]
},
{
  title: "Stretch those paws out, grab a seat, and fall asleep",
  description: "We are very active and enjoy going for long walks and finding new things to sniff. 
  The house is open with plenty of space to lounge on. The house is fully carpeted except for the bathroom and kitchen and pretty puppy proof with a close of a few bedroom doors and a blanket on the couch. The pups have full access to an outdoor space where squirrel activity can be found in the mornings. I have had dogs since I was 7 years old and I volunteered at shelter for many years. I grew up with animals of all kinds on a farm in Vermont and its just my way of life. Furry friends are the best! I will cherish yours as much as I cherish mine. 
  Please note that I prefer only weekend stay-cations for your pup but can do mid week if we arrange with enough advance notice.",
  host_id: User.first.id,
  street_address: '18159 Alley street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494391/house7/andrew-mead-r_X4YHAlBPo-unsplash_oisidc.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494391/house7/wolfgang-hasselmann-SUu4Oh0YrIY-unsplash_qftpxu.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494391/house7/toa-heftiba-FV3GConVSss-unsplash_r6rtwn.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494391/house7/ralph-ravi-kayden-Rdh-OCcBqC0-unsplash_pgneqs.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494392/house7/beatrice-selly-n9gMACRzkDw-unsplash_utvt29.jpg"
        ]
},
{
  title: "Meet new friends, leave a family member.",
  description: "Our friends always admire our well behaved dogs and we enjoy helping others train their pups. We have a large yard for them to play. Our dogs are super welcoming and love welcoming new dogs. I work from home and am able to watch over them all day!

  In between meetings or tasks, I love running to the pups for a quick break! Play with them and run around a bit. I specially love playing hide and seek. If I can ever run away fast enough!
  
  We have a fenced front and backyard with plenty of space to run, play and train! When in the home the pups have multiple bowls to drink clean water and lounge around.",
  host_id: User.first.id,
  street_address: '8393 Summer street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494484/house8/bruno-emmanuelle-azsk_6IMT3I-unsplash_bdeqf4.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494484/house8/jon-grogan-yfTFo4iaADI-unsplash_ktr6ln.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494484/house8/dan-gold-KgoYGXDEQvs-unsplash_juvylw.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494484/house8/andrea-davis-pK85wI_ZjuY-unsplash_prhfdk.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494485/house8/beatrice-selly-qQ9709ns6ig-unsplash_va4nzi.jpg"
        ]
},
{
  title: "Fur friends and pals",
  description: "I have been talking care of other peoples pets for 27 plus years. I primarily worked as a preschool teacher, much of that time was part time so I was able to have the other time to care for the Dogs under my care.

  Working with children has taught me to have a lot of patience and to try to see the world through their eyes. I believe that these skills transfer to the caring for dogs and caring for dogs has taught me lots about young children.
  
  I feel a strong connection to animals, especially to dogs and in doing so they feel connected to me. I have cared for all ages of dogs and various sizes. I have given meds when needed.
  
  My last dog, Kris, was part Newfound and part Australian Shepard who weighed about 75 lbs and loved, loved the water -- I still miss him. I miss his special personality; he was a fun doggie. I loved seeing him run free where it was okay to do so, and he had a smile on his face up to the end.
  
  I like meeting new doggies and getting to know them each as individuals and their likes and dislikes, always an adventure and exciting.
  
  I am retired and am home all day. I can be with the doggies I care for almost all the time except for going to the store.
  
  I have a small fenced backyard area and a park near by were I can walk the doggies, it is not a dog park just a grassy area for the dogs to walk on with a lease around the area. It has a playground in the middle from where I walk.",
  host_id: User.first.id,
  street_address: '88373 Winter street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494593/house9/hudson-hintze-CXQgs12wFHc-unsplash_i7acdu.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494594/house9/matthew-HBjsSlRHXnY-unsplash_ne7sbg.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494593/house9/mike-von-y_ibWWpOiL0-unsplash_lyxwlm.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494592/house9/clay-banks-OcxgtPN0FmM-unsplash_qfqhsm.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494593/house9/autri-taheri-TTGSZSElkOI-unsplash_pxsdjr.jpg"
        ]
},
{
  title: "No ragrets! You'll love it here, and so will your doggo!",
  description: "We are dog lovers and had been taking care of them for over 15 years. We have a Shih Tzu ourselves and often take care of my son’s French Bull and Siberian Husky, as well as other family dogs. So don’t worry we have a lot of experience. We live in a single home in a community that has two big parks with huge grass areas for your pups to run around and play. We’d love to do a meet and greet before drop off to get to know you and your dogs.

  We understand not only do you want to have a peace of mind when you’re on vacation but your fur baby to have a great adventure as well. They will be in good hands with us.
  
  I am currently not working so I am available most weekdays and weekends and on some holidays. Pick up and drop off times can we arranged and is flexible, Same day services are accepted.
  
  We have a fenced backyard and two huge parks with large grass area in our community. We also have our own fur baby to keep your dogs company. Our neighborhood is really dog friendly and safe. It has many open areas for walking your dogs and provides poop bags. If you would like to check out our neighborhood we can arrange meet and greets at our nearby parks. If your dog is crate trained please bring your crate if possible. If there is anything your dog may need to feel comfortable and secure please bring it. 
  
  If medications are required, bring if needed. We also provide some dog treats but if your pup has a preference please bring as well.",
  host_id: User.first.id,
  street_address: '1118 McGill street',
  city: 'San Francisco',
  postal_code: 94111,
  country: 'USA',
  longitude: 37.798967,
  latitude: -122.403546,
  price: 20,
  num_of_beds: 1,
  images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494621/house10/stephanie-liverani-IwWr58ck4x4-unsplash_r3qq4f.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494620/house10/kirill-9uH-hM0VwPg-unsplash_v3xirl.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494620/house10/anthony-duran-XFLY0Yp3Gow-unsplash_qo56tb.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494620/house10/roberto-nickson-_JGVVEfbTVQ-unsplash_mzxdoi.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1638494619/house10/emily-park-9gHZ6qxQrpI-unsplash_b90ymw.jpg"
        ]
}

])


