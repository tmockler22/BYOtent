Rails.application.routes.draw do
   root to: 'static_pages#root'

   namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :index, :show]
      resource :session, only: [:create, :destroy]
      resources :bookings, only: [:update, :destroy]
      resources :campsites, only: [:create, :index, :show] do 
         resources :bookings, only: [:create, :index]
      end
   end
   
   get 'api/user/:camper_id/bookings', to: 'api/bookings#bookings_by_user'  
end
