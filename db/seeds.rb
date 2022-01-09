# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Listing.destroy_all

sf = User.create!(username: 'Abraham', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!')
newyork = User.create!(username: 'Serena', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
paris = User.create!(username: 'Jamie', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
sydney = User.create!(username: 'Nicole', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
capetown = User.create!(username: 'Daniel', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
boring = User.create!(username: 'Jeff', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
okay = User.create!(username: 'Hendrick', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
flippin = User.create!(username: 'James', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 
dummer = User.create!(username: 'Patrick', password: 'password', email: 'demo@pawpertymail.com', bio: 'Playful dog looking for a big park, and lots of treats!') 

listing1 = Listing.create!([
  {
    title: 'Dog-out, here!',
    description: "I've cared for dogs for a long time! I've fostered many dogs throughout high school and as an dult. I currently have 1 dog that is friendly with everybody. I am originally from the Bay Area. My parents are also home all day to care for your pet! \n
    I've worked with caring for dogs for about 5 years and love every single one of them. You can trust in me and my family to provide your dog a lot of love and affection while they're in our care. Your pup will also get to play with our dog in the backyard!
    \n
    We take frequent walks (3 times a day), and occasionally visit parks. 
    \n
    Please let us know if your pup has any special needs. Such as: medication, dietary restrictions, allergies. We would also like to know how much your pup eats and what times you prefer them to be fed. We provide healthy organic food if you're unable to provide your own. Please let us know if they're house trained or not. We can also accomodate for any interest quirks your pup may have, just let us know! Thanks",
    host_id: sf.id,
    street_address: '1A Sunny Hills street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.798967,
    longitude: -122.403546,
    price: 20,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/amy-humphries-AllEP6K_TAg-unsplash_ovptsl.jpg", 
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638154900/cdc-SAwxJ8PHY3Q-unsplash_w1aqqi.jpg", 
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638155032/beatrice-selly-d5YEmZknHIs-unsplash_rb5mp8.jpg", 
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638155409/mathew-coulton-zxqaAkkayP8-unsplash_npk6ow.jpg", 
            "https://res.cloudinary.com/de8carnhu/image/upload/v1637704361/francesca-tosolini-tHkJAMcO3QE-unsplash_rbjwck.jpg", 
          ]
  },
  {
    title: 'Flex those paws!',
    description: 'Dynamic parks in the area! Come relax on our cozy beds!
    I am a full time stay home mom and have more than 20 years experience of caring and training dogs.

  I only take one dog at a time for boarding or daycare because I want to make sure your dog will have my full attention.

  Our house is always kept clean and we also have a beautiful backyard where the dogs can play together. Moreover, I will also take your dogs for at least two 15 minutes walks during their stay with us. Your dog will be stimulated mentally and physically and come home happy.

  Feel free to schedule a meet and greet with us, to see if your dog is comfortable with the environment. We will definitely treat your dog like a family ',
    host_id: sf.id,
    street_address: '1B Sunny Hills street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.7961077,
    longitude: -122.4183113,
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
    host_id: sf.id,
    street_address: '345 Main street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.7784309,
    longitude: -122.4240908,
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
    host_id: sf.id,
    street_address: '6222 Paradise street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.753028,
    longitude: -122.4427817,
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
    host_id: sf.id,
    street_address: '9437 Lake street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.751078,
    longitude: -122.480250,
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
    host_id: sf.id,
    street_address: '7243 Hill Valley street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.734477, 
    longitude: -122.421835,
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
    host_id: sf.id,
    street_address: '18159 Alley street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.729067, 
    longitude: -122.389464,
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
    host_id: sf.id,
    street_address: '8393 Summer street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.718551, 
    longitude: -122.429928,
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
    host_id: sf.id,
    street_address: '88373 Winter street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.694629, 
    longitude: -122.468564,
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
    host_id: sf.id,
    street_address: '1118 McGill street',
    city: 'SAN FRANCISCO',
    postal_code: 94111,
    country: 'USA',
    latitude: 37.802420, 
    longitude: -122.442041,
    price: 20,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638494621/house10/stephanie-liverani-IwWr58ck4x4-unsplash_r3qq4f.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638494620/house10/kirill-9uH-hM0VwPg-unsplash_v3xirl.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638494620/house10/anthony-duran-XFLY0Yp3Gow-unsplash_qo56tb.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638494620/house10/roberto-nickson-_JGVVEfbTVQ-unsplash_mzxdoi.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1638494619/house10/emily-park-9gHZ6qxQrpI-unsplash_b90ymw.jpg"
          ]
  },
  # ==============================NEW YORK
  {
    title: "Zoomies galore!",
    description: "Hello! We are a couple and we are huge dog lovers! We are exploring options to adopt a dog of our own in the future, but until then, we wanted to sign up to dog sit for our fellow New Yorkers! We live in a 1,000 sq ft apartment in the LES with minimal furniture and ample space. We both work remotely from home so we can take your dog out for many walks a day and potty runs any time as well. We love to get outside after work hours and on weekends as well so we will be sure to give your dog the exercise he/she needs.

    Individually, we have dog sat for many friends and family friends throughout our lives and together we have been regularly dog sitting for a couple of our friends’ dogs. We are absolutely confident that the care and attention we will pour onto your dog during his/her stay will be second to none.
    
    We will be available to contact all day and will gladly provide regular updates. If you have any instructions or special requests for your dog, please let us know and we will make sure to diligently follow each one of them.",
    host_id: newyork.id,
    street_address: '432 Broadway street',
    city: 'NEW YORK',
    postal_code: 10036,
    country: 'USA',
    latitude: 40.616229, 
    longitude: -73.941261,
    price: 56,
    num_of_beds: 10,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692635/newyork1/anthony-duran-XFLY0Yp3Gow-unsplash_ymngac.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692635/newyork1/adam-griffith-sWkkIiTJMYc-unsplash_s6jsyp.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692635/newyork1/afra-ramio-cp2HCVzguw4-unsplash_t02uxu.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692634/newyork1/alvan-nee-lvFlpqEvuRM-unsplash_dagehc.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692634/newyork1/alice-kang-Bc_uN5PeErA-unsplash_plgiuz.jpg"
          ]
  },
  {
    title: "Just take my paw and trust me",
    description: "My gf and I grew up loving dogs! We recently got our first puppy together a few months back and couldn’t be happier. It would be an honor for us to take your dog into our warm home and provide your dog with a safe, fun environment we would want for our own!

    We both work full time and have no issues taking care of our own dog Rigley. Nina works from home, end I pop in and out of the apartment during the day.
    
    Our home is your dogs home! We have a good size Tribeca apartment where your dog can roam free, play with our Newfypoo Riggs, or hang on the couch and watch TV!",
    host_id: newyork.id,
    street_address: '555 5th Avenue',
    city: 'NEW YORK',
    postal_code: 10036,
    country: 'USA',
    latitude: 40.705547, 
    longitude: -74.087539,
    price: 89,
    num_of_beds: 4,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692668/newyork2/andrew-neel-Rbt_VCKGy-Y-unsplash_ptzgua.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692656/newyork2/artem-beliaikin-c6jp6Wmsjrk-unsplash_y3snbl.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692656/newyork2/angel-luciano-LATYeZyw88c-unsplash_jdnznm.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692656/newyork2/christina-victoria-craft-VP8BDBC9ZDg-unsplash_vc4dib.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692656/newyork2/andrea-davis-k8WL83m48XY-unsplash_hu5gc8.jpg"
          ]
  },
  {
    title: "Not so ruff",
    description: "I grew up helping my dad train 3 German Shepherd Dogs and have experience with taking care of puppies as well. I love and welcome all dog and cat breeds to my West Village apartment where it is an easy walk to Washington Square Dog Park.

    I currently work part-time at home, which gives me a lot of flexibility to fit pet care into my daily routine easily. I am able to provide a few walks in daily, depending on your preference, as well as keeping them company if the breed easily experiences separation anxiety.
    
    I currently do not own any pets in my apartment but that helps me provide a much more attentive and caring environment for your pet while you are away. Your pet is allowed in all of the rooms, although my apartment may not be as spacious enough to play with a ball, I'll still be good company for your fur baby! I live in a 5-floor walk-up.",
    host_id: newyork.id,
    street_address: '94722 Washington Ave',
    city: 'NEW YORK',
    postal_code: 10036,
    country: 'USA',
    latitude: 40.667759, 
    longitude: -73.977667,
    price: 1500,
    num_of_beds: 2,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692689/newyork3/dakota-lim-n_2DimPwbEk-unsplash_xsmiud.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692689/newyork3/andrea-davis-nbI8gqbBaHo-unsplash_negsvc.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692689/newyork3/autri-taheri-TTGSZSElkOI-unsplash_zfhbnw.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692689/newyork3/clay-banks-OcxgtPN0FmM-unsplash_wlbaia.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692688/newyork3/brooke-cagle-Ntm4C2lCWxQ-unsplash_e3hvuu.jpg"
          ]
  },
  {
    title: "Wag-wag-wag",
    description: "Hellooo! I am a dog loving person living in NYC.
    * I have 1 Dog (Binx)
    * I have spaced stairs in my home.
    —
    I have experience with dogs from 12 -70lbs. (For example, Tea Cup Maltese, Yorkshire Terriers, English Bulldog, Shibas, Huskies, Mixed Breed fur-babies & more) On my free time I also volunteer for a no-kill animal rescue & I have fostered for them a few times before.
    I am capable of taking your dog on long walks through any weather (even the dreaded rain lol) , taking them to appointments if you can't, and boarding them within my own home.
    
    I have my own pupper named Binx. If your fur baby does better with a dog friend in the home, he’s here to lend a helping paw and share his treats & toys.
    
    ✨ I currently work full-time not too far from home.
    I can walk your dog both in the morning and in the afternoon, and to the park or on hikes via the weekends. Accommodating to one or more night stays.
    
    I live with a family member in home with stairs, where your dog is free to roam. But if necessary can be easily gated off or crated from other rooms.
    
    * it is necessary that I know if your dog to neutered/spayed when boarding, to prevent any territorial behavior.",
    host_id: newyork.id,
    street_address: '39208 Doyer Street',
    city: 'NEW YORK',
    postal_code: 10036,
    country: 'USA',
    latitude: 40.668360, 
    longitude: -73.960559,
    price: 88,
    num_of_beds: 3,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692714/newyork4/carissa-weiser-2fpOAxv9SEk-unsplash_ars3yj.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692714/newyork4/andrea-davis-zOPRKaYLSdE-unsplash_jeeljx.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692713/newyork4/david-emrich-WG3g6-ZIAOo-unsplash_crqdxv.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692713/newyork4/cassidy-dickens-Jzs9SV0gt1k-unsplash_reghr6.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692713/newyork4/flaunter-7qTYBEEEvZc-unsplash_iagkd9.jpg"
          ]
  },
  {
    title: "All bark, no byte",
    description: "David in Chelsea, NYC here - a loving, reliable, and caring dog & cat lover available for personalized doggy day care & overnight boarding. I recently lost my beloved French Bulldog, Dudley, and now have a huge hole in my heart to fill, and a lot of love & fun to give to your animal companion. I have over 15+ years of dog care experience, from puppy to senior care, and specialize in small to smaller medium size breeds (especially French Bulldogs). I also work from home, and can fit your pets needs into my schedule. A 25+ year resident of Chelsea, I know this neighborhood well, in addition to the rest of Manhattan. Unfortunately, my NYC apartment is small. so I can only accommodate smaller breeds (approximately under 20 pounds) or puppies for day care or overnight boarding - only one dog at a time. Always responsive, feel free to contact me.

    I currently working from home and have plenty of down time to attend to your canine companion. I am available weekdays, weekends, and can work around your schedule within reason.
    
    I live in a small, 4th floor, walk-up building studio. Your dog will never be left alone, so no crate is needed (unless it's a training requirement).",
    host_id: newyork.id,
    street_address: '94275 Dover Street',
    city: 'NEW YORK',
    postal_code: 10036,
    country: 'USA',
    latitude: 40.667383, 
    longitude: -73.937309,
    price: 39,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692752/newyork5/andrew-neel-gOj023vV8CQ-unsplash_nab4ej.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692752/newyork5/dillon-fancher-wSzOX-0DUyA-unsplash_rytui7.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692752/newyork5/chewy-fGxiRXr2oZg-unsplash_m9iu7s.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692752/newyork5/andrea-davis-pK85wI_ZjuY-unsplash_tcoxkn.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641692752/newyork5/caleb-fisher-AsCYNjt6IF0-unsplash_pzoqnn.jpg"
          ]
  },

  # ==============================PARIS
  {
    title: "Bonjour à tous et à toutes !",
    description: "
    Je m'appelle Syrine et je suis étudiante en cinéma à Paris depuis 4 ans. J’ai grandi entourée d’animaux ( chiens, tortues, hérissons, poissons, oiseaux, chevaux, cochons d'Inde etc.) et j’ai toujours aimé leur compagnie. Ma famille et moi-même avons également accueillis plusieurs chiens et chats de manière ponctuelle, le temps de leur trouver une famille. Cet été, lors d'un voyage, nous avons trouvé 4 chiots dans la rue. Après les avoir nourris pendant 2 mois et une fois sevrées, nous les avons recueillis chez nous durant 1 mois afin de leur trouver une famille. Dans le cadre de mes études, j’ai quitté mon foyer familial et mes 4 chiens. Le manque de contact animalier m’a donné envie de devenir dog sitter et de m’occuper de chiens et chats de toutes races. Je suis habituée à prendre soins des chiens car j'en ai eu plusieurs. Voici les races que j'ai eu et que je connais donc bien :
    - Chips : Bichon maltais, mâle
    - Titus : Labrador, mâle
    - Domino : Jack Russel, mâle
    - Stitch : Jack Russel, mâle (actuellement)
    - Bounty : Bouledogue français, mâle
    - Sky : Husky sibérien, femelle (actuellement)
    - Nola : Chihuahua, femelle (actuellement)
    - Maya : Femelle croisée malinois (actuellement)
    
    Je vis dans un appartement dans le 5ème arrondissement de Paris avec mon copain, Florian. Nous effectuons toutes les gardes ensemble et nous nous occuperons à deux de vos animaux afin de leur offrir le meilleur séjour possible. Nous disposons de beaucoup de temps que nous consacrerons avec plaisir à la garde de vos animaux. Pour ma part, je n'ai cours en présentiel qu'un jour par semaine (4h). Notre appartement possède une grande pièce à vivre où vos animaux pourront jouer à leur aise. Il est également situé à proximité de plusieurs parcs et squares canins (Square René Le Gall, parc canin du Luxembourg).",
    host_id: paris.id,
    street_address: "128 Rue Saint-Saëns",
    city: 'PARIS',
    postal_code: 75015,
    country: 'FRANCE',
    latitude: 48.852912,
    longitude: 2.290373,
    price: 32,
    num_of_beds: 2,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694747/paris1/daniel-lloyd-blunk-fernandez-sDT-o52Sk_k-unsplash_ewryxd.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694747/paris1/jan-canty-pU8ArN6tmuw-unsplash_junmcu.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694747/paris1/joseph-albanese-xx0oSB1YxRE-unsplash_s73trv.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694747/paris1/anna-sullivan-FKZsWsFiNDs-unsplash_ycr98e.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694747/paris1/celine-sayuri-tagami-2s6ORaJY6gI-unsplash_vvnwnb.jpg"
          ]
  },
  {
    title: "Un chien sympa? Hot-dog",
    description: "Aimant les animaux depuis toujours et particulièrement les chiens, je me ferais un plaisir de garder votre petit animal le temps de vos vacances, déplacements ou autres !
    Ayant moi-même déjà eu un chien, je sais tout l'amour qu'on leur porte...j’ai également eu le bonheur d’avoir un chat, un lapin et même une tortue plus jeune. Je vous fais ainsi la promesse de m'occuper du votre de la même manière, c'est-à-dire avec amour et grand soin !
    
    J'habite un appartement parisien donc un peu petit, mais tout à fait apte à recevoir un petit chien pour quelques jours !
    Je travaille depuis mon domicile ce qui permet de rester constamment avec votre chien et de le promener régulièrement.
    Je peux aussi m’occuper de votre chat à votre domicile sans problème. Je ne pourrais en revanche pas l’accueillir chez moi, mon compagnon y étant allergique.
    
    N'hésitez pas à me contacter si vous voulez qu'on échange, je peux aussi me rendre disponible pour une rencontre bien sûr :)",
    host_id: paris.id,
    street_address: '226 Rue de la Convention',
    city: 'PARIS',
    postal_code: 75015,
    country: 'FRANCE',
    latitude: 48.836406, 
    longitude: 2.299254,
    price: 15,
    num_of_beds: 5,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694760/paris2/chewy-dOTIcvV1Ck4-unsplash_cxur89.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694761/paris2/michael-bourgault-YvvHEQNgMcU-unsplash_xqrtea.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694760/paris2/ashley-byrd-yzkTCP4uc9E-unsplash_hue2fz.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694760/paris2/bench-accounting-8D2k7a3wMKQ-unsplash_o6qoyz.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694760/paris2/courtney-mihaka-EC9FvxCbf7o-unsplash_xx8eej.jpg"
          ]
  },
  {
    title: "double chien défiez-vous",
    description: "Bonjour,

    J'ai eu mon premier chien quand j'avais 6 ans et jusqu'à mes 18 ans il était mon petit bébé.
    C'a été difficile de le remplacer par la suite mais j'ai passé beaucoup du temps avec le chien de ma sœur.
    Actuellement j'aimerais trop avoir un chien mais je voyage beaucoup et c'est un peu compliqué.
    
    Je peux vous assurer que votre toutou sera entre bonnes mains et il recevra beaucoup d'attention et d'amour durant votre absence.
    
    A bientôt,
    
    Disponible presque tous les jours de la semaine
    Je suis en télétravail tous les jours sauf les mardis.
    Je suis sportive et je vais suivant au parc à coté.
    
    J'habite dans un T2 sans terrasse mais à proximité d'un parc
    Je n'ai pas d'autres animaux à la maison. Toute l'attention et l'amour seront portés sur votre chien :)",
    host_id: paris.id,
    street_address: "Bd de l'Hôpital",
    city: 'PARIS',
    postal_code: 75005,
    country: 'FRANCE',
    latitude: 48.840496,
    longitude: 2.361863,
    price: 60,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694778/paris3/cristian-castillo-73pyV0JJOmE-unsplash_bpy79u.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694779/paris3/ralph-ravi-kayden-Rdh-OCcBqC0-unsplash_cexbnb.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694778/paris3/jason-briscoe-AQl-J19ocWE-unsplash_vd4inw.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694778/paris3/toa-heftiba-FV3GConVSss-unsplash_qy9ugd.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641694778/paris3/helena-lopes-WhBGINtjuwc-unsplash_sqmlob.jpg"
          ]
  },
  # ================================SYDNEY
  {
    title: "Relax like a dog, not work like one",
    description: "The health and happiness of any dog in my care is most important to me.

    During the day I work at a Doggy daycare and boarding facility and the majority of my free time is spent with my own 2 dogs.
    
    I just recently left the Military and I’m about to start school to become a Vet tech :)
    
    Any dog that I have the opportunity to care for will be treated as if they were my own. They will have access to any of the furniture in my home including a little couch just for dogs. I also have a room in my home where my dogs hang out while I am not home or I have 2 small crates of fur parents prefer their babies to be crated.",
    host_id: sydney.id,
    street_address: "55 Jones St",
    city: 'SYDNEY',
    postal_code: 123,
    country: 'AUSTRALIA',
    latitude: -33.877806, 
    longitude: 151.196306,
    price: 43,
    num_of_beds: 7,
    images: [
          "https://res.cloudinary.com/de8carnhu/image/upload/v1641695896/sydney1/humphrey-muleba-Y6EIP03u_wY-unsplash_y3ybwd.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1641695896/sydney1/juliette-roanoke-Lj62T3ebi0M-unsplash_ukr76g.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1641695897/sydney1/justin-kauffman-yyILhheLSd4-unsplash_gtga7k.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1641695896/sydney1/jon-nathon-stebbe-paydk0JcIOQ-unsplash_fxp6hj.jpg",
          "https://res.cloudinary.com/de8carnhu/image/upload/v1641695896/sydney1/eric-ward-ISg37AI2A-s-unsplash_w5gvqq.jpg"
          ]
  },
  {
    title: "Anything is paw-sible",
    description: "I am very energetic so your precious pup will always be able to roam free inside or outside (fenced in yard). I have 1 dog named Milo and he is fixed and 5 YO. Your pooch will never be neglected since I am always home to cater to the needs of any age. No kids and no cats here. I will always make sure your pup is safe, secure and happy while staying with me. I love to train pups as well in sit, paw, lay, etc... The back yard is big and spacious for any size pup that wants to just run around and get all their energy out.
    My availability can be discussed if you're interested.
    
    I am pretty flexible. I do not have many restrictions when it comes to caring for a furry friend. I have free time since I am working from home.
    
    I am pretty open to anything that is needed. I am flexible and understanding. ALWAYS up to see animals and pets alike. I care like they are mine and always with respect.
    
    I work from home full time. I have my dog outside with me on a lead all day if the weather permits. Feeding is once in morning and once at night unless needing more.
    
    I have a fenced in yard and one small crate and one large crate in the event the pup needs to be crated. They will continually be allowed inside and outside throughout the day.",
    host_id: sydney.id,
    street_address: "102-104 Albion St",
    city: 'SYDNEY',
    postal_code: 123,
    country: 'AUSTRALIA',
    latitude: -33.885376, 
    longitude: 151.211180,
    price: 12,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695909/sydney2/flouffy-DI6blvti51g-unsplash_dez18t.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695910/sydney2/morgan-thompson-lgr68iAjs1g-unsplash_ui5pq1.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695909/sydney2/kara-eads-L7EwHkq1B2s-unsplash_o0dwvz.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695909/sydney2/kari-shea-MfJ9g64-WxQ-unsplash_rqhnpl.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695909/sydney2/jamie-street-kyqfZ95P7Ec-unsplash_pavo5o.jpg"
          ]
  },
  {
    title: "My dog’s not fat. He’s just a little husky",
    description: "My name is Matthew. I am here to provide a great experience. Show a trustworthy and caring services each and everytime. Your pet is your baby and is treated as such. I have experience in handling large dogs to small from a variety of breeds. Let me be the next sitter for you!! I have a knack for instantly bonding with dogs. They help keep motivated and going. Reason why I LOVE what I do!

    Thank you for your support!
    🐈🐶🐾🐈💖🐶🐾🐈
    
    Additional Charges listed below:
    *If picking up or dropping off outside of business hours(7AM-9PM EST) an extra $5 will apply.
    * Special cooked meals $5 fee per each day of service required.
    * Special care needed $10 additional per entire service(Doggy Day Care and Boarding)
    * Walks outside of fenced in yard
    $8 per each 30- Minute Walk
    $20 per each 1- Hour Walk.
    
    I have your full attentive schedule needs. 24/7(365 days) no matter what I will do anything to be here for you. I keep my availability open just for you.
    
    Separate living atmosphere with a safe and complete fenced in yard. Safe neighborhood with neighborhood watch 24/7. Well lighted during nights and secured yard and home.",
    host_id: sydney.id,
    street_address: "49-41 Hunter St",
    city: 'SYDNEY',
    postal_code: 123,
    country: 'AUSTRALIA',
    latitude: -33.866090, 
    longitude: 151.209760,
    price: 89,
    num_of_beds: 3,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695923/sydney3/nathan-hanna-7hxC83Qcuwo-unsplash_zhjr3n.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695923/sydney3/spacejoy-c0JoR_-2x3E-unsplash_x63pcl.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695924/sydney3/roberto-nickson-q9nZUFC1nTw-unsplash_fvftgy.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695924/sydney3/olivia-hibbins-JXRoYGRSPfk-unsplash_wshnpe.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641695924/sydney3/jay-wennington-w_O_tPgxvok-unsplash_fi4d6g.jpg"
          ]
  },
  # =======================CAPETOWN
  {
    title: "little ruff around the edges",
    description: "I am a dog lover! Having grown up with my father who is a professional dog trainer, I've been handling dogs since I was a young child. For the past 10 years I have been self employed as a dog groomer and boarding professional. I am committed to providing quality care to your pet with extra love and attention!

    My schedule is open for 24 hour pet care as I spend my days at home. We will follow a routine based on your pet needs!
    
    I have a privacy fenced yard to keep your pet safe. I can meet your preferred arrangement for playtime and sleeping based on your pets individual needs.",
    host_id: capetown.id,
    street_address: "175-199 De Wet St",
    city: 'CAPETOWN',
    postal_code: 7460,
    country: 'SOUTH AFRICA',
    latitude: -33.895265, 
    longitude: 18.564618,
    price: 77,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697719/capetown1/jamie-street-me0hi86szok-unsplash_ldw48e.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697719/capetown1/olia-nayda-jBjvi1OEJA4-unsplash_ti97nh.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697718/capetown1/sidekix-media-0sDzRgrN_pI-unsplash_ghafhr.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697718/capetown1/luisa-schetinger-VVVJxvA8GuA-unsplash_zofxoy.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697718/capetown1/karsten-winegeart-Fqr9Bq7Inz0-unsplash_tkbwqa.jpg"
          ]
  },
  {
    title: "barking up the wrong tree",
    description: "I have been around animals since I was born. Pets are family and should be treated as such. I grew up with two Winnie dogs named Brownie and Tootie. I also grew up with two cats named Mr. Beans and Rosie. They were my babies and never left my side. I will treat your pet as if they’re my own. I provide treats and a lot of love. Your pet will get a lot of hugs and kisses and also be welcome on my furniture.
    My phone will always be on when you feel the need to check in. You can rest easy knowing your pet is in good hands. I will most certainly enjoy having them over. Most importantly they will enjoy their stay with me! We love animals!",
    host_id: capetown.id,
    street_address: "31 Steve Biko St",
    city: 'CAPETOWN',
    postal_code: 7750,
    country: 'SOUTH AFRICA',
    latitude: -33.971066, 
    longitude: 18.565834,
    price: 22,
    num_of_beds: 3,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697766/capetown2/jonas-jaeken-b4BLUYKLzP4-unsplash_ynuej3.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697766/capetown2/pankaj-shah-1ff_i7jO-4g-unsplash_vbqtlt.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697766/capetown2/sidekix-media-hZE6VQVbMco-unsplash_d2nylv.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697765/capetown2/jaycee-xie-TcByXvrIrno-unsplash_mbloph.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697765/capetown2/nicholas-brownlow-lx_KwA7hlLU-unsplash_juftld.jpg"
          ]
  },
  {
    title: "dog’s favorite band is The Beagles",
    description: "Registered Veterinary technologist available for pet sitting. I have over 17 years of experience. Highly skilled at administering any medications your pet may need! I will be offering a variety of services which include daily walking, staying in your home or boarding your pets at mine. Daily walks or drop ins would include a 10 to 15 minute walk for your pet, along with feeding watering and of course play time. Baths will be provided before pick up if boarding dor 3 or more days! I look forward to meeting you and your pets needs. Feel free to contact me for more information. Thank you for looking!

    Able to watch dogs any time during the week. Flexible with drop off times. Either me or my spouse will be home if pets need extra attention.
    
    I have a fenced in yard with lots of room for playtime! I also have experience in keeping your pets mentally and physically stimulated as well.",
    host_id: capetown.id,
    street_address: "32 Parry Rd",
    city: 'CAPETOWN',
    postal_code: 7708,
    country: 'SOUTH AFRICA',
    latitude: -33.979806, 
    longitude: 18.474277,,
    price: 19,
    num_of_beds: 8,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697842/capetown3/josh-rakower-zBsXaPEBSeI-unsplash_ae5gk8.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697841/capetown3/sidekix-media-r_y2VBvEOIE-unsplash_fyyl2h.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697841/capetown3/sydney-bouchard-8PpGIsEnS1Y-unsplash_afbrlu.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697841/capetown3/olivia-hutcherson-oWUdZrauLMY-unsplash_af2i3e.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641697841/capetown3/justin-veenema-A-YUeXZ1rq8-unsplash_nxboec.jpg"
          ]
  },
