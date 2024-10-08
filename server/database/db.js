import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@blog-app-shard-00-00.ff4zu.mongodb.net:27017,blog-app-shard-00-01.ff4zu.mongodb.net:27017,blog-app-shard-00-02.ff4zu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ik66kb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;