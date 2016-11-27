defmodule FilterBurst.Resolvers.Post do
  alias FilterBurst.Post
  alias FilterBurst.Repo
  require Logger

  def create(_parent, params, _info) do
    changeset = Post.changeset_for_create(%Post{}, params)
    case Repo.insert(changeset) do
      {:ok, facebook_user} -> {:ok, facebook_user}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end
end