#=================Boring
  {
    title: "Bark side of the moon",
    description: "I have always had a dog, and can’t imagine life without one. I am retired and just lost my dog to cancer. I would love to care for your pet and have a fenced yard and dog door as well. I have cared for dogs with special needs for medical and emotional needs. My husband and I will care together and can walk, play and follow your pet care instructions. Your pet will get one on one with no other animals. We are able to take multiple dogs from the same family. We have good heat and air conditioning in our home as well. You pet will not be left and we have a alarm system for their safety as well. We live near a 24 hour vet as well and have gotten our COVID-19 shots. We use only pet friendly products on our yard.",
    host_id: boring.id,
    street_address: "27220 SE Haley Rd",
    city: 'BORING',
    postal_code: 97009,
    country: 'USA',
    latitude: 45.443089, 
    longitude: -122.383233,
    price: 26,
    num_of_beds: 3,
    images: [
      "https://res.cloudinary.com/de8carnhu/image/upload/v1641702889/boring1/sam-manns-lBdVjQcfSRQ-unsplash_oyewlc.jpg",
      "https://res.cloudinary.com/de8carnhu/image/upload/v1641702890/boring1/zac-gudakov--UHyhmRhzrU-unsplash_dvzvev.jpg",
      "https://res.cloudinary.com/de8carnhu/image/upload/v1641702889/boring1/katja-rooke-o4JgsxTZFxk-unsplash_ywq2n1.jpg",
      "https://res.cloudinary.com/de8carnhu/image/upload/v1641702889/boring1/madalyn-cox-NE48YzTbYvo-unsplash_gtq0qa.jpg",
      "https://res.cloudinary.com/de8carnhu/image/upload/v1641702889/boring1/spacejoy-umAXneH4GhA-unsplash_yxrpc0.jpg"
          ]
  },
  {
    title: "Jurassic Bark",
    description: "I have worked professionally with animals for well over 20 years. Everything from snakes to primates but working with dogs has always been a passion of mine. I have worked with large groups of dogs, taught group classes and been a house sitter for many years. I am a certified Canine Conditioning Fitness Coach and a certified Trick Dog Instructor with Do More With Your Dog. I am also a AKC Canine Good Citizen evaluator. I have successfully completed the Red Cross course for cat and dog first aid more than once. I have attended and continue to attend many seminars and online dog body language courses to grow my knowledge of dog behavior. Every guest that comes to play and stay on the farm will have a exciting enriching day of playing and learning in a secure large play yard with weather permitting activities. Her or his day will also include a few short but fun enrichment sessions. I like to include lots of obedience, tricks, recall games, food puzzles, agility games and force free grooming throughout the day. Of course lots of naps and snuggles on the couch in the air conditioning or heat will be in order as well. I enjoy making a fun day for your family member whether they are a young puppy, rowdy playful type, Itty bitty, retirement age or special needs.I have lots of experience with special needs and medication administration if that's something your family member requires. I am able to accommodate family members that need extra assistance with a one level, stair free home. I will make sure to send pictures and videos of your family member while you are away as I know it's hard to leave your loved one!

    Your family member will have a constant human companion and will be in a run or crate for meal times and a nap if needed. As a full time stay at home dog mom my dogs are top priority and are sure to get all that they need!
    
    The farm offers three separate play yards. One main large secure chain link play yard and two smaller secure chain link play yards that are typical backyard size. All yards have play structures,pools, tunnels and of course TOYS! All yards have covered potty areas for rainy or hot days. I also have two indoor areas for playing and training and of course the house is also a play space. The two acre property is completely fenced and is at least double fenced in all dog areas. With the multiple yards I am able to make sure playmates are with size appropriate friends. Check out my photos for pictures of the play areas! Your family member will never be left out unattended. They will come in the house when I do! All guests sleep in the house! We do have horses, chickens and other small animals on the farm. All of which are on the other side of the property in a separate building. Although I would hope to never need it, I do have detailed emergency and evacuation plans for all animals in my care. Including transportation and safety supplies on hand.",
    host_id: boring.id,
    street_address: "12255 SE 282nd Ave",
    city: 'BORING',
    postal_code: 97009,
    country: 'USA',
    latitude: 45.434817,
    longitude: -122.372824,,
    price: 87,
    num_of_beds: 9,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641702962/boring2/patrick-hendry-nk_uvN_b-w8-unsplash_tozoic.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641702962/boring2/spacejoy-IH7wPsjwomc-unsplash_ctjuul.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641702961/boring2/petr-magera-W-suV77e-U8-unsplash_y8pjzd.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641702961/boring2/tania-melnyczuk-dSOQHP-ALqw-unsplash_jn36sn.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641702961/boring2/sasha-sashina-k1hbfag2na0-unsplash_d3mb89.jpg"
          ]
  },
  {
    title: "Raining cats and dogs",
    description: "I grew up on a 350 acre farm in Ohio with cows, cats, horses, dogs & other animals so I understand how to treat them with care & put their needs first. I will act as if you were watching me the whole time with your dog, & truly let your dog be itself & wont restrain or hold it back with harsh rules or miscare & bad techniques. I am a personal trainer & very active so keeping up with your dogs energy & taking care of zoomies will be easy. I am strict with nutrition so wont be feeding your dog any junk & will promote health & happiness. I truly just love & appreciate animals so much so working with them & helping people is a win win.

    I'm currently working part time, so I'll have plenty of time to care for your pup! & my fiance works from home so your pup will never be alone.
    
    The fenced park is right acrossed from me so your pup can get the zoomies out! My home is a safe & overall great spot for dogs.",
    host_id: boring.id,
    street_address: "13472 SE 286th Ln",
    city: 'BORING',
    postal_code: 97009,
    country: 'USA',
    latitude: 45.425312,
    longitude: -122.368171,
    price: 60,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641703022/boring3/wade-austin-ellis-FtuJIuBbUhI-unsplash_z5ttfo.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641703022/boring3/roberto-nickson-gRHEt2kF3NU-unsplash_nttpst.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641703023/boring3/roberto-nickson-i21-U296OJ8-unsplash_zf2bip.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641703023/boring3/sophia-kunkel-F84XvXyEYk4-unsplash_ijrhh6.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641703023/boring3/yehleen-gaffney-raxI_EcyfGw-unsplash_dsommm.jpg"
          ]
  },
