/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the injection file!

    This file *shouldn't* be edited unless you
    know what you're doing.

*/

let url = window.location.pathname;
const year = new Date();

let postlocation = url.substring(url.lastIndexOf('page/'));
let path = ".";

// ---- Injection ---- ///


// HTML lang attribute
document.documentElement.setAttribute("lang", lang);

// ---- Footer ---- ///
let foot = '<div> Built using <a target="_blank" href="https://deadjournals.deadinsideartist.art//">DeadJournals</a> <br>&#169; Copyright ' + year.getFullYear() + ' ' + author.name + ' - All Rights Reserved</div>';
document.getElementById('footer').innerHTML = foot;


// About page
let aboutAuthor = document.getElementById('aboutColumn');
let aboutName = document.getElementById('aboutName');
function aboutt(x){
    aboutName.innerHTML += x;
}
if (aboutAuthor != null) {
    if ( author.name != null) {
        aboutt('<div style="font-size: 1.5em;">' + author.name + '</div>');
    } if ( author.title != null ) {
        aboutt('<div><i>' + author.title + '</i></div>');
    } if ( author.picture != null ) {
        aboutAuthor.innerHTML += '<img src="'+ author.picture +'">';
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
