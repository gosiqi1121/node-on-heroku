const model = require('./tweet-model');

const findAllTweets = () =>
    model.find();

const findTweetById = (id) =>
    model.findById(id);

const createTweet = (tweet) =>
    model.create(tweet);

const deleteTweet = (id) =>
    model.deleteOne({_id: id});

const updateTweet = (tweet) =>{
    console.log('++++++++++++++++++', tweet, tweet.id);
    return model.updateOne({_id: tweet._id}, {$set: tweet});
}
module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet, findTweetById
};
