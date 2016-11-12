defmodule FilterBurst.PageController do
  use FilterBurst.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
