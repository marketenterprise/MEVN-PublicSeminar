FROM php:8.3-fpm

RUN rm /etc/apt/preferences.d/no-debian-php && \
    apt-get update && \
    apt-get -y --no-install-recommends install \
    libxml2-dev \
    libzip-dev \
    openssl \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    libicu-dev \
    libpq-dev \
    libxpm-dev \
    libvpx-dev && \
    apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/* && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) gd \
    zip \
    bcmath \
    intl \
    exif \
    pdo_mysql \
    mysqli

COPY --from=composer:2.4.4 /usr/bin/composer /usr/bin/composer

COPY ./laravel /app

WORKDIR /app
