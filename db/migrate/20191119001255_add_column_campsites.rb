class AddColumnCampsites < ActiveRecord::Migration[5.2]
  def change
    add_column(:campsites, :city, :string, null: false) 
  end
end
