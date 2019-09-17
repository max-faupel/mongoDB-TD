# mongoDB-TD

## MongoDB Docker Container 
``` 
docker run -d --name mongo-tut -e MONGO_INITDB_ROOT_USERNAME=max -e MONGO_INITDB_ROOT_PASSWORD=asdf123 -p 27017:27017 -v ~/Development/mongodb/data:/data/db -d mongo:3.2
```

## Run Test 
```
npm run test
```
