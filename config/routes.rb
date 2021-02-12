Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/pricelist', to: 'pages#pricelist', as: 'pricelist'
  get '/faq', to: 'pages#faq', as: 'faq'
  get '/cake_order', to: 'pages#cake_order', as: 'cake_order'
  get '/cupcake_order', to: 'pages#cupcake_order', as: 'cupcake_order'
  resources :cakes
  resources :cupcakes
end
