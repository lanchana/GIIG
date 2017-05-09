class Api::JobseekersController < ApplicationController

  def index
  	array_jobs = Array.new
  	jobseeker = current_user
  	skills = Skill.where(user_id: jobseeker.id)
  	

  	skills.each do |skill, index|
  		array_jobs = (array_jobs << Job.where(position_type: skill.position_type)).flatten!
  	end

  	@jobs = array_jobs 


  		
   	
	  render json: @jobs
  end

end
