class CreatePositions < ActiveRecord::Migration[5.0]
  def change
    create_table :positions do |t|
      t.string :name
      t.text :description
      t.integer :qualification

      t.timestamps
    end
  end
end
