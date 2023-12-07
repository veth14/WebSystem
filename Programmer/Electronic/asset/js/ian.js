let clock = document.getElementById('clock');
let time = document.getElementById('time');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    clock.style.left = value * 1.3 + 'px';
    time.style.left = value * -1.3 + 'px';
});