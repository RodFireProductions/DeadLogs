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
  if ( postArchive[i][2] === postlocation ) {
    index = i;
  }
}

let previous = postArchive[index-1];
let next = postArchive[index+1];
let currentLocation = postArchive[index];

console.log(currentLocation)

// ---- Injection ---- ///

// Html titles
pageTitle = document.getElementById('postTitle');
if (pageTitle === null) {
    document.title = siteName;
} else if (pageTitle.innerHTML === "") {
    document.title = currentLocation[0];
    pageTitle.innerHTML = currentLocation[0];
} else {
    document.title = pageTitle.innerHTML;
};


// HTML lang attribute
document.documentElement.setAttribute("lang", lang);

// Post dates
let postDate = document.getElementById('postDate');
if ( postDate != null) {
    postDate.innerHTML = currentLocation[1];
}

// Site navigation
let navv = document.getElementById('nav');
let d;
for (d = 0; d < navi.length; d++) {
    navv.innerHTML += '<a href="' + path + navi[d][1] +'">' + navi[d][0] + '</a>';
}

// Footer
let foot = '<div> Built using <a target="_blank" href="https://deadjournals.deadinsideartist.art//">DeadJournals</a> <br>&#169; Copyright ' + year.getFullYear() + ' ' + author.name + ' - All Rights Reserved</div>';
document.getElementById('footer').innerHTML = foot;

// Post navigation
let postNav = document.getElementById('changePost');
if (postNav != null) {
    if ( previous != null ) {
        postNav.innerHTML += '<a class="changePost" href="../' + previous[2] +'">previous</a>';
    } else { postNav.innerHTML += "<div></div>" }
    postNav.innerHTML += '<a class="changePost" href="' + path + navi[2][1] +'">' + navi[2][0] + '</a>';
    if ( next != null ) {
        postNav.innerHTML += '<a class="changePost" href="../' + next[2] +'">next</a>';
    } else { postNav.innerHTML += "<div></div>"  }
}

// Recent posts
let recent = document.getElementById('recentPosts');
if (recent != null) {
    a = postArchive.reverse()
    recent.innerHTML += '<div>Recent posts</div>';
    let r;
    if (a.length >= 3) {
        for (r = 0; r < 3; r++) {
            recent.innerHTML += '<a class="changePost" href="'+ path + "/" + a[r][2] +'">'+ a[r][1]+ " -- " +a[r][0] +'</a><br>';
        }
    } else {
        for (r = 0; r < a.length; r++) {
            recent.innerHTML += '<a class="changePost" href="'+ path + "/" + a[r][2] +'">'+ a[r][1]+ " -- " +a[r][0] +'</a><br>';
        }
    }
    recent.innerHTML += '<a class="changePost" href="'+ path + "/" + navi[2][1] +'">'+ " See all "+'</a><br>';
}


// Archive posts
let archiveList = document.getElementById('archivePage');
if (archiveList != null) {
    a = postArchive.reverse()
    let w;
    for (w = 0; w < a.length; w++) {
      archiveList.innerHTML += '<a class="changePost" href="'+ path + "/" + a[w][2] +'">'+ a[w][1]+ " -- " +a[w][0] +'</a><br>';
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
            let g;
            for (g = 0; g < navi.length; g++) {
                if (g === 0) {
                    aboutt('<a href="'+ socials[g][1] +'">'+ socials[g][0] +'</a>');
                } else {
                    aboutt(' | <a href="'+ socials[g][1] +'">'+ socials[g][0] +'</a>');
                }
            }
        aboutt('</div>');
    } if ( author.line != null) {
        aboutt('<div style="color: var(--accent-color); margin-top: 5px;">'+ author.line +'</div>');
    }
}
