class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.integer :org_id
      t.integer :jobseeker_id
      t.float :amount
    end
  end
end
