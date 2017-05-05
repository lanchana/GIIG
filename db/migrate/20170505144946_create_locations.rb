class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :business_type
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.text :description
      t.string :phone_num
      t.integer :user_id

      t.timestamps
    end
  end
end
