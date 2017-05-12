class AddPhotoUrlToLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :photo_url, :string
  end
end
