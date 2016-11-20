defmodule FilterBurst.Api.UserController do
  use FilterBurst.Web, :controller

  def create(conn, _params) do
    render conn, "index.html"
  end

end
