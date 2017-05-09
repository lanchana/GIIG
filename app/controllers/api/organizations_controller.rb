class Api::OrganizationsController < ApplicationController
  def index
    organization = current_user
    @jobs = Job.where(user_id: organization.id)

    render json: @jobs
  end
end
