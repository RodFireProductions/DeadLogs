/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the comic injection file!

    This file *shouldn't* be edited unless you
    know what you're doing.

*/

// ---- Comic pages / images ---- ///

let comicImage = document.getElementById('images');

if (comicImage != null) {

    let r;
    let i;
    let v;
    for (r = 0; r < url.length; r++) {
        if (url[r] === "=") {
            i = r;
        }
        if (url[r] === "/") {
            v = r;
        }
    }
    p = url.substring(v+1, i)
    w = url.substring(i+1);
    w = w.substring(0, w.length - 5);

    let l;
    for (l = 0; l < chapterArchive.length; l++) {
        pages = chapterArchive[l].pages;

        let h;
        for (h = 0; h < pages.length; h++) {
            numb = pages[h][0].toLowerCase();
            date = pages[h][2];

            if (numb.includes(w) && p === chapterArchive[l].src) {
                if (chapterArchive[l].location != 'page') {
                    comicImage.setAttribute('src', "../../"+pages[h][1]);
                    path = '../..'
                } else {
                    comicImage.setAttribute('src', "../"+pages[h][1]);
                    path = ".."
                }
            }
        }

        // ---- Header / Title ---- ///

        if ( p === chapterArchive[l].src) {
            document.title = chapterArchive[l].chapter +' '+ w;
            if (w != "cover") {
                document.getElementById('pageTitle').innerHTML = chapterArchive[l].chapter +' | ' + chapterArchive[l].page +' '+ w;
            } else {
                document.getElementById('pageTitle').innerHTML = chapterArchive[l].chapter +' | ' + w.charAt(0).toUpperCase() + w.slice(1);
            }
        }
    }
}

// ---- Site Navigation ---- ///
let navv = document.getElementById('nav');
let d;
for (d = 0; d < navi.length; d++) {
    navv.innerHTML += '<a href="' + path + navi[d][1] +'">' + navi[d][0] + '</a>';
}

// ---- Page Navigation System ---- ///

let ultimatePostArchive = [];
let j;
for (j = 0; j < chapterArchive.length; j++) {
    chap = chapterArchive[j].pages
    let o;
    for (o = 0; o < chap.length ; o++) {
        dot = chapterArchive[j].location +'/'+ chapterArchive[j].src +'='+ chap[o][0] +".html";
        ultimatePostArchive.push(dot)
    }
}

    // Organization
let index = -1;
let i;
for (i = 0; i < ultimatePostArchive.length; i++) {
  if ( ultimatePostArchive[i] === postlocation ) {
    index = i;
  }
}

let previous = ultimatePostArchive[index-1];
let next = ultimatePostArchive[index+1];
let currentLocation = ultimatePostArchive[index];

    // Injection
let postNav = document.getElementById('changePost');
if (postNav != null) {
    if ( previous != null ) {
        postNav.innerHTML += '<a class="changePost" href="' + path + '/' + previous +'">previous</a>';
    } else { postNav.innerHTML += "<div></div>" }
    postNav.innerHTML += '<a class="changePost" href="' + path + navi[2][1] +'">' + navi[2][0] + '</a>';
    if ( next != null ) {
        postNav.innerHTML += '<a class="changePost" href="' + path + '/' + next +'">next</a>';
    } else { postNav.innerHTML += "<div></div>"  }
}

    // Event Listeners
if (comicImage != null) {
    if (clickPage === true) {
        comicImage.addEventListener('click', function() {
            if (next != null) {
                window.location = path + '/' + next;
            }
        })
    }

    if (arrowKeys === true) {
        document.documentElement.addEventListener("keydown", function(event) {
            // Left
            if (event.keyCode==37){
                if (previous != null) {
                    window.location = path + '/' + previous;
                }
            }
            // Right
            if (event.keyCode==39){
                if (next != null) {
                    window.location = path + '/' + next;
                }
            }
        });
    }
}

// ---- Archive System ---- ///

let archiveList = document.getElementById('archivePage');
if (archiveList != null) {
    let w;
    for (w = 0; w < chapterArchive.length; w++) {
        archiveList.innerHTML += '<h4>'+ chapterArchive[w].name +'</h4>';

        let b;
        for (b = 0; b < chapterArchive[w].pages.length; b++) {
            archiveList.innerHTML += '<a href="'+ chapterArchive[w].location +'/'+ chapterArchive[w].src+ '=' +chapterArchive[w].pages[b][0] +'.html">'+ chapterArchive[w].pages[b][0] +' - '+ chapterArchive[w].pages[b][2] +'</a><br>';
        }
    }
}
