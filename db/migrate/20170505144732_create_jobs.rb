class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :position_type
      t.text :description
      t.string :start_time
      t.string :end_time
      t.date :date
      t.float :hourly_wage
      t.string :actual_start_time
      t.string :actual_end_time
      t.integer :user_id
      t.integer :location_id

      t.timestamps
    end
  end
end
