defmodule FilterBurst.Schema do
  use Absinthe.Schema
  # use Absinthe.Relay.Schema

  @desc "An item"
  object :item do
    field :id, :id
    field :name, :string
  end

  # Example data
  @items %{
    "foo" => %{id: "foo", name: "Foo"},
    "bar" => %{id: "bar", name: "Bar"}
  }

  query do
    field :item, :item do
      arg :id, non_null(:id)
      resolve fn %{id: item_id}, _ ->
        {:ok, @items[item_id]}
      end
    end
  end

  # mutation do
  #   @desc "This is just a prototype to see how this shit works"
  #   field :update_item, type: :item do
  #     arg :id, non_null(:id)
  #     arg :name, non_null(:string)
  #
  #     resolve &Drft.Resolvers.Item.update/3
  #   end
  # end

end
