defmodule FilterBurst.Resolvers.FacebookUser do
  def update(_parent, attributes, _info) do
    IO.inspect attributes
    {:ok, %{id: attributes.id, name: 'output'}}
  end
end
