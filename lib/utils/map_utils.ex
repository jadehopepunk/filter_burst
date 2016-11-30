defmodule Utils.MapUtils do

  # Implementation based on: http://stackoverflow.com/a/31990445/175830
  def map_keys_to_atoms(map) do
    for {key, val} <- map, into: %{}, do: {String.to_atom(key), val}
  end

  def map_keys_to_strings(map) do
    for {key, val} <- map, into: %{}, do: {Atom.to_string(key), val}
  end

end