# ==========================okay
  {
    title: "I didn't the pug life, the pug life chose me",
    description: "I am a graduate student who has always loved animals! My professional experience in caring for animals began in high school, I was able to work at a vet clinic! This is been one of my favorite professional experiences because it really allowed me to understand the love that owners have for their animals. I was able to sit in on surgeries and create an atmosphere of love for the animals who were receiving treatment as well as love on those who were just being boarded! I started in 2017 in the Edmond/OKC area and loved my furry family while I did my undergrad! My husband and I moved to Muskogee in 2020 and I am so happy to be building another great client base again! I love animals of all kinds and my favorite thing about animals is their unique personalities. I hope that I am able to learn a little bit about your furry friend!!! My ultimate goal is that the end of the day, you feel comfortable leaving me responsible for your pet! I will do anything to achieve that!!!",
    host_id: okay.id,
    street_address: "7421 N 43rd St E",
    city: 'OKAY',
    postal_code: 74447,
    country: 'USA',
    latitude: 35.850108, 
    longitude: -95.316404,
    price: 38,
    num_of_beds: 2,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704476/okay1/tamas-pap-Qdt8f7Tcle0-unsplash_zoru1c.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704475/okay1/james-thomas-ogMsQ9Q0Dtw-unsplash_fsre0u.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704475/okay1/shane-guymon-KCdYn0xu2fU-unsplash_gkowlr.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704475/okay1/patrick-perkins-G3qlZQXsBOE-unsplash_eifvaz.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704475/okay1/adriana-carles-rSrpSgocsm0-unsplash_lot0q6.jpg"
          ]
  },
  {
    title: "Howl I ever live without you?",
    description: "I've owned dogs for many years from rescued to puppies. Currently own 3 corgis but my all time favorite is german shepards. Ive had as many as 5 dogs at one time. My favorite saying is by Immanuel Kant " We can judge heart of a man by his treatment of animals" firm believer in this.
    Also have a few other sayings as well.
    Some of my best friends never say a word to me. They bring pleasure by just being there not saying anything.
    I also have 3 cats and a husband. My favorite saying at work is that I live in a zoo. But I wouldn't want it any other way.
    I always believe that every kid should have an animal to care for.",
    host_id: okay.id,
    street_address: "E 75th St N",
    city: 'OKAY',
    postal_code: 74464,
    country: 'USA',
    latitude: 35.850607, 
    longitude: -95.324749,
    price: 99,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704537/okay2/cosmic-timetraveler-zh_ofCt2r9c-unsplash_thxxqs.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704537/okay2/jay-wennington-CdK2eYhWfQ0-unsplash_t6rpal.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704537/okay2/martins-cardoso-NsxzcbdF8fU-unsplash_ohhnt7.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704536/okay2/r-architecture-wot0Q5sg91E-unsplash_sbtbk5.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704536/okay2/toa-heftiba-Ysjfj4UkzDM-unsplash_vtdgdq.jpg"
          ]
  },
  {
    title: "Pass the pupcorn",
    description: "I’ve always loved animals since I was very young my grandparents raised Emus! LOL yes giant birds we also had goats we milked daily nothing like living on a farm my parents have cattle we just recently bought our house in Tahlequah last year it sets in the middle of 10 acres of field and cattle barns and 2 ponds our back yard is fenced in. I’m a stay at home mom with 3 cats that range from 5 months 2 years and 4 years old our hound dog is 10 years old sweet cute lazy girl who loves all animals

    Currently I’m not working so I have a full time schedule available I have 2 kids almost ready to go back to school very active family loves parks and river and lake walks
    
    I have 1 dog and 3 cats they get along well with others I can also crate train if needed already have a permanent crate in my house I can house large dogs I have plenty of room large yard fenced in and plenty of land to walk water bowls filled daily in 4 rooms of the house fed every morning and evening snacks done daily lots of chew toys all animals are welcome on the couch and all beds our dog is let out every 1-2 hours as needed or more she very much loves being outside sun bathing cats do not go outside they have a big window in the den we open so they get a fresh breeze as well as they have a cat tree and 2 very large litter boxes",
    host_id: okay.id,
    street_address: "E N 72nd",
    city: 'OKAY',
    latitude: 35.847407,
    longitude: -95.320994,
    postal_code: 74446,
    country: 'USA',
    price: 60,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704624/okay3/david-vives-Fcanz8wm-1U-unsplash_bzlkyz.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704626/okay3/spacejoy-9t7h964f7V4-unsplash_yk5ssb.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704625/okay3/kurt-liebhaeuser--CSfRZGL8iw-unsplash_sy1yfh.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704625/okay3/valya-polishchuk--RTT_sBji8U-unsplash_rr6csh.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641704624/okay3/r-architecture-8oNhTvuBZ7g-unsplash_alymxr.jpg"
          ]
  },
  # ========================Flippin
  {
    title: "FIRST!",
    description: "We chose to dog sit because we love dogs and enjoy spending time with them. When we first started out we where working from home and caring for my mom who had cancer but she has since passed away. So now we do this as full time income. I wouldn’t even dare call it a job because we love what we do it’s so fun and rewarding. Over the course of our time here with Rover we have taken care of the Tea cup Yorkie all the way up to the Great Dane, 8 week old puppies to 16 + year seniors and shy to hyper dogs and everything in between. We know dogs do not like to be left alone for long periods of time so we are here to help. We have owned rescue dogs of all sizes, ages and breeds for the past 40 years. We have a genuine love for animals we will pick up a stray animal on the road and find it a home without thinking twice about it. We have a large fenced yard where your dog can play fetch, run around and bask in the sun. We have dog sat many of our friends and families dogs over the years. My husband and I have a wonderful routine. In the morning we let them out in the back yard to use the bathroom, after that we feed them and let them go for a long walk around the neighborhood. After the walk they usually take a nap in the house or we have a belly rubbing session. Later on they go back outside, eat again and go for another walk then more playtime and belly rubbing before bed. We also like to simulate their home life so if your routine differs from ours we will adjust to fit your dog. Boss loves meeting new friends it helps keep him young. He can not wait for you to bring your dog over so he can play. We hope to meet your fur babies soon.

    Strict Drop off and pickup times begin at 6am and end promptly at 6:30pm. Pickups after 6:30pm will be charged an additonal nights stay.
    
    This is our full-time occupation so we’re always home to give your pet the care that he needs. The the only time we leave the house is when we go to church.
    
    I have a fully fenced yard and a very sweet Frenchie that loves to meet new friends. I can crate your dog if that’s what is needed. I adjust to your routine at home.",
    host_id: flippin.id,
    street_address: "203 South St",
    city: 'FLIPPIN',
    postal_code: 72634,
    latitude: 36.276362,
    longitude:  -92.596866,
    country: 'USA',
    price: 1,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641705101/flippin1/r-architecture-Y8MJFQYYjh8-unsplash_kb3pdu.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641705101/flippin1/spacejoy-XpbtQfr9Skg-unsplash_t8qe3o.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641705101/flippin1/spacejoy-umAXneH4GhA-unsplash_wljptq.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641705100/flippin1/yogendra-singh-K8JxScoZb4A-unsplash_csiwjb.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641705100/flippin1/roberto-nickson-V6G2m3D9IDI-unsplash_kfylak.jpg"
          ]
    },
    # ==============Dummer
  {
    title: "Ma and Paw shop",
    description: "Ive owned a chihuahua to a Great Dane. Lots of experience taking care of and loving furrybabies. I only use positive reinforcement. My dogs are allowed on the couch but also have dog beds to lay on. My dogs are inside/outside furrybabies. I have a fully fenced in yard with a 6 foot fence. I foster for a local rescue. My dogs are used to other dogs and puppies coming into the house. I have furrybabies at home but am set up for visitors. I’d have the flexibility to check on your furrybabies throughout the day and evening. I can take furrybabies for walks or transport them if needed. Size doesn’t matter. Id love a chance to take care of your pup
    I welcome short notice stays.",
    host_id: dummer.id,
    street_address: "89 Hill Rd",
    city: 'DUMMER',
    postal_code: 03588,
    latitude: 44.609648, 
    longitude: -71.201657,
    country: 'USA',
    price: 15,
    num_of_beds: 1,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706026/dummer1/wieger-stienstra-SDWbEi94QG0-unsplash_cosehb.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706027/dummer1/dillon-kydd-2keCPb73aQY-unsplash_eei1vv.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706026/dummer1/richard-brutyo-Sg3XwuEpybU-unsplash_xolgf4.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706026/dummer1/alexander-wark-6qrNcBOtiJ4-unsplash_kaq2z5.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706026/dummer1/fran-PDN4YQ7Q_I0-unsplash_x78gyu.jpg"
          ]
  },
  {
    title: "Pawsitively amazing!",
    description: "I am an animal lover and grew up around different animals. I’m also a massage therapist and I currently do work a set schedule during the weekday. I’m Available Thursdays-Sundays as well as major holidays. My in-laws live with me and as a family we care for pups.

    I have a fenced backyard. I have a Lab mix named Eko! My dog is playful and sweet and knows when she needs to be gentle. We also have an older poodle mix named khaos. He is nervous and vocal, but is very sweet. He tends to find the quietest spot in the house away from other pups unless it’s nap time.
    
    I take one client at a time for boarding, but will host/care for multiple dogs within the same family. I take multiple clients for daycare. I’m very flexible with drop off/pick up times. I’m usually home on weekends and do stay with pups all day. I try to keep the calendar updated and last minute bookings tend to work 80% of the time.
    
    I look forward to caring for your fur babies. Message me for a meet and greet to see if we’re the right fit. I hope we have the chance to chat soon!",
    host_id: dummer.id,
    street_address: "112 Bale Rd",
    city: 'DUMMER',
    postal_code: 03588,
    latitude: 44.612785, 
    longitude: -71.191979,
    country: 'USA',
    price: 60,
    num_of_beds: 3,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706245/dummer2/ralph-ravi-kayden-2d4lAQAlbDA-unsplash_m5rdy8.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706245/dummer2/zach-lucero-WjzZOaYvo_s-unsplash_yb7rrh.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706245/dummer2/rebekah-howell-9FDKj-FrfA4-unsplash_cn3s6h.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706244/dummer2/andrea-davis-k8WL83m48XY-unsplash_fpdmi3.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706244/dummer2/rad-pozniakov-aSWwFg732QE-unsplash_plyqvf.jpg"
          ]
  },
  {
    title: "Bone Appétit",
    description: "I have a wonderful black lab named Maggie and a cat named Copper both are my world 🌎 I understand not letting your babies just go to anyone. My lab is not aggressive at all she is the kind of girl to greet you at the door with babies in her mouth and a wagging tail my cat is a very good boy as well. I have had pets since I was a kid and always carried special bonds. I am always the person called in my family for dog sitting also through friends my family alone has 10 dogs. I am compassionate and truly enjoy animals I could send as many updates needed as I understand what it’s like when your baby isn’t with you ♥️",
    host_id: dummer.id,
    street_address: "782-1258 Dummer Pond Rd",
    city: 'DUMMER',
    postal_code: 03599,
    latitude: 44.687466,
    longitude: -71.289351,
    country: 'USA',
    price: 62,
    num_of_beds: 2,
    images: [
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706316/dummer3/shravankumar-hiregoudar-pPz6Zdu8SaA-unsplash_eajjof.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706317/dummer3/susn-matthiessen-7O9dILhfn5Y-unsplash_suve0i.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706317/dummer3/valerie-elash-HNCX1RT1qRk-unsplash_lueopj.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706317/dummer3/sarandy-westfall-VYcDFMSkUAA-unsplash_lmbn77.jpg",
            "https://res.cloudinary.com/de8carnhu/image/upload/v1641706315/dummer3/nerea-marti-sesarino-_NpSkRaTy0A-unsplash_vbscfk.jpg"
          ]
  },
])


# {
#   title: "",
#   description: "",
#   host_id: dummer.id,
#   street_address: "",
#   city: '',
#   postal_code: ,
#   latitude: ,
#   longitude: ,
#   country: 'USA',
#   price: 60,
#   num_of_beds: 1,
#   images: [
#           ""
#         ]
# },