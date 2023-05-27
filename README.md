# angular-tour-of-heroes-backend-service
Backend service for [angular-tour-of-heroes](https://angular.io/tutorial/tour-of-heroes]) frontend application

# Prerequisites
* `node 18.16.0` or greater (https://nodejs.org/en/download)
* `git` (https://git-scm.org/)
* `docker/docker-compose` (https://www.docker.com/)
* `postman` (https://www.postman.com/downloads/)

# Tests
## Unit tests using jest
```shell
npm test
```
## Integration tests using Newman
```shell
docker-compose -f docker-compose.test.yml up --exit-code-from newman
```
or
```shell
docker-compose -f docker-compose.test.yml up --exit-code-from newman --build
```