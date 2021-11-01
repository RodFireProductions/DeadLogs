/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the injection file!

    This file *shouldn't* be edited unless you
    know what you're doing.

*/

let url = window.location.pathname;
const year = new Date();

let postlocation = url.substring(url.lastIndexOf('post/'));
let path = ".";
if (url.includes('post/')) {
    path = '..';
}

// ---- Post organization ---- ///

let index = -1;
let i;
for (i = 0; i < postArchive.length; i++) {
  if ( postArchive[i] === postlocation ) {
    index = i;
  }
}

let previous = postArchive[index-1];
let next = postArchive[index+1];

// ---- Injection ---- ///

// Html titles
pageTitle = document.getElementById('postTitle');
indexTitle = document.getElementById('blogTitle');
if (pageTitle === null) {
    document.title = siteName;
} else {
    document.title = pageTitle.innerHTML;
};

if (indexTitle != null) {
    if (indexTitle.innerHTML === "") {
        indexTitle.innerHTML = siteName;
    } else {
        document.title = indexTitle.innerHTML;
    };
}

// HTML lang attribute
document.documentElement.setAttribute("lang", lang);

// Site navigation
let navv = document.getElementById('nav');
navv.innerHTML += '<a href="' + path + navi.home[1] +'">' + navi.home[0] + '</a>';
navv.innerHTML += '<a href="' + path + navi.about[1] +'">' + navi.about[0] + '</a>';
navv.innerHTML += '<a href="' + path + navi.archive[1] +'">' + navi.archive[0] + '</a>';

// Footer
let foot = '<div> Built using <a target="_blank" href="https://deadjournals.deadinsideartist.art//">DeadJournals</a> <br>&#169; Copyright ' + year.getFullYear() + ' ' + author.name + ' - All Rights Reserved</div>';
document.getElementById('footer').innerHTML = foot;

// Post navigation
let postNav = document.getElementById('changePost');
if (postNav != null) {
    if ( previous != null ) {
        postNav.innerHTML += '<a class="changePost" href="../' + previous +'">previous</a>';
    } else { postNav.innerHTML += "<div></div>" }
    postNav.innerHTML += '<a class="changePost" href="' + path + navi.archive[1] +'">' + navi.archive[0] + '</a>';
    if ( next != null ) {
        postNav.innerHTML += '<a class="changePost" href="../' + next +'">next</a>';
    } else { postNav.innerHTML += "<div></div>"  }
}

// Recent posts
let recent = document.getElementById('recentPosts');
if (recent != null) {
    a = postArchive.reverse()
    s = postArchiveDates.reverse()
    d = postArchiveNames.reverse()
    recent.innerHTML += '<div>Recent posts</div>';
    let r;
    if (a.length >= 3) {
        for (r = 0; r < 3; r++) {
            recent.innerHTML += '<a class="changePost" href="'+ path + "/" + a[r] +'">'+ s[r]+ " -- " +d[r] +'</a><br>';
        }
    } else {
        for (r = 0; r < a.length; r++) {
            recent.innerHTML += '<a class="changePost" href="'+ path + "/" + a[r] +'">'+ s[r]+ " -- " +d[r] +'</a><br>';
        }
    }
    recent.innerHTML += '<a class="changePost" href="'+ path + "/" + navi.archive[1] +'">'+ " See all "+'</a><br>';
}


// Archive posts
let archiveList = document.getElementById('archivePage');
if (archiveList != null) {
    a = postArchive.reverse()
    s = postArchiveDates.reverse()
    d = postArchiveNames.reverse()
    let w;
    for (w = 0; w < a.length; w++) {
      archiveList.innerHTML += '<a class="changePost" href="'+ path + "/" + a[w] +'">'+ s[w]+ " -- " +d[w] +'</a><br>';
    }
}

// About page
let aboutAuthor = document.getElementById('aboutColumn');
function aboutt(x){
    aboutAuthor.innerHTML += x;
}
if (aboutAuthor != null) {
    if ( author.name != null) {
        aboutt('<div style="font-size: 1.5em;">' + author.name + '</div>');
    } if ( author.title != null ) {
        aboutt('<div><i>' + author.title + '</i></div>');
    } if ( author.picture != null ) {
        aboutt('<img style="height: 200px;" src="'+ author.picture +'">');
    } if ( author.pronouns != null) {
        aboutt('<div>' + author.pronouns + '</div>');
    } if ( author.extra != null ) {
        aboutt('<div>');
        let e;
        for (e = 0; e < author.extra.length; e++) {
            if (e === 0) {
            aboutt(author.extra[e]);
            } else {
                aboutt(" | " +author.extra[e]);
            }
        }
        aboutt('</div>');
    } if ( socials != null) {
        aboutt('<div>');
            if (socials.one != null) {
                aboutt('<a href="'+ socials.one[1] +'">'+ socials.one[0] +'</a>');
            } if (socials.two != null) {
                aboutt(' | <a href="'+ socials.two[1] +'">'+ socials.two[0] +'</a>');
            } if (socials.three != null) {
                aboutt(' | <a href="'+ socials.three[1] +'">'+ socials.three[0] +'</a>');
            }
        aboutt('</div>');
    } if ( author.line != null) {
        aboutt('<div style="color: var(--accent-color); margin-top: 5px;">'+ author.line +'</div>');
    }
}

// Post dates
let postDate = document.getElementById('postDate');
if ( postDate != null) {
    postDate.innerHTML = postArchiveDates[index];
}
