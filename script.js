var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
            screen.value += btntext;
    });
}

function square(){
    screen.value = Math.pow(screen.value, 2);
}

function qubbed(){
    screen.value = Math.pow(screen.value, 3)
}

function sqrt() {
    screen.value = Math.pow(screen.value, 1/2);
}

function sqrt3(){
    screen.value = Math.pow(screen.value, 1/3); 
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function ln(){
    screen.value = Math.log(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

<<<<<<< HEAD
    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
=======
    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
>>>>>>> f70a2990b4ec70ac933c15016aa1acdbec250739
