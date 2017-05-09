class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

   protect_from_forgery with: :exception
    before_filter :configure_permitted_parameters, if: :devise_controller?



    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :org, :phone_num, :full_name, :address, :city, :state, :zipcode, :photo_url, :avatar])
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :email, :password, :current_password, :phone_num, :full_name, :address, :city, :state, :zipcode, :photo_url, :avatar])

  # before_action :authenticate_user!
    end

  	def after_sign_in_path_for(resource)
            if resource.org == true
              "/organization"
            else
               "/jobseeker"
            end
    end
end
