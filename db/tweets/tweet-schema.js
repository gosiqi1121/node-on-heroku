const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        topic : String,
        userName : String,
        verified : {type: Boolean, defaultValue: false},
        handle : String,
        time : String,
        post :  String,
        attachments : {
            image: String
        },
        avatar : String,
        image : String,
        reply : {type: Number, defaultValue: 0},
        retweet : {type: Number, defaultValue: 0},
        like : {type: Number, defaultValue: 0},
        liked : {type: Boolean, defaultValue: false}

    }, {collection: "tweets"}
);

module.exports = schema;
