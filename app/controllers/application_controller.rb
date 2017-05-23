class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :authenticate_user!

   protect_from_forgery with: :exception
    before_action :configure_permitted_parameters, if: :devise_controller?



    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :org, :phone_num, :full_name, :address, :city, :state, :zipcode, :photo_url, :avatar])
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :email, :password, :current_password, :phone_num, :full_name, :address, :city, :state, :zipcode, :photo_url, :avatar])


    end

  	def after_sign_in_path_for(resource)
            if resource.org == true
              "/organization"
            elsif resource.phone_num.to_s.empty?
              "/users/edit"
            else
               "/jobseeker"
            end
    end
end
