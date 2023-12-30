import * as mongoose from "mongoose";

export default async function () {
    const mongodbUri = 'mongodb://127.0.0.1:27017/file-sharing';
    
    try {
        await mongoose.connect(mongodbUri);
        console.log('Mongodb Connected');
    } catch (e) {
        console.log(e);
    }
}