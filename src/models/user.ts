import mongoose, { Document } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter firstName.'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter lastName.'],
    },
    favoriteColor: {
      type: String,
      required: [true, 'Please enter favoriteColor.'],
    },
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  favoriteColor: string;
  connections?: IUser[];
}
const User = mongoose.model('User', userSchema);
export default User;
