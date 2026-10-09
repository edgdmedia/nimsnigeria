#!/usr/bin/env bash
# Pulls exhibitor logos, sponsor and committee photos from the Google Drive
# (Nims/2026) folders and converts them to the webp assets used by the site.
# Requires the terminal running this script to have Full Disk Access
# (System Settings > Privacy & Security > Full Disk Access) so it can read
# ~/Library/CloudStorage.
set -euo pipefail

DRIVE="$HOME/Library/CloudStorage/GoogleDrive-sites@edgdmedia.com/My Drive/EDGD Media/Clients/Nims/2026"
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

log() { printf '\n== %s\n' "$*"; }

to_webp() { # src out maxW quality
  local src="$1" out="$2" maxw="${3:-1000}" q="${4:-80}"
  local work="$TMP/$(basename "$src")"
  cp "$src" "$work"
  if sips -g pixelWidth "$work" | awk -v w="$maxw" '/pixelWidth/{exit ($2>w)?0:1}'; then
    sips --resampleWidth "$maxw" "$work" >/dev/null
  fi
  cwebp -quiet -q "$q" "$work" -o "$out"
  echo "  -> $out"
}

missing() {
  log "MISSING: $1"
  log "Grant Full Disk Access to this terminal app, retry the Drive download in Google Drive (right-click > Download), or copy the folder into docs/ manually."
  exit 1
}

access_test() { [ -r "$DRIVE/Exhibitors/BUA Logo.png" ] || missing "Cannot read Google Drive at $DRIVE"; }

if ! [ -r "$DRIVE/Exhibitors/BUA Logo.png" ] && [ -r "$REPO/docs/Exhibitors/BUA Logo.png" ]; then
  log "Drive not readable; using local docs/ copies instead"
  DRIVE="$REPO/docs"
fi

access_test

log "Exhibitor logos"
E_SRC="$DRIVE/Exhibitors"
E_OUT="$REPO/public/images/exhibitors"
mkdir -p "$E_OUT"
while IFS='|' read -r src slug; do
  [ -n "$src" ] || continue
  [ -f "$E_SRC/$src" ] || missing "Exhibitors/$src"
  to_webp "$E_SRC/$src" "$E_OUT/$slug.webp" 1000 85
done <<'MAP'
GB Foods.png|gb-foods
BUA Logo.png|bua
Mikano_Logo_transparent 1.png|mikano
innoson-ivm-logo.png|innoson-motors
eleganza logo.png|eleganza
Bank-of-Industry-BOI-Logo.png|bank-of-industry
Nexim.png|nexim-bank
Nova_Bank_Logo 1.png|nova-bank
Nethawk.jpg|nethawk-solutions
FBT Coral.png|fbt-coral
Whitecloud.png|white-cloud
Jolly P.png|jolly-ps-empire
MAP

log "New sponsor — United Nigeria Airlines"
S_SRC="$DRIVE/Sponsors/United Nigeria Airlines Text.png"
[ -f "$S_SRC" ] || missing "Sponsors/United Nigeria Airlines Text.png"
to_webp "$S_SRC" "$REPO/public/images/sponsors/united-nigeria-airlines.webp" 1000 85

log "Committee photos"
C_SRC="$DRIVE/Committee"
while IFS='|' read -r src dest; do
  [ -n "$src" ] || continue
  [ -f "$C_SRC/$src" ] || missing "Committee/$src"
  mkdir -p "$REPO/public/images/committee/$(dirname "$dest")"
  to_webp "$C_SRC/$src" "$REPO/public/images/committee/$dest.webp" 800 82
done <<'MAP'
MEDIA & PUBLICITY COMMITTEE/MEDIA & PUBLICITY COMMITTE PROFILE/Khalid Oshoke Ahmed/WhatsApp Image 2026-09-25 at 12.44.13 PM.jpeg|media-publicity/khalid-oshoke-ahmed
MEDIA & PUBLICITY COMMITTEE/MEDIA & PUBLICITY COMMITTE PROFILE/Dr. Sulaiman Kassim/WhatsApp Image 2026-09-25 at 12.49.56 PM.jpeg|media-publicity/dr-sulaiman-kassim
MEDIA & PUBLICITY COMMITTEE/MEDIA & PUBLICITY COMMITTE PROFILE/Olaide Aduragbemi Olanrewaju/WhatsApp Image 2026-10-08 at 12.38.01 PM.jpeg|media-publicity/olaide-aduragbemi-olanrewaju
SPEAKER & GUEST ENGAGEMENT COMMITTEE/SPEAKER & GUEST ENGAGEMENT COMMITTEE PROFILE/Celsuspaul E. Ekweme /WhatsApp Image 2026-10-08 at 3.24.41 PM.jpeg|speaker-guest-engagement/dr-celsuspaul-ekweme
MONITORING & EVALUATION COMMITTEE/MONITORING & EVALUATION COMMITTEE PROFILE/Mr. Orok Effanga/WhatsApp Image 2026-10-08 at 9.03.54 PM.jpeg|monitoring-evaluation/orok-effanga
MAP

log "Done. Rebuild the site to verify."
