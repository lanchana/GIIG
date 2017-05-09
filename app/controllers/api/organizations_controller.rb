class Api::OrganizationsController < ApplicationController
  def index
    organization = current_user
    @jobs = Job.where(user_id: organization.id)




    render json: @jobs.to_json(include: :location )
  end
end
