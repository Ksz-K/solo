
function mobileView() {
    var isHide = document.querySelector('#notStaticMenu').classList.contains('mobile-hide');

    if (isHide) {
        document.getElementById('notStaticMenu').classList.remove('mobile-hide')
    } else {
        document.getElementById('notStaticMenu').classList.add('mobile-hide')
    }

    var isPlace = document.querySelector('#mainContent').classList.contains('menuMobileSpaceH');

    if (isPlace) {
        document.getElementById('mainContent').classList.remove('menuMobileSpaceH');

    } else {
        document.getElementById('mainContent').classList.add('menuMobileSpaceH')
    }

}

