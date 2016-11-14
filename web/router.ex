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
    get "/.well-known/acme-challenge/3Z7gsxr7XQ6cGmLacIDJaj40OI-nM0SL5cl8U1Wg-f4", PageController, :certbot
  end

  # Other scopes may use custom stacks.
  # scope "/api", FilterBurst do
  #   pipe_through :api
  # end
end
