defmodule FilterBurst.FeedChannel do
  use FilterBurst.Web, :channel
  require Logger

  def join("feed", _params, socket) do
    {:ok, socket}
  end

  def broadcast_post(post) do
    Logger.info "broadcast post: #{inspect(post)}"

  end
end
