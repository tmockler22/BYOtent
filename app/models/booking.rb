class Booking < ApplicationRecord
  validates :campsite_id, :camper_id, :arrival_date, :depart_date, :num_campers, presence: true
  validate :does_not_overlap_another_booking
  belongs_to :campsite 
  belongs_to :camper, 
    foreign_key: :camper_id, 
    class_name: :User 

  has_one :host, 
    through: :campsite,
    source: :owner 

   def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(campsite_id: self.campsite_id)
      .where.not('arrival_date >= :depart_date OR depart_date <= :arrival_date',
            arrival_date: arrival_date, depart_date: depart_date)
    end

  def does_not_overlap_another_booking
    unless overlapping_bookings.empty?
      errors[:base] <<
        'Booking conflicts with a pre-existing booking'
    end
  end  

end
