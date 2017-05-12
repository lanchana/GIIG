class Api::OrganizationsController < ApplicationController


  require 'stripe'

  def index
    organization = current_user
    @jobs = Job.where(user_id: organization.id)

    # jobseeker = User.where(user_id: jobseeker.id)
    render json: @jobs.to_json(include: [:location, :jobseeker])
  end

  def show
    amount = params[:id]
    @bill = Bill.new(org_id: current_user.id, jobseeker_id: 0, amount: amount.to_i) 
    if @bill.save
            render json: @bill
        else
            render json: @bill.errors, status: :unprocessable_entity
        end
    # @job = Job.find(params[:id])
    # @user = User.find(@job.user_id)
    
  end



end
