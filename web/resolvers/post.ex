defmodule FilterBurst.Resolvers.Post do
  alias FilterBurst.Post
  alias FilterBurst.Repo
  require Logger
  import Ecto.Query, only: [from: 2]

  def create(_parent, params, _info) do
    changeset = Post.changeset_for_create(%Post{}, params)
    case Repo.insert(changeset) do
      {:ok, post} ->
        FilterBurst.FeedChannel.broadcast_post(post)
        {:ok, post}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end

  def feed(_parent, _params, _info) do
    query = from p in Post,
      select: p,
      limit: 10,
      order_by: [desc: p.inserted_at]

    {:ok, Repo.all(query)}
  end
end
