let userTweets = [];
function getAllTweets() {
    return userTweets;
};

function getTweetById(id) {
    let tweet = userTweets[id];
    if (tweet) {
        return tweet;
    }
    return false;
};

function saveTweet(tweet){
    userTweets.push(tweet);
    return userTweets.length -1;
};

function deleteTweet(id) {
    if (id <= userTweets.length) {
        userTweets.splice(id, 1);
        return true;
    }
    return false;
}

module.exports.getAllTweets = getAllTweets;
module.exports.getTweetById = getTweetById;
module.exports.saveTweet = saveTweet;
module.exports.deleteTweet = deleteTweet;
