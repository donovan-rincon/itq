var TweetModel = require('../models/tweetModel');

class TweetController {
    constructor() {
      // bind methods to this class
      this.get = this.get.bind(this);
      this.getById = this.getById.bind(this);
      this.post = this.post.bind(this);
      this.remove = this.remove.bind(this);
    }
  
    get(req, res) {
      const orders = TweetModel.getAllTweets();
      res.send(orders);
    }
  
    getById(req, res) {
      const { id } = req.params;
      const tweet = TweetModel.getTweetById(id);
      if (!tweet) {
        res.status(404);
        res.send({ message: 'not found' });
      }
      res.send(tweet);
    }
  
    post(req, res) {
      const tweet = req.body;
      const id = TweetModel.saveTweet(tweet);
      res.send({ id, saved: true });
    }
  
    remove(req, res) {
      const { id } = req.params;
      const wasDeleted = TweetModel.deleteTweet(id);
      res.send({ deleted: wasDeleted });
    }
  }
  
  module.exports = TweetController;
  