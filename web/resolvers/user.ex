defmodule FilterBurst.Resolvers.User do
  require Logger
  alias Utils.MapUtils
  alias Utils.Auth0

  def batched_by_id(_, ids) do
    unique_ids = Enum.uniq(ids)
    users = Auth0.users_by_ids(unique_ids)

    Map.new(users, &{Map.get(&1, "user_id"), MapUtils.map_keys_to_atoms(&1)})
  end
end
