Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    # Don't define route if we don't plan to use it.
    get "products", to: "products#index"
    get "categories", to: "products#get_categories"
    get "categories/:category", to: "products#category"
  end
end
