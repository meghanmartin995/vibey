Rails.application.routes.draw do
  root to: 'pages#home'
  get "covid", to: 'pages#covid'
  get "fancier", to: 'pages#fancier'
  get "freelance", to: 'pages#freelance'
  get "replastic", to: 'pages#replastic'
  get "fonts", to: 'pages#fonts'
  get "thirtydays", to: 'pages#thirtydays'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
