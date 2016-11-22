defmodule FilterBurst.Resolvers.FacebookUser do
  alias FilterBurst.FacebookUser
  # alias FilterBurst.Repo

  def update(_parent, params, _info) do
    {id, without_id} = Map.pop(params.facebook_user, :id)
    user_params = Map.put(without_id, :facebook_user_id, id)

    changeset = FacebookUser.changeset(%FacebookUser{}, user_params)
    case FilterBurst.Repo.insert(changeset, on_conflict: :nothing) do
      {:ok, facebook_user} -> {:ok, facebook_user}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end
end
