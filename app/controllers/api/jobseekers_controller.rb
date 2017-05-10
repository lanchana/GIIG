class Api::JobseekersController < ApplicationController

  def index
  	jobseeker = current_user
  	skills = Skill.where(user_id: jobseeker.id)

    position_types = skills.pluck(:position_type)
    @jobs = Job.where(position_type: position_types)

  	# skills.each do |skill|
  	# 	array_jobs = (array_jobs << Job.where(position_type: skill.position_type)).flatten!
  	# end

	  render json: @jobs.to_json(include: :location)
  end

   def update
        @jobseeker = current_user
        @job = Job.find(params[:id])


        @job.update_attribute :jobseeker_id, current_user.id

        if @job.jobseeker_id?

          JobMailer.job_accepted(@job, @jobseeker).deliver
          JobMailer.job_filled(@job, @jobseeker).deliver
          render json: @job, status: :ok
        else
          render json: @job.errors, status: :unprocessable_entity
        end

    end

    # private

    # def job_params
    #     params.require(:job)
    #           .permit(:position_type, :description, :start_time, :end_time, :date, :hourly_wage, :actual_start_time, :actual_end_time, :location_id)
    #           .merge(jobseeker_id: current_user.id)
    # end

end
