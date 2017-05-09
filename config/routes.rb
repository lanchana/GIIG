Rails.application.routes.draw do
  # resources :positions
  # resources :locations
  # resources :jobs
  # resources :skills
  devise_for :users, controllers: {
    registrations: 'users/registrations'
}

  namespace :api do
      resources :positions
      resources :locations do
        resources :jobs
      end
      resources :skills
      resources :jobseekers
  end

  root 'client#index'
  get '*path', to: 'client#index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
