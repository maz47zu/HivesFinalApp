# HiveApp


### Jak wrzucić na serwer

NA SERWERZE:
1. zclonować / skopiować najnowsze pliki HiveFinalApp
2. `npm run build`
3. cat /etc/nginx/sites-enabled/hive(?)
4. Do root /var/www/[.....](to co cat wypluje) wrzucić najnowsze zbudowane pliki (zawartość folderu build)

---
Przydatne komendy
`sudo service nginx restart`
`nginx -t`
