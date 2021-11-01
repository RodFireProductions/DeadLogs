/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the script file!

    Here you can edit certain charateristics
    of your site!
--------------------------- # # # # #
-- Table of Contents --
  1. Basic Configs
  2. Posts
*/

//=// --- Basic Configs --- //=// [1]

let siteName = "DeadJournals";
let lang = "en"; // The language of your site. Example, en = english, fr = français (french), etc.
let siteUrl = "https://deadjournals.deadinsideartist.art"; // You can just put the url of your site here, whether that be a subdomain or custom


// Feel free to leave one of these values as 'null' if you don't wish to use them.
let socials = {
    // Set up to 3 links to go in your about page. It could be to your website or socials
    // Heck, even a rick roll if you're feeling like it.
    one: ['', ''], // Example: ['Twitter', 'https://twitter.com/(your account name)']
    two: null,
    three: null
}

// Feel free to leave one of these values as 'null' if you don't wish to use them.
let author = {
    name: "Rodrick 'RodFireProductions'",
    title: 'Just another dead inside artist.', // A job title or personal title, what ever defines you <3
    picture: "./assets/images/author.png", // This is the url of the author picture, can be local or a link. Square or almost square is recommended
    pronouns: 'they/them', // Examples: he/him, she/her, they/them, ze/zir, etc. Resource: https://en.pronouns.page/
    extra: null, // Your orientation, ethinicty, etc? If none, then set this to `null`

    line: "Mushrooms are cute!" // A quote? A goofy phrase? Your own personal motto? Be creative!
}

let navi = {
    home: ['home','/index.html'],
    about: ['examples','/examples.html'],
    archive: ['get started','/tutorial.html']
}

// --------------------------- # # # # #
// // / / / // / / / / // / / / / / / / /

//=// --- Posts --- //=// [2]
/*
    This array is very important when it comes to the navigation between
    each post.

    **ANYTIME** you add a new post to your site/blog, please add the file
    location to the *bottom* of `postArchive` and the post title to the
    *bottom* of `postArchiveNames`. This will keep the posts linked
    together and in chronological order.
*/
let postArchive = [
    "./post/template.html"
];
let postArchiveNames = [
    "template"
];
let postArchiveDates = [
    //"25 Oct 2021"
];

let examplesArchive = [
    "./examples/stone_news/index.html"
];
let examplesNames = [
    "Stone News"
];
let examplesDescription = [
    "An old timey, stoney newspaper! What will you journal on? What stories will you share?"
];
let examplesPictures = {
    stone: ["./assets/images/post/stone_1.png", "./assets/images/post/stone_2.png", "./assets/images/post/stone_3.png"]
}

let examplesGihub = {
    stone: ["https://github.com/RodFireProductions/DeadJournals/tree/main/examples/stone_news"]
}


// --------------------------- # # # # #
