FROM postman/newman

ADD ./wait-for-start-app.sh .
COPY angular-tour-of-heroes-backend.postman_collection.json /etc/postman/angular-tour-of-heroes-backend.postman_collection.json
COPY http---localhost-8080.postman_environment.json /etc/postman/http---localhost-8080.postman_environment.json

ENTRYPOINT [ "./wait-for-start-app.sh", "angular-tour-of-heroes-backend_test:8080", "--", "newman", "run", "/etc/postman/angular-tour-of-heroes-backend.postman_collection.json", "--environment=/etc/postman/http---localhost-8080.postman_environment.json", "--disable-unicode"]