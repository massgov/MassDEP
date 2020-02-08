# Stage 1 - PHP Composer Dependencies
FROM php:7.3-cli-alpine as php-composer

RUN apk add --update git

RUN mkdir /tmp/composer-libraries

WORKDIR /tmp

RUN php -r "copy('https://getcomposer.org/installer','composer-setup.php');"

#RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { } else { unlink('composer-setup.php'); };"

RUN php composer-setup.php

RUN php -r "unlink('composer-setup.php');"

RUN mv composer.phar /usr/local/bin/composer

WORKDIR /tmp/composer-libraries

COPY composer.json .

RUN composer update

RUN sed -i 's/$column/85px/' ./libraries/mayflower-artifacts/assets/css/index-generated.css

# Stage 2 - Development Environment
FROM node:13.0.1-alpine

RUN mkdir -p /srv/app/pws-documents-search

COPY --from=php-composer /tmp/composer-libraries /srv/app/pws-documents-search

RUN mkdir -p /srv/app/pws-documents-search

WORKDIR /srv/app/pws-documents-search

COPY package.json /srv/app/pws-documents-search

COPY package-lock.json /srv/app/pws-documents-search

RUN npm install

RUN mkdir -p /srv/app/pws-documents-search/npm-scripts

COPY /npm-scripts /srv/app/pws-documents-search/npm-scripts

RUN mkdir -p /srv/app/pws-documents-search/public

COPY /public /srv/app/pws-documents-search/public

RUN mkdir -p /srv/app/pws-documents-search/src

COPY /src /srv/app/pws-documents-search/src

RUN npm run-script build-mayflower-artifacts

EXPOSE 3000