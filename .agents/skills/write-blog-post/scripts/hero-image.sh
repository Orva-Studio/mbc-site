#!/usr/bin/env bash
# Usage: hero-image.sh "<prompt>" <output.jpg>
# Generates a wide hero image with OpenAI, falling back to Replicate (Flux),
# then crops it to the ~2.74:1 banner ratio the existing posts use.
set -euo pipefail

prompt="${1:?prompt required}"
out="${2:?output path required}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

style="Photographic, cinematic, natural light, shallow depth of field, no text, no logos, no watermarks, wide composition with the subject centred so it survives a letterbox crop."
full_prompt="$prompt. $style"

generate_openai() {
  [[ -n "${OPENAI_API_KEY:-}" ]] || return 1
  curl -sS --fail-with-body https://api.openai.com/v1/images/generations \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$(jq -n --arg p "$full_prompt" --arg m "${OPENAI_IMAGE_MODEL:-gpt-image-2}" \
      '{model:$m, prompt:$p, size:"1536x1024", n:1}')" \
    | jq -er '.data[0].b64_json' | base64 --decode > "$tmp/raw.png"
}

generate_replicate() {
  [[ -n "${REPLICATE_API_TOKEN:-}" ]] || return 1
  local url
  url="$(curl -sS --fail-with-body \
    "https://api.replicate.com/v1/models/${REPLICATE_IMAGE_MODEL:-black-forest-labs/flux-1.1-pro}/predictions" \
    -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
    -H "Content-Type: application/json" \
    -H "Prefer: wait" \
    -d "$(jq -n --arg p "$full_prompt" '{input:{prompt:$p, aspect_ratio:"16:9", output_format:"png"}}')" \
    | jq -er 'if (.output|type)=="array" then .output[0] else .output end')"
  curl -sS --fail "$url" -o "$tmp/raw.png"
}

if ! generate_openai; then
  echo "OpenAI generation failed, trying Replicate" >&2
  generate_replicate
fi

w=$(sips -g pixelWidth "$tmp/raw.png" | awk '/pixelWidth/{print $2}')
h=$((w * 365 / 1000))
sips -s format jpeg -s formatOptions 82 --cropToHeightWidth "$h" "$w" "$tmp/raw.png" --out "$out" >/dev/null
echo "$out"
