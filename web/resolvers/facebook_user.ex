defmodule FilterBurst.Resolvers.FacebookUser do
  def update(_parent, attributes, _info) do
    IO.inspect attributes
    {:ok, %{user_id: attributes.user_id, name: 'output'}}
  end
end
