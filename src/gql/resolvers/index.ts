import User from '../../models/user.js';

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('connections');
    },
  },
};
export default resolvers;
