## Server

### Dependencies
 - mongodb
 - express
 - cors

 # Create server.js
 - Create `./mern/server/server.js`

 # Connect to Mongodb instance(local)
  - Create `/server/db/connection.js
    - Pulls in the connection string from .env
    - `connectDatabase` function is exported

  - Start local mongo instance
    ```
    sudo systemctl start mongod
    ```
    

 ## .env setup
NODE_ENV="development"
MONGODB_URI_PROD=""
MONGODB_URI_DEV='mongodb://127.0.0.1:27017/test'
PORT=5050

# Install ESLint & Prettier
Need to configure ESLint to recognize Node.js global variables like process.

# Verify db connection
- Run server.js