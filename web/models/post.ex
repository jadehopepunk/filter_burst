defmodule FilterBurst.Post do
  use FilterBurst.Web, :model

  schema "posts" do
    field :user_id, :string
    field :text, :string
    field :source, :string
    field :origin_url, :string

    timestamps
  end

  def changeset_for_create(struct, params \\ %{}) do
    cast(struct, params, [:user_id, :text])
  end
end
