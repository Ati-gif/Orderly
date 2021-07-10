Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    
    resources :rooms do
      get '/rooms', to: 'rooms#index'
      resources :categories do 
        get 'categories', to: 'categories#index'
        resources :products do
          get '/products', to: 'products#index'
        end 
      end
    end
  end
end
