/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the script file!

    Here you can edit certain charateristics
    of your site!
--------------------------- # # # # #
-- Table of Contents --
  1. Basic Configs
  2. Page Arrays / Archive
  3. Chapter Archive
*/

//=// --- Basic Configs --- //=// [1]

let siteName = "Comic Name";
let lang = "en"; // The language of your site. Example, en = english, fr = français (french), etc.
let siteUrl = ""; // You can just put the url of your site here, whether that be a subdomain or custom

// Enable or disable certain page turning mechanics
let clickPage = true; // Clicking page image will advance to the next page
let arrowKeys = true; // Use <- and -> keys to go back and forth between pages


// Feel free to leave one of these values as 'null' if you don't wish to use them.
let socials = [
    // Set up links to go in your about page. It could be to your website or socials
    // Heck, even a rick roll if you're feeling like it.
    ['My Blog', siteUrl] // Example: ['Twitter', 'https://twitter.com/(your account name)']
]

// Feel free to leave one of these values as 'null' if you don't wish to use them.
let author = {
    name: 'Your Name',
    title: 'A human on the internet', // A job title or personal title, what ever defines you <3
    picture: 'assets/images/pfp2-min.png', // This is the url of the author picture, can be local or a link. Square or almost square is recommended
    pronouns: null, // Examples: he/him, she/her, they/them, ze/zir, etc. Resource: https://en.pronouns.page/
    extra: ['human'], // Your orientation, ethinicty, etc? If none, then set this to `null`

    line: null // A quote? A goofy phrase? Your own personal motto? Be creative!
}

let navi = [
    ['home','/index.html'],
    ['about','/about.html'],
    ['archive','/archive.html']
]

// --------------------------- # # # # #
// // / / / // / / / / // / / / / / / / /

//=// --- Pages --- //=// [2]
/*
    This array is very important when it comes to the navigation between
    each post.

    **ANYTIME** you add a new page to your comic/book/zine, please add the file
    location to the *bottom* of whichever chapter you're in. This will keep the
    posts linked together in the right order.

    **Goes first to last from top to bottom.**
*/

let meetChalice = [
    ['cover', '/assets/images/meet_chalice/FRONT.png', "October 1, 2021"],
    ['1', '/assets/images/meet_chalice/INNERFRONT.png', "October 1, 2021"],
    ['2', '/assets/images/meet_chalice/1.png', "October 1, 2021"],
    ['3', '/assets/images/meet_chalice/2.png', "October 1, 2021"],
    ['4', '/assets/images/meet_chalice/3.png', "October 1, 2021"],
    ['5', '/assets/images/meet_chalice/4.png', "October 1, 2021"],
    ['6', '/assets/images/meet_chalice/5.png', "October 1, 2021"],
    ['7', '/assets/images/meet_chalice/BACK.png', "October 1, 2021"]
]

let hurt = [
    ['cover', '/assets/images/hurt/FRONT.png', "October 8, 2021"],
    ['1', '/assets/images/hurt/INNERFRONT.png', "October 8, 2021"],
    ['2', '/assets/images/hurt/1.png', "October 8, 2021"],
    ['3', '/assets/images/hurt/2.png', "October 8, 2021"],
    ['4', '/assets/images/hurt/3.png', "October 8, 2021"],
    ['5', '/assets/images/hurt/4.png', "October 8, 2021"],
    ['6', '/assets/images/hurt/5.png', "October 8, 2021"],
    ['7', '/assets/images/hurt/BACK.png', "October 8, 2021"]
]

// --------------------------- # # # # #

//=// --- Chapter --- //=// [3]

let chapterArchive = [
    {
        name: '|| ♡ || Meet Chalice || ♡ ||',
        src: 'meet',
        location: 'page/meet_chalice',
        pages: meetChalice,

        chapter: 'Meet Chalice ♡',
        page: 'Page'
    },
    {
        name: '|| ✂️ || Hurt || ✂️ ||',
        src: 'hurt',
        location: 'page',
        pages: hurt,

        chapter: 'Hurt ✂️',
        page: 'Page'
    }
]

// --------------------------- # # # # #
