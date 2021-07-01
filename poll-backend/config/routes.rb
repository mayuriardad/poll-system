Rails.application.routes.draw do
    resources :tasks
    resources :users
    resources :polls
    resources :votes
    post '/login', to: 'users#login', as: 'login'
    post 'vote', action: :vote, controller: 'votes'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
