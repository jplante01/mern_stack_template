
# Connect to Mongodb instance(local)
  - Start local mongo instance
    ```
    sudo systemctl start mongod
    ```
    

 ## .env setup
NODE_ENV="development"
MONGODB_URI_PROD=""
MONGODB_URI_DEV='mongodb://127.0.0.1:27017/test'
PORT=5050


# Verify db connection in development
- Seed the database
  - Start your local mongod instance(This will destroy any collections named `test`)
  - Verify MONGODB_URI_DEV is set correctly
  - import the seed data. Run from project root:
    - !!DO NOT EXECUTE THIS COMMAND ON YOUR PRODUCTION DB, IT WILL DROP THE DATABASE!!
    - `mongoimport --db test --collection users --file packages/server/db/users-seed.json --jsonArray --drop && mongoimport --db test --collection tasks --file packages/server/db/tasks-seed.json --jsonArray --drop`
  - Run server.js