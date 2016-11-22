defmodule FilterBurst.Resolvers.FacebookUser do
  alias FilterBurst.FacebookUser
  # alias FilterBurst.Repo

  def update(_parent, params, _info) do
    changeset = FacebookUser.changeset(%FacebookUser{}, params.facebook_user)

    {_, without_id} = Map.pop(params.facebook_user, :facebook_user_id)
    on_conflict = [set: Enum.into(without_id, [])]
    
    case FilterBurst.Repo.insert(changeset, on_conflict: on_conflict, conflict_target: :facebook_user_id) do
      {:ok, facebook_user} -> {:ok, facebook_user}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end
end
