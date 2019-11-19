class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :campsite_id, null: false 
      t.integer :camper_id, null: false 
      t.integer :num_campers, null: false 
      t.date :arrival_date, null: false 
      t.date :depart_date, null: false 
      t.timestamps
    end
  end
end
