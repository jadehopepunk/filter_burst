defmodule FilterBurst.User do
  use FilterBurst.Web, :model

  schema "users" do
    timestamps
    has_many :facebook_users, FilterBurst.FacebookUser
  end
end
