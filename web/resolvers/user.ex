# TODO: Move this into it's own file
defmodule Auth0 do
  use Tesla
  require Logger

  plug Tesla.Middleware.BaseUrl, "https://#{Application.get_env(:filter_burst, :auth0)[:domain]}/api/v2"
  plug Tesla.Middleware.Headers, %{"Authorization" => "Bearer #{Application.get_env(:filter_burst, :auth0)[:manage_api_read_token]}"}
  plug Tesla.Middleware.JSON

  @user_fields "user_id,name,picture"

  def user_by_id(user_id) do
    query_params = %{"fields" => @user_fields}
    get("/users/#{user_id}", query: query_params)
  end

  def users_by_ids(user_ids) when length(user_ids) == 1 do
    user_id = List.first user_ids
    [user_by_id(user_id).body]
  end

  def users_by_ids(user_ids) when length(user_ids) > 1 do
    joined_ids = Enum.join(user_ids, " OR ")
    query_params = %{"fields" => @user_fields, "q" => "user_id:(#{joined_ids})"}

    get("/users", query: query_params).body
  end
end

defmodule FilterBurst.Resolvers.User do
  require Logger
  alias Utils.MapUtils

  def batched_by_id(_, ids) do
    Logger.debug("ids: #{inspect(ids)}")

    unique_ids = Enum.uniq(ids)
    Logger.debug("unique_ids: #{inspect(unique_ids)}")

    users = Auth0.users_by_ids(unique_ids)
    Logger.debug("users: #{inspect(users)}")

    # TODO: also need to convert user_id to id (perhaps, or change schema)
    Map.new(users, &{Map.get(&1, "user_id"), MapUtils.map_keys_to_atoms(&1)})
  end
end
