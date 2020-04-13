# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

          #  :title,
          #  :description,
          #  :type,
          #  :owner_id,
          #  :max_guests,
          #  :daily_rate,
          #  :address,
          #  :state,
          #  :zipcode,
          #  :country, 
          #  :lat, 
          #  :lng, 

require 'open-uri'

User.delete_all
Campsite.delete_all

u1 = User.create(first_name: "Guest", last_name: "Guest", username: "Guest", password: "password")
u2 = User.create(first_name: "Tristan", last_name: "Mockler", username: "tmockler", password: "password")


c1 = Campsite.create(title: "Camp Hollowground",
                               description: "Not a city sound to be heard, and 15 miles of hiking trails nearby.",
                               site_type: "camping", owner_id: u2.id, max_guests: 8,
                               daily_rate: 40, address: "720 W Grandview Pkwy", state: "Michigan", city: "Traverse City",
                               zipcode: "49684", country: "United States",lat: 44.763569, lng: -85.629777, 
                               wifi: true, pets_allowed: true, showers: true, lake_nearby: true, fire_pits: true, toilets: true)

file1 = open('app/assets/images/c1.jpg')
c1.photo.attach(io: file1, filename: 'c1.jpg')                              

c2 = Campsite.create(title: "Paradise under the stars.",
                               description: "Tranquil campsite, walking distance to beach.",
                               site_type: "camping", owner_id: u2.id, max_guests: 12,
                               daily_rate: 30, address: "208 Sandy Pines Road" , state: "Michigan", city: "Traverse City",
                               zipcode: "49684", country: "United States",lat: 44.763570,lng: -85.631837,
                               pets_allowed: true, showers: true, lake_nearby: true, fire_pits: true, toilets: true)

file2 = open('app/assets/images/c2.jpg')
c2.photo.attach(io: file2, filename: 'c2.jpg')

c3 = Campsite.create(title: "Amazing Tiny Beach Cabin.",
                               description: "Come enjoy our well appointed beach cabin for a peaceful stay. Perfect for couples.",
                               site_type: "cabin", owner_id: u2.id, max_guests: 2,
                               daily_rate: 50, address: "708 Mulberry Lane", state: "Michigan", city: "Traverse City",
                               zipcode: "49684", country: "United States", lat: 44.765168, lng: -85.622944,
                               wifi: true, pets_allowed: true, showers: true, toilets: true
                              )

file3 = open('app/assets/images/tiny_cabin.jpg')
c3.photo.attach(io: file3, filename: 'tiny_cabin.jpg')

c4 = Campsite.create(title: "Hike, Bike, Climb",
                               description: "Stay on 45 beautiful acres bordering The Joshua Tree National Park to the West and just 1 mile to the Park gate and Skys the Limit observatory - our location is perfect for star gazing. There is hiking, biking, climbing nearby. Jumbo Rocks are 8 miles away.",
                               site_type: "camping", owner_id: u2.id, max_guests: 6,
                               daily_rate: 75, address: "601 Main Pkwy", state: "California", city: "Joshua Tree",
                               zipcode: "92252", country: "United States",lat: 33.8114, lng: -115.9020,
                               wifi: true, pets_allowed: true, showers: true)

file4 = open('app/assets/images/jt1.jpg')
c4.photo.attach(io: file4, filename: 'jt1.jpg')                              

c5 = Campsite.create(title: "Open desert, bright stars.",
                               description: "About 10 minutes away from the Joshua Tree National park! Open desert, secluded, and 43 acres! You can pitch your camper, tent or lean to next to others or have some Privacy. 5 miles away from town, gas stations and grocery stores.",
                               site_type: "camping", owner_id: u2.id, max_guests: 14,
                               daily_rate: 50, address: "100 Beach Lane" , state: "California", city: "Joshua Tree",
                               zipcode: "92252", country: "United States",lat: 33.87030, lng: -115.8299,
                               lake_nearby: true, fire_pits: true, toilets: true
                              )

file5 = open('app/assets/images/jt2.jpg')
c5.photo.attach(io: file5, filename: 'jt2.jpg')

c6 = Campsite.create(title: "Coyote Flats",
                               description: 'Enjoy the peace and quiet of the outdoors in our beautifully decorated tent cabins.  These 10x12 canvas wall tents offer a unique glamping experience at The Desert Rose Collective.  Built on sturdy platforms with ample room outside on the patio decks, these tents boast 22" high queen size airbeds with luxurious bedding and plenty of room for you to relax and unwind.',
                               site_type: "cabin", owner_id: u2.id, max_guests: 2,
                               daily_rate: 60, address: "187 Chimney Hill Road", state: "California", city: "Joshua Tree",
                               zipcode: "92252", country: "United States",lat: 33.8740, lng: -115.9002,
                               wifi: true, fire_pits: true, toilets: true
                              )

file6 = open('app/assets/images/jt3.jpg')
c6.photo.attach(io: file6, filename: 'jt3.jpg')

c7 = Campsite.create(title: "Old West Ranch",
                               description: "Enjoy camping on a private historic ranch in the Sierra Foothills -- serene, private, beautiful views in the heart of El Dorado County located at 6400'. Nearest neighbor is 12.5 miles away! Come rest & relax!",
                               site_type: "camping", owner_id: u2.id, max_guests: 10,
                               daily_rate: 45, address: "120 Beatles Pkwy", state: "Nevada", city: "Lake Tahoe",
                               zipcode: "92252", country: "United States",lat: 39.183272, lng: -119.926811,
                               wifi: true, pets_allowed: true, showers: true)

file7 = open('app/assets/images/lt1.jpg')
c7.photo.attach(io: file7, filename: 'lt1.jpg')                              

c8 = Campsite.create(title: "Basin Management Area",
                               description: "On the road with your honey? This area offers a remarkable array of romantic options among its recreational activities. Take a scenic dinner cruise on a paddle boat on Lake Tahoe. Or see it from above on a hot air balloon tour from Lake Tahoe Balloons",
                               site_type: "camping", owner_id: u2.id, max_guests: 14,
                               daily_rate: 50, address: "100 Beach Lane" , state: "Nevada", city: "Lake Tahoe",
                               zipcode: "92252", country: "United States",lat: 39.183000, lng: -119.927100,
                               lake_nearby: true, fire_pits: true, toilets: true
                              )

file8 = open('app/assets/images/lt2.jpg')
c8.photo.attach(io: file8, filename: 'lt2.jpg')

c9 = Campsite.create(title: "Lake Effect",
                               description: "Hosted by
Brian C.
4 private acres adjacent to a University of Vermont-owned natural area. 1.5 miles from the spectacular Island Line Rail Trail connecting to downtown Burlington and the beautiful Champlain Islands..  ",
                               site_type: "cabin", owner_id: u2.id, max_guests: 2,
                               daily_rate: 60, address: "187 Chimney Hill Road", state: "Nevada", city: "Lake Tahoe",
                               zipcode: "92252", country: "United States",lat: 39.183500, lng: -119.926861,
                               wifi: true, fire_pits: true, toilets: true
                              )

file9 = open('app/assets/images/lt3.jpg')
c9.photo.attach(io: file9, filename: 'lt3.jpg')