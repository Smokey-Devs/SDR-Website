const btn = document.querySelector('.themeToggle');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    btn.classList.toggle('active');
});
