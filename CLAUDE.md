@AGENTS.md


certbot certonly --non-interactive \
  --dns-cloudflare \
  --dns-cloudflare-credentials /etc/letsencrypt/cloudflare.ini \
  --dns-cloudflare-propagation-seconds 30 \
  -d newsletter.projectenable.africa \
  --cert-name newsletter.projectenable.africa
