
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    
    # resources :users, only: [:create, :show] do
    #   resources :reservations, only: [:index, :create, :destroy, :update]
    #   resources :reviews, only: [:index, :create, :destroy, :update]
    #   resources :listings, only: [:index, :show, :create, :destroy, :update]
    # end
    # resources :listings, only: [:index, :show]

    resources :users, only: [:create, :show]
    resources :reservations, only: [:show, :create, :destroy, :update]
    resources :reviews, only: [:create, :destroy, :update]
    resources :listings, only: [:index, :show, :create, :destroy, :update]

    #should not need to nest ':create', since we CAN block users from viewing
    # the create page IF they're not logged in
  end
  
  root to: 'static_pages#root'
end
