defmodule FilterBurst.Schema do
  use Absinthe.Schema
  # use Absinthe.Relay.Schema

  @desc "A filter burst user account"
  object :user do
    field :id, :id
    field :facebook_users, list_of(:facebook_user)
  end

  @desc "A user record fetched from facebook"
  object :facebook_user do
    field :id, :id
    field :facebook_user_id, :string
    field :name, :string
    field :email, :string
    field :access_token, :string
    field :expires_in, :integer
    field :picture_url, :string
    field :user, :user
  end

  input_object :facebook_user_input do
    field :facebook_user_id, non_null(:string)
    field :name, :string
    field :email, :string
    field :access_token, :string
    field :expires_in, :integer
    field :picture_url, :string
  end

  mutation do
    field :upsert_facebook_user, type: :facebook_user do
      arg :facebook_user, non_null(:facebook_user_input)

      resolve &FilterBurst.Resolvers.FacebookUser.upsert/3
    end
  end


  # Example data
  @facebook_users %{
    "123" => %{id: "123", name: "Craig Ambrose"}
  }

  query do
    field :facebook_user, :facebook_user do
      arg :id, non_null(:string)
      resolve fn %{id: facebook_user_id}, _ ->
        {:ok, @facebook_users[facebook_user_id]}
      end
    end
  end
end
