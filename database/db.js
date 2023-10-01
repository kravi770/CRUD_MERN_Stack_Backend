import mongoose from 'mongoose';

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@crud-app.dxrpdlb.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database Connection successfully !');
  } catch (err) {
    console.log('error while connecting to database', err);
  }
};

export default Connection;
