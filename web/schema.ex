defmodule FilterBurst.Schema do
  use Absinthe.Schema
  # use Absinthe.Relay.Schema
  require Logger

  def user_for_post(post, _params, _info) do
    {:ok, %{id: "123", name: "Fred Flintstone", picture: "abc"}}
  end

  object :user do
    field :id, :string
    field :name, :string
    field :picture, :string
  end

  object :post do
    field :id, :id
    field :user_id, :string
    field :text, :string
    field :user, :user do
      # resolve &user_for_post/3
      resolve fn post, _, _ ->
        batch({FilterBurst.Resolvers.User, :batched_by_id}, post.user_id, fn batch_results ->
          {:ok, Map.get(batch_results, post.user_id)}
        end)
      end
    end
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
