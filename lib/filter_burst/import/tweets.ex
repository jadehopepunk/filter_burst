defmodule FilterBurst.Import.Tweets do
  use GenServer

  def start do
    GenServer.start(__MODULE__, %{stream_pid: nil}, name: __MODULE__)
    IO.puts "FilterBurst.Import.Tweets started"
  end

  # Client API

  def start_stream() do
    GenServer.call(__MODULE__, :start_stream)
  end

  def stop_stream() do
    GenServer.call(__MODULE__, :stop_stream)
  end

  # Server handlers

  def handle_call(:start_stream, _from, state) do
    IO.puts "handle start stream"

    pid = spawn_link fn ->
      for tweet <- ExTwitter.stream_filter([track: "apple"]) do
        IO.puts "received tweet: #{inspect(tweet)}"
      end
    end

    {:reply, :ok, Map.put(state, :stream_pid, pid)}
  end

  def handle_call(:stop_stream, _from, state) do
    IO.puts "handle stop stream"

    ExTwitter.stream_control(state.stream_pid, :stop)

    {:reply, :ok, Map.put(state, :stream_pid, nil)}
  end
end
