class Api::ApplicantController < ApplicationController

  def show
    @applicant = User.find(params[:id])


    render json: @applicant
  end

	def edit

		applicant = User.find(params[:id])
		@jobs = Job.where(jobseeker_id: applicant.id)

		render json: @jobs
	end

	def update
		puts "Why are you here?"
	end

end
