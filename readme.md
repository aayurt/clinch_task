INSTALLATIONS
=========

1. npm install
    [i have removed the node_modules or gitIgnored.]
2. set the env file
    - set the custom port
    - set the MONGO_URI 
        [currently set to one of my cloud mongo db to prevent unstable connection. Please change it if needed.]
3. npm run seed 
    [this will delete old user list and generate new ones]
4. npm run start
    [this will build js from the ts and run the node for gql]
5. the queries can be checked through gql in browser or can be checked in the mongoDB.

In the code,
src/seeders/index.ts
userCount is currently set to 50 and we can change it as per need.

GQL QUERY
=========

query UserQuery {
  users {
    firstName
    lastName
    favoriteColor
    connections{
      firstName
      lastName
      favoriteColor
    }
  }
}


WHAT I DID
=========
    - installed mongoose
    - made a user model
    - made a seeder for it to generate require function to generate user data
    - installed gql packages graphql and @apollo/server
    - made the necessary structure for resolvers and typedefs
    - made the docker settings which can be changed as per need.

DRAWBACKS
=========
    - none as per my knowledge

IMPROVEMENTS
=========
    - for the given requirements, none. But i could add the auth or other middleware