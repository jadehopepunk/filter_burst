defmodule FilterBurst.Repo.Migrations.AddOriginToPosts do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :source, :string
      add :origin_url, :string
    end
  end
end
