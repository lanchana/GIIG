class Api::OrganizationsController < ApplicationController
  def index
    organization = current_user
    @jobs = Job.where(user_id: organization.id)

    # jobseeker = User.where(user_id: jobseeker.id)
    render json: @jobs.to_json(include: [:location, :jobseeker])

  end

  def show
    @job = Job.find(params[:id])
    @user = User.find(@job.user_id)
    # binding.pry
    render json: @user
  end
end
