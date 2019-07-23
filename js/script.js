
'use strict';
function mobileView() {
    var isHide = document.querySelector('#notStaticMenu').classList.contains('mobile-hide');

    if (isHide) {
        document.getElementById('notStaticMenu').classList.remove('mobile-hide')
    } else {
        document.getElementById('notStaticMenu').classList.add('mobile-hide')
    }
}

document.getElementById('date1').value = new Date().toISOString().substring(0, 10);
document.getElementById('date2').value = new Date().toISOString().substring(0, 10);

function goToGeneral() {
    var general = document.getElementById("general");
    general.scrollIntoView();
}

function goToLinks() {
    var links = document.getElementById("links");
    links.scrollIntoView();
}

function goToPersonal() {
    var personal = document.getElementById("personal");
    personal.scrollIntoView();
}

