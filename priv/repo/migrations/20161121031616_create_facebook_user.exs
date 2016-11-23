defmodule FilterBurst.Repo.Migrations.CreateFacebookUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      timestamps
    end

    create table(:facebook_users) do
      add :facebook_user_id, :string, null: false
      add :name, :string
      add :email, :string
      add :access_token, :string
      add :expires_in, :integer
      add :picture_url, :string
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps
    end

    create unique_index(:facebook_users, [:facebook_user_id])
  end
end
