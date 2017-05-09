class Api::OrganizationsController < ApplicationController
  def index
    organization = current_user
    @jobs = Job.where(user_id: organization.id)

    # jobseeker = User.where(user_id: jobseeker.id)


    render json: @jobs.to_json(include: [:location, :jobseeker])

  end
end
