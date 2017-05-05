json.extract! location, :id, :business_type, :name, :address, :city, :state, :zipcode, :description, :phone_num, :user_id, :created_at, :updated_at
json.url location_url(location, format: :json)
