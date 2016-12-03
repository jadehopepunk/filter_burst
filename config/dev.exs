use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :filter_burst, FilterBurst.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [
    node: ["./node_modules/.bin/webpack-dev-server", "--watch-stdin", "--colors",    cd: Path.expand("../", __DIR__)]
  ]


# Watch static and templates for browser reloading.
config :filter_burst, FilterBurst.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

config :filter_burst, FilterBurst.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "filter_burst_dev",
  username: "craig",
  hostname: "127.0.0.1",
  pool_size: 5

config :filter_burst, :auth0,
  domain: "filterburst-dev.auth0.com",
  manage_api_read_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJQWmF5M0g4OG1EM2pyUDV3Y1BTQkxoN0tBWHl6c3hhOCIsInNjb3BlcyI6eyJ1c2VycyI6eyJhY3Rpb25zIjpbInJlYWQiXX19LCJpYXQiOjE0ODA0MTI5NzUsImp0aSI6ImM4MDg3ODc5MmFjOTBkNzhjOThjNjYzMWM5NGZlZjcyIn0.yc3-5b_qvse_AA6iomcfS4ALQQtXwSOcignTYQM16xI"

  config :extwitter, :oauth, [
     consumer_key: "7kQBtRs56yxF2chpZiIDLonkf",
     consumer_secret: "sdSXaKD2cAEdXu6g5AssNwa84AU8b4wRcDayfEy0FRjerCIGr5",
     access_token: System.get_env("FILTERBURST_TWITTER_ACCESS_TOKEN"),
     access_token_secret: System.get_env("FILTERBURST_TWITTER_ACCESS_TOKEN_SECRET")
  ]
