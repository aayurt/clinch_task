1. npm install
    [i have removed the node_modules or gitIgnored.]
2. set the env file
    - set the custom port
    - set the MONGO_URI [currently set to one of my cloud mongo db to prevent unstable connection. Please change it if needed.]
3. npm run seed 
    [this will delete old user list and generate new ones]
4. npm run start
    [this will build js from the ts and run the node for gql]
5. the queries can be checked through gql in browser or can be checked in the mongoDB.

