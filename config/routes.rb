Rails.application.routes.draw do
  get 'charges/new'

  get 'charges/create'

  # resources :positions
  # resources :locations
  # resources :jobs
  # resources :skills
#   devise_for :users, controllers: {
#     registrations: 'users/registrations'
# }

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks", registrations: 'users/registrations' }

  resources :charges, only: [:new, :create]

  namespace :api do
      resources :positions
      resources :locations do
        resources :jobs
      end
      resources :skills
      resources :jobseekers
      resources :organizations
      resources :applicant

  end

  # root 'client#index'
  # get '*path', to: 'client#index'

  root 'home#index'
  get '*path', to: 'client#index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
