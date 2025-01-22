import mongoose from 'mongoose';

// Select the appropriate DB connection string for environment
const isProduction = process.env.NODE_ENV === 'production';
const mongoDB = isProduction
  ? process.env.MONGODB_URI_PROD
  : process.env.MONGODB_URI_DEV;

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDatabase;