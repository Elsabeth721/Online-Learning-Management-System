export default {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/lms',
    jwt: {
      secret: process.env.JWT_SECRET || 'your_jwt_secret',
      expire: process.env.JWT_EXPIRE || '30d',
      cookieExpire: parseInt(process.env.JWT_COOKIE_EXPIRE || '30')
    },
    fileUpload: {
      path: process.env.FILE_UPLOAD_PATH || './public/uploads',
      maxSize: parseInt(process.env.MAX_FILE_UPLOAD || '1000000')
    }
  };