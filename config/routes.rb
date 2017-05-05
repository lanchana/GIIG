Rails.application.routes.draw do
  resources :positions
  resources :locations
  resources :jobs
  resources :skills
  devise_for :users

  root 'client#index'
  get '*path', to: 'client#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
