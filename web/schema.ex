defmodule FilterBurst.Schema do
  use Absinthe.Schema
  # use Absinthe.Relay.Schema
  require Logger

  object :user do
    field :id, :string
    field :name, :string
    field :picture, :string
  end

  enum :post_source do
    value :twitter
    value :facebook
  end

  object :post do
    field :id, :id
    field :user_id, :string
    field :text, :string
    field :source, :post_source, description: "The external platform from which this post originates. We hopefully also have an origin url."
    field :origin_url, :string, description: "The original URL of this post on some external source platform. Also see source field for which platform."
    field :user, :user do
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

    field :post, :post do
      arg :id, non_null(:id)
      resolve &FilterBurst.Resolvers.Post.get_post/3
    end
  end
end
