class JobMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_posting.subject
  #
  def job_posting(job)
    @specific_job = job
    @specific_location = Location.find(job.location_id)
   
    candidates = Skill.where(position_type: job.position_type)
    # binding.pry
    candidates.each do |candidate|
      @jobseeker = User.find(candidate.user_id)


      puts "candidate #{@jobseeker.email}"
      mail to: @jobseeker.email
    end



    # mail to: "hernquistdavid@gmail.com"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_accepted.subject
  #
  def job_accepted(job, jobseeker)
    @specific_job = job

    @jobseeker = jobseeker

    @specific_location = Location.find(job.location_id)

    mail to: @jobseeker.email
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_filled.subject
  #
  def job_filled(job, jobseeker)
    @specific_job = job
    @jobseeker = jobseeker
    @specific_location = Location.find(job.location_id)

    @org = User.find(@specific_location.user_id)

    mail to: @org.email
  end
end
