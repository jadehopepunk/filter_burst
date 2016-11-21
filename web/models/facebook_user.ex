defmodule FilterBurst.FacebookUser do
  use FilterBurst.Web, :model

  schema "facebook_users" do
    field :user_id, :string
    field :name, :string
    field :email, :string
    field :access_token, :string
    field :expires_in, :integer
    field :picture_url, :string

    timestamps
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:user_id, :name, :email, :access_token, :expires_in, :picture_url])
    |> validate_required([:user_id])
  end
end
