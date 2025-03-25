Rails.application.routes.draw do
  root "home#index"

  get "signin" => "sessions#create", as: :signup
  post "signin", to: "sessions#create"
  get "home", to: "home#index"
  get "signout", to: "sessions#destroy", as: :signout

  get "cypher", to: "cypher#index"
  get "musicians", to: "artists#musician_index"
  get "cinematographers", to: "artists#cinematographer_index"
  get "artists/:id", to: "artists#show", as: :artist
  post "artists/:id/edit", to: "artists#update", as: :edit_artist

  get "photo_gallery", to: "photos#index"
  get "photos/:id", to: "photos#show", as: :photo


  resources :album_collections
  resources :comments, only: [ :show ] do
    resource :like, only: [ :create ], controller: "likes"
  end
  namespace :api do
    namespace :v1 do
      resources :posts, only: [ :index, :create ]

      post "posts/:id/like", to: "api/v1/posts#edit"
    end
  end
  resources :posts, only: [ :show ] do
    resource :like, only: [ :create ], controller: "likes"
  end

  resources :users
  resources :videos, only: [ :show ] do
    resource :like, only: [ :create ], controller: "likes"
  end
  resources :photos, only: [ :show ] do
    resource :like, only: [ :create ], controller: "likes"
  end
  resources :tracks, only: [ :show ] do
    resource :like, only: [ :create ], controller: "likes"
  end
  resources :albums
  resources :artists
  post "musicians/:id/like", to: "likes#create"
  post "cinematographers/:id/like", to: "likes#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
