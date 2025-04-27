import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Interface for User document
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
  isApproved: boolean;
  profile: {
    bio?: string;
    expertise?: string[];
    cv?: string;
  };
  createdAt: Date;
  getSignedJwtToken(): string;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

// Interface for User model
interface IUserModel extends Model<IUser> {
  // Add any static methods here if needed
}

const UserSchema = new mongoose.Schema<IUser, IUserModel>({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    trim: true,
    maxlength: [30, 'Username cannot be more than 30 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  isApproved: {
    type: Boolean,
    default: function(this: IUser) {
      return this.role === 'student' || this.role === 'admin';
    }
  },
  profile: {
    bio: { type: String, maxlength: [500, 'Bio cannot be more than 500 characters'] },
    expertise: [{ type: String }],
    cv: { type: String }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
UserSchema.pre<IUser>('save', async function(next: mongoose.CallbackWithoutResultAndOptionalError) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Generate JWT Token
UserSchema.methods.getSignedJwtToken = function(): string {
  return jwt.sign(
    { id: this._id, role: this.role },
    process.env.JWT_SECRET as string,
    { expiresIn: parseInt(process.env.JWT_EXPIRE as string, 10) }
  );
};

// Compare entered password with hashed password
UserSchema.methods.matchPassword = async function(
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User: IUserModel = mongoose.model<IUser, IUserModel>('User', UserSchema);
export default User;