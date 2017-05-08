class JobMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_posting.subject
  #
  def job_posting(job)
    @specific_job = job
    candidates = Skill.where(position_type: job.position_type)
    @specific_location = Location.find(job.location_id)
    binding.pry
    candidates.each do |candidate|
      @jobseeker = User.find(candidate.id)


      puts "candidate #{@jobseeker.email}"
      #mail to: candidate_email.email

    end



    # mail to: "hernquistdavid@gmail.com"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_accepted.subject
  #
  def job_accepted
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_filled.subject
  #
  def job_filled
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
