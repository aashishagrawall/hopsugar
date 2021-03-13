import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    birthDate: {
        type: Date,
    },
    roles: {
        type: [{
            type: String,
            enum: ['daddy', 'baby']
        }],
        default: ['daddy'],
        required: 'Please provide at least one role'
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    location: {
        loc: {
            type: [Number],
            index: '2dsphere'
        },
        city: {
            type: String,
            default: '',
            lowercase: true,
            trim: true
        },

        state: {
            type: String,
            default: '',
            lowercase: true,
            trim: true
        },
        pincode: {
            type: String,
            default: ''
        },
        address: {
            type: String
        },
    },
    age: {
        type: Number
    },
    occupation: {
        type: String
    },
    education: {
        type: String
    },
    body_type: {
        type: String
    },
    smokes: {
        type: String
    },
    drinks: {
        type: String
    },
    children: {
        type: String
    },
    height: {
        type: Number
    },
    ethnicity: {
        type: String,
    },
    about_me: {
        type: String
    },
    photos: {
        private: [],
        public: []
    }




});

export default mongoose.models.User || mongoose.model('User', userSchema)
