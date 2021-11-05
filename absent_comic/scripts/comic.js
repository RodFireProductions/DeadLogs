/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the comic injection file!

    This file *shouldn't* be edited unless you
    know what you're doing.

*/

// Comic pages / images

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

    console.log(p)
}

let l;
for (l = 0; l < chapterArchive.length; l++) {
    pages = chapterArchive[l].pages;

    let h;
    for (h = 0; h < pages.length; h++) {
        numb = pages[h][0].toLowerCase();
        date = pages[h][2];

        if (numb.includes(w) && p === chapterArchive[l].src) {
            comicImage.setAttribute('src', "../"+pages[h][1]);
        }
    }
}

// Nagivation system (I'm gonna cry)
//.push

let ulimatePostArchive = [];
