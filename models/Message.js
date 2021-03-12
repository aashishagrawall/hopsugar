
const Messages = new Schema({
    from: {
        type: Schema.ObjectId
        , required: true
    },
    message: {
        type: String,
        required: true,
        trim: true,

    },
    to: {
        type: Schema.ObjectId
        , required: true
    },
    seen: {
        type: String,
        enum: ['yes',no]
    },
  

});