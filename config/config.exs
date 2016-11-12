# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :filter_burst,
  ecto_repos: [FilterBurst.Repo]

# Configures the endpoint
config :filter_burst, FilterBurst.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "QVcL4MpgGdCHmbaHJabx3vdp7ROBez1DdwDoFdcEx4xJ8QI6Y3IP2vw8OFntpqSM",
  render_errors: [view: FilterBurst.ErrorView, accepts: ~w(html json)],
  pubsub: [name: FilterBurst.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
