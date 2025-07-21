---
allowed-tools: Bash, Edit, Write
description: Deploy application with environment and version parameters
argument-hint: [environment] [version] [flags]
---

# Deploy Command

Deploy the application to specified environment with version and optional flags.

## Arguments
- Environment: dev, staging, or prod
- Version: git tag, branch name, or commit hash
- Flags (optional): --dry-run, --force, --skip-tests

## Usage examples
```
/deploy staging v1.2.3
/deploy prod main --dry-run
/deploy dev feature-branch --skip-tests --force
```

## Current context
- Current branch: !`git branch --show-current`
- Latest commit: !`git log --oneline -1`
- Git status: !`git status --porcelain`

## Deployment steps
Based on the provided arguments ($ARGUMENTS), perform the following:

1. Parse environment, version, and flags from: $ARGUMENTS
2. Validate the target environment
3. Check if version exists in git
4. Run tests unless --skip-tests is provided
5. Deploy using appropriate strategy
6. Verify deployment success

Before you do anything tell me exactly what you are going to do.
