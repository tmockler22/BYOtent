class ChangeColName < ActiveRecord::Migration[5.2]
  def change
    remove_column(:campsites, :type)
    add_column(:campsites, :site_type, :string, null: false) 

  end
end
