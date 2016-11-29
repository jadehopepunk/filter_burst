defmodule FilterBurst.Resolvers.User do
  require Logger

  def batched_by_id(_, ids) do
    Logger.debug("ids: #{inspect(ids)}")

    unique_ids = Enum.uniq(ids)
    Logger.debug("unique_ids: #{inspect(unique_ids)}")


    # import Ecto.Query
    # model
    # |> where([m], m.id in ^ids)
    # |> Repo.all
    # |> Map.new(&{&1.id, &1})
    fred = %{id: "facebook|10153926249487611", name: "Fred Flintstone", picture: "abc"}
    %{"facebook|10153926249487611" => fred}
  end
end
