/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the configuration file!

    Here you can edit certain charateristics
    of your site!
--------------------------- # # # # #
-- Table of Contents --
  1. Basic Configs
  2. Post Arrays / Archive
*/

//=// --- Basic Configs --- //=// [1]

let siteName = 'My Site!';
let lang = 'en'; // The language of your site. Example, en = english, fr = français (french), etc.
let siteUrl = ''; // You can just put the url of your site here, whether that be a subdomain or custom.

let socials = [
    // Set up links to go in your about page. It could be to your website or socials
    // Heck, even a rick roll if you're feeling like it.
    ['My Blog', siteUrl] // Example: ['Twitter', 'https://twitter.com/(your account name)']
];

// Feel free to leave one of these values as 'null' if you don't wish to use them.
let author = {
    name: 'Your Name',
    url: ''
};

// This is where you define the pages that'll be in your navigation bar throughout the site.
let navi = [
    ['home','/index.html'],
    ['about','/about.html'],
    ['archive','/archive.html']
];

// This is the text that appears in the footer of your site. Feel free to customize it.
let footer = `
    Owned & Written by <a href="${author.url}" target="_blank">${author.name}</a>
`;

// --------------------------- # # # # #
// // / / / // / / / / // / / / / / / / /

//=// --- Posts --- //=// [2]
/*
    This array is very important when it comes to the navigation between
    each post.

    **ANYTIME** you add a new post to your site/blog, please add the file
    location to the *bottom* of `postArchive`. This will keep the posts linked
    together and in chronological order.
*/

let postArchive = [
    //['Title', 'Date', 'Location']
]
// --------------------------- # # # # #
// // / / / // / / / / // / / / / / / / /
