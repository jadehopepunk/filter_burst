defmodule FilterBurst.Resolvers.FacebookUser do
  alias FilterBurst.FacebookUser
  # alias FilterBurst.Repo

  def upsert(_parent, params, _info) do
    facebook_user_params = params.facebook_user
    changeset = FacebookUser.changeset(%FacebookUser{}, facebook_user_params)

    case FilterBurst.Repo.insert(changeset, conflict_params_without_key(facebook_user_params, :facebook_user_id)) do
      {:ok, facebook_user} -> {:ok, facebook_user}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end

  defp conflict_params_without_key(attributes, key_name) do
    {_, without_id} = Map.pop(attributes, key_name)
    on_conflict = [set: Enum.into(without_id, [])]
    [on_conflict: on_conflict, conflict_target: key_name]
  end

end
