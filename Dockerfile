# Multistage Generic Dockerfile to be used with all services

# Install common dependencies
# FROM node:10-alpine as common

# ENV FORCE_COLOR=1
# ENV NODE_ENV=production
# ENV BLUEBIRD_DEBUG=0

# WORKDIR /usr/app/common

# COPY common/package*.json ./
# RUN npm ci

# COPY common .

# Install production-only dependencies

FROM node:10-alpine as production

ENV FORCE_COLOR=1
ENV NODE_ENV=production
ENV BLUEBIRD_DEBUG=0
ARG NAME
RUN apk add --no-cache inotify-tools
# Install specific dependencies
WORKDIR /usr/app/$NAME

COPY $NAME/package*.json ./
RUN npm ci

# COPY --from=common /usr/app/common node_modules/@skouted/common/

COPY $NAME .

CMD ["npm", "start"]
