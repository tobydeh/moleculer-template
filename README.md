# Moleculer microservices example

This project serves an example for setting up moleculer microservices with the following features:

 - Typescript + project references
 - Shared module using npm workspaces
 - Docker & kubernetes

The service1 directory contains an example service that references /shared

The api directory contains an api gateway using moleculer-web and also references /shared

The root directory contains a package.json with scripts to run the services in development

The docker containers can be built using `docker-compose build <api/service1>`

## Setup
    npm install
    cd shared && npm install
    cd api && npm install
    cs service1 && npm install

## commands

     npm run start

 Start all services and watch for changes. Utilises tsc --build and project references, services are run using concurrently.

    npm run docker:up

Start required docker services such as nats and mongo

    npm run docker:down

Stop require docker services
