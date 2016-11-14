defmodule FilterBurst.PageController do
  use FilterBurst.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def certbot(conn, _params) do
    conn
    |> send_resp(201, "3Z7gsxr7XQ6cGmLacIDJaj40OI-nM0SL5cl8U1Wg-f4.EB8a_7AKIgSI6AnjX1h-foe7zbWNIPSzqYYM4q14uUo")
  end
end
