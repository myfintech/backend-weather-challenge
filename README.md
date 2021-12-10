# Overview

This is a simple NodeJS backend service (only a RESTful API) which will return the forecast of a specified location
using publicly available APIs. The goal is that a caller can provide a location (city, zipcode, full address) and will
receive the forecast for the next 5 periods that location.

Frameworks included in the project:

* [NestJS](https://nestjs.com/) - Backend framework, provides IOC/DI for lifecycle management
* [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client
* [Lodash](https://lodash.com/) - Utility framework
* [Jest](https://jestjs.io/) - Testing framework

# API Structure

There is only a single endpoint exposed by the service.

* `/weather?location=[string]`

Behind the scenes, this endpoint will make use of two services to convert the location into the final forecast.

* [Openstreetmap](https://nominatim.org/release-docs/develop/api/Search/)
    * `/search` - Returns a list of geocoded data in order of importance
* [Weather.gov](https://www.weather.gov/documentation/services-web-api#/default/zone_list)
    * `/points/{lat}/{lon}` - Returns the point information (location + station information). We need the grid
      information.
    * `/gridpoints/{gridId}/{gridX),{gridY}/forecast` - Returns the forecast for the location

# Objective

* Implement both services in order to call the necessary APIs to retrieve required data
* Implement the controller to invoke the services to orchestrate the necessary API calls and return the final result

# Running the service locally via pnpm (without containerization)

* To run the test suite in `--watchAll` mode, run `pnpm test:watch` to have test automatically rerun while making changes
* Running the service, run `pnpm start:dev` to have Node hot-reload file changes in realtime.

# Running the service locally via Make (without containerization)
* To run the test suite once, run `make test:watch`
* To run the test suite in `--watchAll` mode, run `make test:watch` to have test automatically rerun while making changes

# Running the service via docker-compose (with containerization)

* to run the service via `docker-compose`, simply run `docker-compose up` and the service will launch with the test suite running in `--watchAll` mode. In this mode, any changes made to the specs or source code will rerun the entire test suite