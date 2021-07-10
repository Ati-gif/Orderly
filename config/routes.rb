Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :rooms do
      resources :categories
    end 
    resources :categories do
      resources :products do
      end
    end
  end
end
