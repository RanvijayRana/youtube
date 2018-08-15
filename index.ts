class Youtube{
    //members of class youtube
    private searchText: string;
    private videoName: string;
    private videoDescription: string = "";
    private category: string = "";
    private viewCount: number = 0;
    private upVote: number = 0;
    private downVote: number = 0;;
    private publisher: string = "";
    private publishedOn: string = "";
    private license: string = ""; 

    private commentCount: number = 0;
    private comment: string[] = [];
    private commentedBy: string[] = [];
    private commentedOn: string[] = [];
    private commentUpVote: number[] = [];
    private commentDownVote: number[] = [];
    private reply: number[] = [];

    //constructor
    constructor (searchText: string, videoName: string){
        this.searchText = searchText;
        this.videoName = videoName;
    }
    
    //methods
    getSearchText= (): string => {
        return this.searchText;
    }
    getVideoName= (): string => {
        return this.videoName;
    }
    setVideoDescription= (name: string): void => {
        this.videoDescription = name;
    }
    getVideoDescription= (): string => {
        return this.videoDescription;
    }
    setCategory= (name: string): void => {
        this.category = name;
    }
    getCategory= (): string => {
        return this.category;
    }
    setViewCount= (count: number): void => {
        this.viewCount = count;
    }
    getViewCount= (): number => {
        return this.viewCount;
    }
    setUpVote= (count: number): void => {
        this.upVote = count;
    }
    getUpVote= (): number => {
        return this.upVote;
    }
    setDownVote= (count: number): void => {
        this.downVote = count;
    }
    getDownVote= (): number => {
        return this.downVote;
    }
    setPublisher= (name: string): void => {
        this.publisher = name;
    }
    getPublisher= (): string => {
        return this.publisher;
    }
    setPublishedOn= (name: string): void => {
        this.publishedOn = name;
    }
    getPublishedOn= (): string => {
        return this.publishedOn;
    }
    setLicence= (name: string): void => {
        this.license = name;
    }
    getLicence= (): string => {
        return this.license;
    }
    setcomment= (comment: string): void => {
        this.comment.push(comment);
        this.commentCount++;
    }
    getComment= (): string[] => {
        return this.comment;
    }
    getCommentCount= (): number => {
        return this.commentCount;
    }
    setcommentedBy= (name: string): void => {
        this.commentedBy.push(name);
    }
    getCommentedBy= (): string[] => {
        return this.commentedBy;
    }
    setcommentedOn= (commentedOn: string): void => {
        this.commentedOn.push(commentedOn);
    }
    getCommentedOn= (): string[] => {
        return this.commentedOn;
    }
    setCommentUpVote= (count: number): void => {
        this.commentUpVote.push(count);
    }
    getCommentUpVote= (): number[] => {
        return this.commentUpVote;
    }
    setCommentDownVote= (count: number): void => {
        this.commentDownVote.push(count);
    }
    getCommentDownVote= (): number[] => {
        return this.commentDownVote;
    }
    setReply= (count: number): void => {
        this.reply.push(count);
    }
    getReply= (): number[] => {
        return this.reply;
    }

    
}

let searchText: string = "indian idol";
let videoName: string = "TOP 5 BEST Indian Idol Auditions EVER IN THE HISTORY!"
let myVideo = new Youtube(searchText,videoName);

let videoDescription: string = `Here are the The very Best of the Indian Idol Auditions Ever in the History!

5 - Rohit Shukla
4 - Meiyang Chang
3 - Sattar Khan
2 - Stutee Tiwari
1 - Nithyashree

Hope you enjoyed :)
Do subscribe to the Channel for more
https://www.youtube.com/channel/UCWdp...`;
myVideo.setVideoDescription(videoDescription);
let category:string = "Entertainment";
myVideo.setCategory(category);

let viewCount:number = 1000;
myVideo.setViewCount(viewCount);

let upVote:number = 900;
myVideo.setUpVote(upVote);
let downVote:number = 50;
myVideo.setDownVote(downVote);

let publisher: string = "Ranvijay Rana";
myVideo.setPublisher(publisher);

let publishedOn: string = "23 Dec 2015";
myVideo.setPublishedOn(publishedOn);

let licence: string = "Dharma Production";
myVideo.setLicence(licence);

let comment1: string = `What if all these contestants were in same season 
Who will win﻿`; 
let comment2: string = `chang is my favourite when I saw him..... at first time in audition.....only
.... reallyy.... so cute Masha Allah 😚🎧& his voice too😍❤`;
myVideo.setcomment(comment1);
myVideo.setcomment(comment2);


let commentedBy1: string = "Sermon Joshi";
let commentedBy2: string = "Rohit Shetty";
myVideo.setcommentedBy(commentedBy1);
myVideo.setcommentedBy(commentedBy2);

let commentedOn1: string = "12 sep 2016";
let commentedOn2: string = "2 oct 2016";
myVideo.setcommentedOn(commentedOn1);
myVideo.setcommentedOn(commentedOn2);

let commentedUpVote1: number = 500;
let commentedUpVote2: number = 600;
myVideo.setCommentUpVote(commentedUpVote1);
myVideo.setCommentUpVote(commentedUpVote2);

let commentedDownVote1: number = 50;
let commentedDownVote2: number = 40;
myVideo.setCommentDownVote(commentedDownVote1);
myVideo.setCommentDownVote(commentedDownVote2);

let reply1: number = 5;
let reply2: number = 6;
myVideo.setReply(reply1);
myVideo.setReply(reply2);

//display all data in console

console.log(`Search Text: ${myVideo.getSearchText()}`);
console.log(`Video name: ${myVideo.getVideoName()}`);
console.log(`Video Description: ${myVideo.getVideoDescription()}`);
console.log(`Category: ${myVideo.getCategory()}`);
console.log(`Video view count: ${myVideo.getViewCount()}`);
console.log(`Video up vote: ${myVideo.getUpVote()}`);
console.log(`Video down vote: ${myVideo.getDownVote()}`);
console.log(`Video Publisher: ${myVideo.getPublisher()}`);
console.log(`Video published on: ${myVideo.getPublishedOn()}`);
console.log(`Licence: ${myVideo.getLicence()}`);
console.log(`Video Comment Count: ${myVideo.getCommentCount()}`);

console.log(`Comment: ${myVideo.getComment()}`);
console.log(`Commented by: ${myVideo.getCommentedBy()}`);
console.log(`Commented on: ${myVideo.getCommentedOn()}`);
console.log(`Comment up vote: ${myVideo.getCommentUpVote()}`);
console.log(`Comment down vote: ${myVideo.getCommentDownVote()}`);
console.log(`Reply on each comment: ${myVideo.getReply()}`);