class Api::JobsController < ApplicationController
    # after_commit :job_posting_notification, on: :create

    def index
        location = Location.find(params[:location_id])
        @jobs = location.jobs.all
        render json: @jobs
    end

    def show
        @location = Location.find(params[:location_id])
        @job = @location.jobs.find(params[:id])
        # binding.pry
        render json: @job
    end

    def create
        @job = Job.new(job_params)
        # binding.pry
        if @job.save
            # JobMailer.job_posting(@job).deliver
            binding.pry
            render json: @job, status: :created
        else
            render json: @job.errors, status: :unprocessable_entity
        end
    end

    def update

        @location = Location.find(params[:location_id])
        @job = @location.jobs.find(params[:id])
        if @job.update(job_params)
            render json: @job, status: :ok
        else
            render json: @job.errors, status: :unprocessable_entity
        end

        # binding.pry
    end

    def destroy
        @location = Location.find(params[:location_id])
        @job = @location.jobs.find(params[:id])
        @job.destroy
        render json: '', status: :no_content
        # binding.pry

    end

    private

    def job_params
        params.require(:job)
              .permit(:position_type, :description, :start_time, :end_time, :date, :hourly_wage, :actual_start_time, :actual_end_time )
              .merge(user_id: current_user.id, location_id: params[:location_id])
    end

    # def job_posting_notification
    #     JobMailer.job_posting(self).deliver
    # end
end
