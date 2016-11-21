defmodule FilterBurst.Resolvers.FacebookUser do
  alias FilterBurst.FacebookUser
  # alias FilterBurst.Repo

  def update(_parent, params, _info) do
    # facebook_user_params = params.facebook_user |> Map.put(:user_id, params.facebook_user.id)
    changeset = FacebookUser.changeset(%FacebookUser{}, %{user_id: "123"})
    case FilterBurst.Repo.insert(changeset) do
      {:ok, facebook_user} -> {:ok, facebook_user}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end
end
