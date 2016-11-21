defmodule FilterBurst.Schema do
  use Absinthe.Schema
  # use Absinthe.Relay.Schema

  @desc "A user record fetched from facebook"
  object :facebook_user do
    field :id, :string
    field :name, :string
    field :email, :string
    field :access_token, :string
    field :expires_in, :integer
  end

  mutation do
    field :update_facebook_user, type: :facebook_user do
      arg :id, non_null(:string)
      arg :name, :string
      arg :email, :string
      arg :access_token, :string
      arg :expires_in, :integer

      resolve &FilterBurst.Resolvers.FacebookUser.update/3
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
