FROM node:12-buster AS node_modules

WORKDIR /daab
COPY package.json .
RUN npm install


FROM node:12-buster-slim
LABEL maintainer="krdlab@gmail.com"

ENV NODE_ENV production
ENV DISABLE_NPM_INSTALL true
ENV HUBOT_ADAPTER=direct

# httpd setting
# ENV PORT 8080
EXPOSE 8080

# hubot files
WORKDIR /daab
COPY --from=node_modules /daab .
COPY external-scripts.json .
COPY bin bin
COPY scripts scripts

CMD bin/hubot run
