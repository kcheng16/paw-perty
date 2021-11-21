# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

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
