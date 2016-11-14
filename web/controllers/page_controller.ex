defmodule FilterBurst.PageController do
  use FilterBurst.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def certbot(conn, _params) do
    conn
    |> send_resp(200, "BrnJQMR0_YgulKCHBx5w4WgzzU3f-h5_kLY6C83_xFg.EB8a_7AKIgSI6AnjX1h-foe7zbWNIPSzqYYM4q14uUo")
  end
end
