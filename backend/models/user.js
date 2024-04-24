import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    iban: {
        type: String,
        unique: true,
    },
    bic: {
        type: String,
        unique: true,
    },

},
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema) // users

export default User;