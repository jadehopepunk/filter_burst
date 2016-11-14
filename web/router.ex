defmodule FilterBurst.Router do
  use FilterBurst.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FilterBurst do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/.well-known/acme-challenge/BrnJQMR0_YgulKCHBx5w4WgzzU3f-h5_kLY6C83_xFg", PageController, :certbot
  end

  # Other scopes may use custom stacks.
  # scope "/api", FilterBurst do
  #   pipe_through :api
  # end
end
