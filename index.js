var Youtube = /** @class */ (function () {
    //constructor
    function Youtube(searchText, videoName) {
        var _this = this;
        this.videoDescription = "";
        this.category = "";
        this.viewCount = 0;
        this.upVote = 0;
        this.downVote = 0;
        this.publisher = "";
        this.publishedOn = "";
        this.license = "";
        this.commentCount = 0;
        this.comment = [];
        this.commentedBy = [];
        this.commentedOn = [];
        this.commentUpVote = [];
        this.commentDownVote = [];
        this.reply = [];
        //methods
        this.getSearchText = function () {
            return _this.searchText;
        };
        this.getVideoName = function () {
            return _this.videoName;
        };
        this.setVideoDescription = function (name) {
            _this.videoDescription = name;
        };
        this.getVideoDescription = function () {
            return _this.videoDescription;
        };
        this.setCategory = function (name) {
            _this.category = name;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.setViewCount = function (count) {
            _this.viewCount = count;
        };
        this.getViewCount = function () {
            return _this.viewCount;
        };
        this.setUpVote = function (count) {
            _this.upVote = count;
        };
        this.getUpVote = function () {
            return _this.upVote;
        };
        this.setDownVote = function (count) {
            _this.downVote = count;
        };
        this.getDownVote = function () {
            return _this.downVote;
        };
        this.setPublisher = function (name) {
            _this.publisher = name;
        };
        this.getPublisher = function () {
            return _this.publisher;
        };
        this.setPublishedOn = function (name) {
            _this.publishedOn = name;
        };
        this.getPublishedOn = function () {
            return _this.publishedOn;
        };
        this.setLicence = function (name) {
            _this.license = name;
        };
        this.getLicence = function () {
            return _this.license;
        };
        this.setcomment = function (comment) {
            _this.comment.push(comment);
            _this.commentCount++;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getCommentCount = function () {
            return _this.commentCount;
        };
        this.setcommentedBy = function (name) {
            _this.commentedBy.push(name);
        };
        this.getCommentedBy = function () {
            return _this.commentedBy;
        };
        this.setcommentedOn = function (commentedOn) {
            _this.commentedOn.push(commentedOn);
        };
        this.getCommentedOn = function () {
            return _this.commentedOn;
        };
        this.setCommentUpVote = function (count) {
            _this.commentUpVote.push(count);
        };
        this.getCommentUpVote = function () {
            return _this.commentUpVote;
        };
        this.setCommentDownVote = function (count) {
            _this.commentDownVote.push(count);
        };
        this.getCommentDownVote = function () {
            return _this.commentDownVote;
        };
        this.setReply = function (count) {
            _this.reply.push(count);
        };
        this.getReply = function () {
            return _this.reply;
        };
        this.searchText = searchText;
        this.videoName = videoName;
    }
    ;
    return Youtube;
}());
var searchText = "indian idol";
var videoName = "TOP 5 BEST Indian Idol Auditions EVER IN THE HISTORY!";
var myVideo = new Youtube(searchText, videoName);
var videoDescription = "Here are the The very Best of the Indian Idol Auditions Ever in the History!\n\n5 - Rohit Shukla\n4 - Meiyang Chang\n3 - Sattar Khan\n2 - Stutee Tiwari\n1 - Nithyashree\n\nHope you enjoyed :)\nDo subscribe to the Channel for more\nhttps://www.youtube.com/channel/UCWdp...";
myVideo.setVideoDescription(videoDescription);
var category = "Entertainment";
myVideo.setCategory(category);
var viewCount = 1000;
myVideo.setViewCount(viewCount);
var upVote = 900;
myVideo.setUpVote(upVote);
var downVote = 50;
myVideo.setDownVote(downVote);
var publisher = "Ranvijay Rana";
myVideo.setPublisher(publisher);
var publishedOn = "23 Dec 2015";
myVideo.setPublishedOn(publishedOn);
var licence = "Dharma Production";
myVideo.setLicence(licence);
var comment1 = "What if all these contestants were in same season \nWho will win\uFEFF";
var comment2 = "chang is my favourite when I saw him..... at first time in audition.....only\n.... reallyy.... so cute Masha Allah \uD83D\uDE1A\uD83C\uDFA7& his voice too\uD83D\uDE0D\u2764";
myVideo.setcomment(comment1);
myVideo.setcomment(comment2);
var commentedBy1 = "Sermon Joshi";
var commentedBy2 = "Rohit Shetty";
myVideo.setcommentedBy(commentedBy1);
myVideo.setcommentedBy(commentedBy2);
var commentedOn1 = "12 sep 2016";
var commentedOn2 = "2 oct 2016";
myVideo.setcommentedOn(commentedOn1);
myVideo.setcommentedOn(commentedOn2);
var commentedUpVote1 = 500;
var commentedUpVote2 = 600;
myVideo.setCommentUpVote(commentedUpVote1);
myVideo.setCommentUpVote(commentedUpVote2);
var commentedDownVote1 = 50;
var commentedDownVote2 = 40;
myVideo.setCommentDownVote(commentedDownVote1);
myVideo.setCommentDownVote(commentedDownVote2);
var reply1 = 5;
var reply2 = 6;
myVideo.setReply(reply1);
myVideo.setReply(reply2);
//display all data in console
console.log("Search Text: " + myVideo.getSearchText());
console.log("Video name: " + myVideo.getVideoName());
console.log("Video Description: " + myVideo.getVideoDescription());
console.log("Category: " + myVideo.getCategory());
console.log("Video view count: " + myVideo.getViewCount());
console.log("Video up vote: " + myVideo.getUpVote());
console.log("Video down vote: " + myVideo.getDownVote());
console.log("Video Publisher: " + myVideo.getPublisher());
console.log("Video published on: " + myVideo.getPublishedOn());
console.log("Licence: " + myVideo.getLicence());
console.log("Video Comment Count: " + myVideo.getCommentCount());
console.log("Comment: " + myVideo.getComment());
console.log("Commented by: " + myVideo.getCommentedBy());
console.log("Commented on: " + myVideo.getCommentedOn());
console.log("Comment up vote: " + myVideo.getCommentUpVote());
console.log("Comment down vote: " + myVideo.getCommentDownVote());
console.log("Reply on each comment: " + myVideo.getReply());
