class CreateCampsites < ActiveRecord::Migration[5.2]
  def change
    create_table :campsites do |t|
      t.string :title, null: false
      t.text :description, null: false 
      t.string :type, null: false 
      t.integer :owner_id, null: false 
      t.integer :max_guests, null: false 
      t.integer :daily_rate, null: false 
      t.string :address, null: false 
      t.string :state, null: false 
      t.string :zipcode, null: false 
      t.string :country, null: false 
      t.float :lat, null: false 
      t.float :lng, null: false
      t.boolean :pets_allowed, default: false 
      t.boolean :lake_nearby, default: false 
      t.boolean :wifi, default: false 
      t.boolean :fire_pits, default: false 
      t.boolean :showers, default: false 
      t.boolean :toilets, default: false 
      t.boolean :portable_water, default: false 
      t.boolean :RV_hookup, default: false 
      t.boolean :RV_sanitation, default: false 
      t.boolean :picnic_table, default: false 
      t.boolean :trash, default: false 
      t.timestamps
    end
  end
end
