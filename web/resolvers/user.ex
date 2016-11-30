# TODO: Move this into it's own file
defmodule Auth0 do
  use Tesla
  require Logger

  plug Tesla.Middleware.BaseUrl, "https://#{Application.get_env(:filter_burst, :auth0)[:domain]}/api/v2"
  plug Tesla.Middleware.Headers, %{"Authorization" => "Bearer #{Application.get_env(:filter_burst, :auth0)[:manage_api_read_token]}"}
  plug Tesla.Middleware.JSON

  def user_by_id(user_id) do
    get("/users/#{user_id}")
  end

  def users_by_ids(user_ids) do
    # TODO: if there is only 1 id, probably call the other method

    joined_ids = Enum.join(user_ids, " OR ")
    user_query = "user_id:(#{joined_ids})"
    query_params = %{"fields" => "user_id,name,picture", "q" => user_query}
    query_string = URI.encode_query(query_params)

    Logger.debug("query_string: #{query_string}")
    get("/users?#{query_string}")
  end
end

defmodule FilterBurst.Resolvers.User do
  require Logger

  # TODO: move into a handy module
  def map_keys_to_atoms(map) do
    for {key, val} <- map, into: %{}, do: {String.to_atom(key), val}
  end

  def batched_by_id(_, ids) do
    Logger.debug("ids: #{inspect(ids)}")

    unique_ids = Enum.uniq(ids)
    Logger.debug("unique_ids: #{inspect(unique_ids)}")

    tesla_result = Auth0.users_by_ids(ids)
    users = tesla_result.body
    Logger.debug("users: #{inspect(users)}")

    # TODO: also need to convert user_id to id (perhaps, or change schema)
    Map.new(users, &{Map.get(&1, "user_id"), map_keys_to_atoms(&1)})

    # import Ecto.Query
    # model
    # |> where([m], m.id in ^ids)
    # |> Repo.all
    # |> Map.new(&{&1.id, &1})
    # fred = %{id: "facebook|10153926249487611", name: "Fred Flintstone", picture: "abc"}
    # %{"facebook|10153926249487611" => fred}
  end
end
