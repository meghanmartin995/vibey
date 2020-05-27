Rails.application.routes.draw do
  root to: 'pages#home'
  get "covid", to: 'pages#covid'
  get "fancier", to: 'pages#fancier'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
