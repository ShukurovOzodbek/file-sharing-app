import mongoose from "mongoose";
import hashPassword from "../utils/hashPassword";


const modelName = "users";
const {Schema} = mongoose;

const schema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    sharedUsers: {
        type: Array, of: {
            fullName: {type: String},
            email: {type: String}
        }
    },
    sharedFiles: {
        type: Array, of: {
            file_name: {type: String},
            file_size: {type: String},
            file_path: {type: String},
            extension: {type: String}
        }
    }
}, {
    timestamps: true
});

const Users: any = mongoose.model(modelName, schema);


export default Users;