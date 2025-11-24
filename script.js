// Navigation handling
const btns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');


btns.forEach(btn => {
btn.addEventListener('click', () => {
const target = btn.getAttribute('data-target');


// Switch active button
btns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');


// Switch active page
pages.forEach(p => p.classList.remove('active'));
document.getElementById(target).classList.add('active');
});
});
