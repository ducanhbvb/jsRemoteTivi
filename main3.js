let Remote = function (id) {
    this.id = id;
    this.setConTrolpower = function (name) {
        if (name.power === 'on') {
            name.power = 'off';
        } else {
            name.power = 'on';
        }
    };
    this.setVolum = function (check) {
        if (check) {
            tivi.volum++;
        } else {
            tivi.volum--;
        }
    }
}
let Tivi = function (status,channel, volum, power) {
    this.status = status;
    this.channel=channel;
    this.volum = volum;
    this.power = power;
    // this.setStatus = function (status) {
    //     this.status = status;
    // };
    this.setChannel=function (channel) {
        this.channel=channel;
    };
    this.getStatus = function () {
        this.status='trang thai ti vi: ' + this.power + ' kenh dang bat= ' + this.channel + ' am luong :' + this.volum;
        return this.status;
    }
};
function onoff() {
    remote.setConTrolpower(tivi);
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += tivi.power + '<br>';
}

function Volum(check) {
    if (tivi.power === 'on') {
        remote.setVolum(check);
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML += 'volumn '+tivi.volum + '<br>';
    } else {
        printPoweroff();
    }
}

function control(channel) {
    if (tivi.power === 'on') {
    tivi.setChannel(channel);
    checkstatus();
    } else {
        printPoweroff();
    }
}

function printPoweroff() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += 'tivi ' + tivi.power;
}

function checkstatus() {
    if (tivi.power === 'on') {
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML += tivi.getStatus() + '<br>';
    } else {
        printPoweroff();
    }
}
let idRemote = 1;
let remote = new Remote(idRemote);
let statusTivi = '';
let channelTivi=1;
let volumTivi = 50;
let powerTivi = 'off';
let tivi = new Tivi(statusTivi,channelTivi, volumTivi, powerTivi);

