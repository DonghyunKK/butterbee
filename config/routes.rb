Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :cakes, only: [:create, :index, :show, :destroy, :update]
end
