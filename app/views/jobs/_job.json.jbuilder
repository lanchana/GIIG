json.extract! job, :id, :position_type, :description, :start_time, :end_time, :date, :hourly_wage, :actual_start_time, :actual_end_time, :user_id, :location_id, :created_at, :updated_at
json.url job_url(job, format: :json)
