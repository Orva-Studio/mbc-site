<!-- TODO: This file is here temporarily and may need to be moved to a different directory -->
# Setting Up Claude Code Telemetry with Better Stack

## Overview

Claude Code supports OpenTelemetry (OTel) for exporting usage metrics and event logs. By connecting it to Better Stack, you can track token usage, costs, sessions, and more over time — giving you visibility into how you're using Claude Code across projects.

## Prerequisites

- Claude Code installed and working
- A Better Stack account (https://betterstack.com)
- A Better Stack Telemetry source (OTLP-compatible)

## Step 1: Create a Better Stack Telemetry Source

1. Log into Better Stack
2. Go to Telemetry > Sources
3. Create a new source (choose OpenTelemetry)
4. Copy the endpoint URL and source token

You'll get something like:
- Endpoint: `https://s1234567.eu-fsn-3.betterstackdata.com`
- Token: `Bearer your-token-here`

## Step 2: Configure Claude Code

Add the following to `~/.claude/settings.json` inside the `"env"` object:

```json
{
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
    "OTEL_METRICS_EXPORTER": "otlp",
    "OTEL_LOGS_EXPORTER": "otlp",
    "OTEL_EXPORTER_OTLP_PROTOCOL": "http/protobuf",
    "OTEL_EXPORTER_OTLP_ENDPOINT": "https://your-endpoint.betterstackdata.com",
    "OTEL_EXPORTER_OTLP_HEADERS": "Authorization=Bearer your-token-here"
  }
}
```

### What each variable does

| Variable | Purpose |
|---|---|
| `CLAUDE_CODE_ENABLE_TELEMETRY` | Enables OTel data collection (required) |
| `OTEL_METRICS_EXPORTER` | Tells Claude Code to export metrics via OTLP |
| `OTEL_LOGS_EXPORTER` | Tells Claude Code to export logs/events via OTLP |
| `OTEL_EXPORTER_OTLP_PROTOCOL` | Protocol format — `http/protobuf` works with Better Stack |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | Your Better Stack OTLP ingestion endpoint |
| `OTEL_EXPORTER_OTLP_HEADERS` | Auth header with your source token |

### No collector needed

Because Claude Code exports OTLP natively and Better Stack accepts OTLP directly, you don't need to run an OpenTelemetry Collector, Docker, or any middleware. Data goes straight from Claude Code to Better Stack.

## Step 3: Restart Claude Code

Close and reopen Claude Code. Data should start appearing in Better Stack within a minute or so.

## Step 4 (Optional): Enable prompt logging

By default, user prompts are redacted in the logs for privacy. If you want to see the actual prompts you sent:

```json
{
  "env": {
    "OTEL_LOG_USER_PROMPTS": "1",
    "OTEL_LOG_TOOL_DETAILS": "1"
  }
}
```

- `OTEL_LOG_USER_PROMPTS=1` — includes the full text of your prompts (instead of `<REDACTED>`)
- `OTEL_LOG_TOOL_DETAILS=1` — includes which tools were used (Read, Edit, Bash, etc.) in tool events

## What Data You Get

### Metrics (time series)

| Metric | Description |
|---|---|
| `claude_code.token.usage` | Tokens consumed |
| `claude_code.cost.usage` | Cost in USD |
| `claude_code.session.count` | Sessions started |
| `claude_code.lines_of_code.count` | Lines of code modified |
| `claude_code.commit.count` | Commits created |
| `claude_code.pull_request.count` | PRs created |
| `claude_code.active_time.total` | Active time in seconds |

### Events (logs)

| Event | Description |
|---|---|
| `claude_code.user_prompt` | When you submit a prompt |
| `claude_code.api_request` | API calls to Claude |
| `claude_code.api_error` | API failures |
| `claude_code.tool_result` | Tool executions |
| `claude_code.tool_decision` | Permission decisions (allow/deny) |

### Example event payload

Here's what a `user_prompt` event looks like in Better Stack (with prompt logging enabled):

```json
{
  "dt": 1774010760.504,
  "message": "claude_code.user_prompt",
  "resource": {
    "attributes": {
      "host.arch": "arm64",
      "os.type": "darwin",
      "os.version": "25.3.0",
      "service.name": "claude-code",
      "service.version": "2.1.80"
    }
  },
  "scope": {
    "name": "com.anthropic.claude_code.events",
    "version": "2.1.80"
  },
  "attributes": {
    "user.id": "hashed-user-id",
    "session.id": "uuid",
    "organization.id": "uuid",
    "user.email": "you@example.com",
    "terminal.type": "WezTerm",
    "event.name": "user_prompt",
    "event.timestamp": "2026-03-20T12:46:00.504Z",
    "prompt_length": "122",
    "prompt": "your actual prompt text here"
  }
}
```

### Attributes included in events

- `user.id` — hashed user identifier
- `session.id` — unique session ID
- `organization.id` — your Anthropic org ID
- `user.email` — your account email
- `terminal.type` — terminal emulator (e.g. WezTerm, iTerm2)
- `service.name` — always `claude-code`
- `service.version` — Claude Code version
- `host.arch` / `os.type` / `os.version` — machine info

## Dashboard Ideas

Once data is flowing, you can build Better Stack dashboards for:

- **Daily/weekly/monthly token usage** — track consumption trends
- **Cost over time** — monitor spending by day, week, or month
- **Sessions per day** — how often you're using Claude Code
- **Lines of code modified** — productivity metric
- **Tool usage breakdown** — which tools Claude uses most (requires `OTEL_LOG_TOOL_DETAILS=1`)
- **Error rate** — track API failures over time
- **Active time** — how much time you spend in Claude Code sessions

## Troubleshooting

- **No data appearing**: Make sure you restarted Claude Code after updating settings.json
- **Auth errors**: Double-check your Bearer token and endpoint URL
- **Prompts showing as `<REDACTED>`**: Set `OTEL_LOG_USER_PROMPTS=1`
- **Want to test quickly**: Use `OTEL_METRIC_EXPORT_INTERVAL=10000` to export metrics every 10 seconds instead of the default 60 seconds
