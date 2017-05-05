class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.string :position_type
      t.integer :user_id
      t.float :rating

      t.timestamps
    end
  end
end
