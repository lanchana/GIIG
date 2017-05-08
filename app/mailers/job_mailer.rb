class JobMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.job_mailer.job_posting.subject
  #
  def job_posting(job)
    @greeting = "hi"

    mail to: "hernquistdavid@gmail.com"
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
