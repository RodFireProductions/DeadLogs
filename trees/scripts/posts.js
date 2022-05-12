/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the injection file!

    This file *shouldn't* be edited unless you
    know what you're doing.
--------------------------- # # # # #
-- Table of Contents --
  1. Path
  2. Post Organization
  3. Basic Injections
    - Language Attribute
    - Site Navigation
    - Footer
  4. Post Injections
    - Titles
    - Post Dates
    - Post Navigation
  5. Index & Archive Injections
    - Archived Posts
    - Recent Posts
*/

// ---- Path ---- /// [1]

let url = window.location.pathname;

let postlocation = url.substring(url.lastIndexOf(folder+'/') + (folder.length + 1));
let path = ".";
if (url.includes(folder+'/')) {
    path = '..';
}


// ---- Post Organization ---- /// [2]

let index = -1;
for (let i = 0; i < postArchive.length; i++) {
  if ( postArchive[i][2] === postlocation ) {
    index = i;
  }
}
let previous = postArchive[index-1];
let next = postArchive[index+1];
let currentLocation = postArchive[index];

console.log(postlocation)
console.log(currentLocation)

// ---- Basic Injections ---- /// [3]

// HTML language attribute
document.documentElement.setAttribute("lang", lang);

// Site navigation
let naV = document.getElementById('nav');
for (let d = 0; d < navi.length; d++) {
    naV.innerHTML += '<a href="' + path + navi[d][1] +'">' + navi[d][0] + '</a>';
}

// Footer
let foot = `
    <div>
        ${footer}
    </div>
    <div>
        Built using <a target="_blank" href="https://deadlogs.deadinsideartist.art">DeadLogs</a>
    </div>
`;
document.getElementById('footer').innerHTML = foot;

// Blog title
if (document.getElementById('blogTitle')) { document.getElementById('blogTitle').innerHTML = siteName; }


// ---- Post Injections ---- /// [4]

// Post and Html title
pageTitle = document.getElementById('postTitle');
if (pageTitle === null) {
    document.title = siteName;
} else if (pageTitle.innerHTML === "") {
    document.title = currentLocation[0];
    pageTitle.innerHTML = currentLocation[0];
} else {
    document.title = pageTitle.innerHTML;
};

// Post dates
let postDate = document.getElementById('postDate');
if ( postDate != null) {
    postDate.innerHTML = currentLocation[1];
}

// Post navigation
let postNav = document.getElementById('changePost');
if (postNav != null) {
    if ( previous != null ) {
        postNav.innerHTML += '<a class="changePost" href="' + previous[2] +'">previous</a>';
    } else { postNav.innerHTML += "<div></div>" }
    postNav.innerHTML += '<a class="changePost" href="' + path + middleLink[1] +'">' + middleLink[0] + '</a>';
    if ( next != null ) {
        postNav.innerHTML += '<a class="changePost" href="' + next[2] +'">next</a>';
    } else { postNav.innerHTML += "<div></div>"  }
}

// ---- Index & Archive Injections ---- /// [5]

// Archive posts
let archiveList = document.getElementById('archivePage');
if (archiveList != null) {
    a = postArchive.reverse()
    let w;
    for (w = 0; w < a.length; w++) {
      archiveList.innerHTML += '<a class="changePost" href="'+ folder + "/" + a[w][2] +'">'+ a[w][1]+ " ◉ " +a[w][0] +'</a><br>';
    }
}

// Recent posts
let recent = document.getElementById('recentPosts');
if (recent != null) {
    a = postArchive.reverse()
    recent.innerHTML += '<div>Recent posts</div>';
    let r;
    if (a.length >= 3) {
        for (r = 0; r < 3; r++) {
            recent.innerHTML += '<a class="changePost" href="'+ folder + '/' + a[r][2] +'">'+ a[r][1]+ " ◉ " +a[r][0] +'</a><br>';
        }
    } else {
        for (r = 0; r < a.length; r++) {
            recent.innerHTML += '<a class="changePost" href="'+ folder + '/' + a[r][2] +'">'+ a[r][1]+ " ◉ " +a[r][0] +'</a><br>';
        }
    }
    recent.innerHTML += '<a class="changePost" href="'+ path + middleLink[1]+'">'+ " See all "+'</a><br>';
}
