var signups = 0;
var ftd = 0;
var earned = 0;

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
function openPage(current) {
    var webAddress = document.getElementById(current).innerHTML;
    var urlPosition = webAddress.indexOf(' ');
    var urlAddress = webAddress.slice(0, urlPosition);
    window.open(urlAddress);
}

function addClass(that) {

    if (!that.classList.contains('btn-icon--bigger')) {
        that.classList.add('btn-icon--bigger')
    }
}

function removeClass(that) {
    if (that.classList.contains('btn-icon--bigger')) {
        that.classList.remove('btn-icon--bigger')
    }
}

function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        closeModal()
    })
})

document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal()
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal()
    }
})

function openModal(modal) {
    if (screen.width > 767) {
        document.querySelectorAll('#overlay > *').forEach(function (modal) {
            modal.classList.remove('show')
        })
        document.querySelector('#overlay').classList.add('show')
        document.querySelector(modal).classList.add('show')

    }
}

function hideBar(whichOne) {
    switch (whichOne) {
        case 'signups':
            signups === 1 ? signups = 0 : signups = 1;
            break;

        case 'ftd':
            ftd === 1 ? ftd = 0 : ftd = 1;
            break;

        case 'earned':
            earned === 1 ? earned = 0 : earned = 1;
            break;
    }

    chart();

}


var ctx = document.getElementById('myChart').getContext('2d');

chart();
function chart() {
    Chart.defaults.global.legend.display = false;
    new Chart(ctx, {
        // 1
        type: 'bar',
        data: {
            // 2
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            // 3
            datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
                hidden: signups,
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
                hidden: ftd,
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                // 7
                hidden: earned,
            }]
        },

    })
};



var ctxModal = document.getElementById('myChartModal').getContext('2d');
Chart.defaults.global.legend.display = true;
var chart2 = new Chart(ctxModal, {

    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            // 7

        }]
    },
});