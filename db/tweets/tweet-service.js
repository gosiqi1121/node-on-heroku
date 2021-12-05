const dao = require('./tweet-dao')
module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets))

    const createTweet = (req, res) => {
        const newTweet = {
            'topic': 'Web Development',
            'userName': 'New Tweet Sample',
            'verified': false,
            'handle': 'NewTweetSample',
            'time': '3h',
            'avatar': 'https://pbs.twimg.com/profile_images/378800000256050912/5e92c2bc4bcca352b73a62bc1c626e11_400x400.jpeg',
            'image': 'https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'reply': '370',
            'retweet': '402',
            'like': '199',
            'liked': false,
            ...req.body,

        }
        return dao.createTweet(newTweet)
            .then((insertedTweet) => res.json(insertedTweet))
    }

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status))

    const likeTweet = (req, res) => {
        return dao.findTweetById(req.params.id)
            .then(tweet => {
                    if (tweet.liked) {
                        tweet.like--
                    } else {
                        tweet.like++
                    }
                    tweet.liked = !tweet.liked
                    return dao.updateTweet(tweet)
                        .then(status => res.json(status))
                }
            )
    }
    app.put('/a9/tweets/:id/like', likeTweet)
    app.delete('/a9/tweets/:id', deleteTweet)
    app.post('/a9/tweets', createTweet)
    app.get('/a9/tweets', findAllTweets)
}

