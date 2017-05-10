class Job < ApplicationRecord
    # belongs_to :jobseeker, class_name: 'User'
    belongs_to :location
end
