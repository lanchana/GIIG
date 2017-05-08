class AddJobseekerIdToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :jobseeker_id, :integer
  end
end
