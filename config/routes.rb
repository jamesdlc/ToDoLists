Rails.application.routes.draw do
  root 'site#angular'


# api routes rendering in JSON format
  scope '/api', defaults: { format: :json } do
    resources :todolists, except: [:new, :edit] do
      resources :listitems, except: [:new, :edit]
    end
  end


  get '*path', to: 'site#angular'

end
