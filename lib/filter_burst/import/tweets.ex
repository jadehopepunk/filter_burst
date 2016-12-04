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
      for message <- ExTwitter.stream_filter([track: "apple"]) do
        case message do
          tweet = %ExTwitter.Model.Tweet{} ->
            IO.puts "tweet = #{tweet.text}"

          deleted_tweet = %ExTwitter.Model.DeletedTweet{} ->
            IO.puts "deleted tweet = #{deleted_tweet.status[:id]}"

          limit = %ExTwitter.Model.Limit{} ->
            IO.puts "limit = #{limit.track}"

          stall_warning = %ExTwitter.Model.StallWarning{} ->
            IO.puts "stall warning = #{stall_warning.code}"

          _ ->
            IO.inspect message
        end
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
