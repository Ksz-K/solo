
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
function openPage1() {
    var webAddress = document.getElementById('link1').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage2() {
    var webAddress = document.getElementById('link2').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage3() {
    var webAddress = document.getElementById('link3').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage4() {
    var webAddress = document.getElementById('link4').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage5() {
    var webAddress = document.getElementById('link5').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage6() {
    var webAddress = document.getElementById('link6').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage7() {
    var webAddress = document.getElementById('link7').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage8() {
    var webAddress = document.getElementById('link8').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage9() {
    var webAddress = document.getElementById('link9').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
function openPage10() {
    var webAddress = document.getElementById('link10').innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}
