defmodule FilterBurst.Schema do
  use Absinthe.Schema
  # use Absinthe.Relay.Schema

  object :post do
    field :id, :id
    field :user_id, :string
    field :text, :string
  end

  mutation do
    field :create_post, type: :post do
      arg :user_id, non_null(:string)
      arg :text, non_null(:string)

      resolve &FilterBurst.Resolvers.Post.create/3
    end
  end

  query do
    field :feed, list_of(:post) do
      resolve &FilterBurst.Resolvers.Post.feed/3
    end
  end
end
