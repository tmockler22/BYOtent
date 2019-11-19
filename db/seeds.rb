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
                               zipcode: "49684", country: "United States",lat: 44.763569, lng: -85.629777)

file1 = open('app/assets/images/c1.jpg')
c1.photo.attach(io: file1, filename: 'c1.jpg')                              

c2 = Campsite.create(title: "Paradise under the stars.",
                               description: "Tranquil campsite, walking distance to beach.",
                               site_type: "camping", owner_id: u2.id, max_guests: 12,
                               daily_rate: 30, address: "208 Sandy Pines Road" , state: "Michigan", city: "Traverse City",
                               zipcode: "49684", country: "United States",lat: 44.763570,lng: -85.631837)

file2 = open('app/assets/images/c2.jpg')
c2.photo.attach(io: file2, filename: 'c2.jpg')

c3 = Campsite.create(title: "Amazing Tiny Beach Cabin.",
                               description: "Come enjoy our well appointed beach cabin for a peaceful stay. Perfect for couples.",
                               site_type: "cabin", owner_id: u2.id, max_guests: 2,
                               daily_rate: 50, address: "708 Mulberry Lane", state: "Michigan", city: "Traverse City",
                               zipcode: "49684", country: "United States", lat: 44.765168, lng: -85.622944)

file3 = open('app/assets/images/tiny_cabin.jpg')
c3.photo.attach(io: file3, filename: 'tiny_cabin.jpg')