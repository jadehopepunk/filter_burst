defmodule FilterBurst.FeedChannel do
  use FilterBurst.Web, :channel

  def join("feed", _params, socket) do
    {:ok, socket}
  end
end
