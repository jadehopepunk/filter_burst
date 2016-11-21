defmodule FilterBurst.Resolvers.FacebookUser do
  alias FilterBurst.FacebookUser
  alias FilterBurst.Repo

  def update(_parent, params, _info) do
    changeset = FacebookUser.changeset(%FacebookUser{}, params.facebook_user)
    case Repo.insert(changeset) do
      {:ok, facebook_user} -> {:ok, facebook_user}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end
end
