const UserTypeDef = `#graphql
  type User {
    firstName:String
    lastName:String
    favoriteColor:String
    connections:[User]
  }
  type Query {
    users: [User]
  }
`;
export default UserTypeDef;
