# NGINX CONFIGUTATIONS
FROM nginx

RUN rm /etc/nginx/conf.d/*

COPY ./default.conf /etc/nginx/conf.d/
COPY ./server.crt /etc/ssl/bundle.crt
COPY ./server.key /etc/ssl/server.key

# EXPOSE PORTs
EXPOSE 80
EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]
