class Campsite < ApplicationRecord
  validates :title,
           :description,
           :site_type,
           :owner_id,
           :max_guests,
           :daily_rate,
           :address,
           :state,
           :zipcode,
           :country, 
           :lat, 
           :lng, 
           presence: true 

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User   
    
  has_one_attached :photo
end


