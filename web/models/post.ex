defmodule FilterBurst.Post do
  use FilterBurst.Web, :model

  schema "posts" do
    field :user_id, :string
    field :text, :string

    timestamps
  end

  # def changeset(struct, params \\ %{}) do
  #   cast(struct, params, [:facebook_user_id, :name, :email, :access_token, :expires_in, :picture_url])
  # end
end
