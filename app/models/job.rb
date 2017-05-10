class Job < ApplicationRecord
    belongs_to :jobseeker, optional: true, class_name: 'User'
    belongs_to :location
end
