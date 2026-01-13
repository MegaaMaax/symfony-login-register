FROM php:8.5-cli

RUN apt-get update && apt-get install -y \
    unzip \
    libzip-dev \
    libsqlite3-dev \
    && docker-php-ext-install pdo_sqlite zip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

EXPOSE 8000

CMD composer install --no-interaction && \
    mkdir -p var/cache var/log public/uploads && \
    chmod -R 777 var && \
    php bin/console doctrine:migrations:migrate --no-interaction && \
    php -S 0.0.0.0:8000 -t public