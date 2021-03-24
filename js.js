document.querySelector('img').addEventListener('touchstart', myFunc);

function myFunc(e) {
    document.querySelector('.out').innerHTML = e.touches.length;

}