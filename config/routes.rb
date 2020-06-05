Rails.application.routes.draw do
  root to: 'pages#home'
  get "covid", to: 'pages#covid'
  get "fancier", to: 'pages#fancier'
  get "freelance", to: 'pages#freelance'
  get "replastic", to: 'pages#replastic'
  get "cuzu", to: 'pages#cuzu'
  get "30days", to: 'pages#30days'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
