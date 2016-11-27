defmodule FilterBurst.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :user_id, :string
      add :text, :text

      timestamps
    end

    create index(:posts, [:user_id])
    create index(:posts, [:inserted_at])
  end
end
