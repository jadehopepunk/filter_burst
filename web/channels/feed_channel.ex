defmodule FilterBurst.FeedChannel do
  use FilterBurst.Web, :channel
  require Logger

  def join("feed", _params, socket) do
    {:ok, socket}
  end

  def broadcast_post(post) do
    postQuery = """
      query  {
        post(id: "#{post.id}") {
          id
          text
          userId
          user {
            picture
          }
        }
      }
    """

    {:ok, payload} = postQuery |> Absinthe.run(FilterBurst.Schema)
    FilterBurst.Endpoint.broadcast("feed", "new_post", payload)
  end
end
