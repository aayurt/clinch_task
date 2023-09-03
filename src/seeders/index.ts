import db from '../models/index.js';
import User from '../models/user.js';
import { faker } from '@faker-js/faker';

db.once('open', function () {
  console.log('Connected to MongoDB database');
});
// defining custom primary colors
const primaryColors = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Purple',
  'Brown',
  'Pink',
  'Cyan',
  'Magenta',
  'Lime',
  'Teal',
  'Lavender',
  'Maroon',
  'Olive',
];

const generateUsers = async (userCount) => {
  const users = [];
  for (let i = 0; i < userCount; i++) {
    const newUser = new User({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      favoriteColor:
        primaryColors[Math.floor(Math.random() * primaryColors.length)],
      connections: [],
    });
    // Generating connections
    const numConnections = Math.floor(Math.random() * 51);
    for (let j = 0; j < numConnections; j++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      if (randomUser && randomUser !== newUser) {
        newUser.connections.push(randomUser._id);
      }
    }
    // Generating connections end
    const uniqueArray = [...new Set(newUser.connections)];
    newUser.connections = uniqueArray;

    users.push(newUser);
  }
  return users;
};
// for generation of new data
const seedData = async () => {
  const userCount = 50;
  try {
    const users = await generateUsers(userCount);
    // async saving
    await Promise.all(users.map((user) => user.save()));
    console.log(`Database populated with ${userCount} users.`);
  } catch (error) {
    console.error('error=>', error);
    process.exit(1);
  } finally {
    process.exit(1);
  }
};
// for deleting old data
const destroyData = async () => {
  await User.deleteMany({});
  console.log('Old data deleted.');
};

destroyData().then(() => {
  seedData();
});
