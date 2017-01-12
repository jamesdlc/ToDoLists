Rails.application.routes.draw do
  root 'site#angular'

  get '*path', to: 'site#angular'

# api routes rendering in JSON format
  scope '/api', defaults: { format: :json } do
    resources :lists, except: [:new, :edit] do
      resources :items, except: [:new, :edit]
    end
  end

end
