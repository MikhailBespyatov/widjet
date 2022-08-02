FROM registry-test.alfa-bank.kz/ucrb/openresty:1.15.8.2-190821

ENV TZ=Asia/Almaty 

COPY build/ /usr/share/nginx/html/

RUN addgroup -S -g 1000 www-data && adduser -S -D -H -u 999 -G root www-data\
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && mkdir -p /var/log/nginx /var/lib/nginx /var/run/openresty/ /usr/local/openresty/nginx/\
    && chown -R www-data:www-data /var/log/nginx /var/lib/nginx /run /var/run/openresty /usr/local/openresty/nginx/

USER 999
EXPOSE 8080
CMD ["/usr/local/openresty/bin/openresty", "-g", "daemon off;"]