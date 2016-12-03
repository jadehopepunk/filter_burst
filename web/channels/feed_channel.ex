defmodule FilterBurst.FeedChannel do
  use FilterBurst.Web, :channel
  require Logger

  def join("feed", _params, socket) do
    {:ok, socket}
  end

  def broadcast_post(post) do
    Logger.info "broadcast post: #{inspect(post)}"

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

    Logger.info "broadcast payload: #{inspect(payload)}"

    FilterBurst.Endpoint.broadcast("feed", "new_post", payload)
  end
end
