const search = document.getElementById('searchBox');
const icon = document.getElementById('searchIcon');
const input = document.getElementById('mysearch');
const clear = document.getElementById('clearBtn');

icon.addEventListener('click', () => {
    search.classList.add('active');
    input.focus();
});

clear.addEventListener('click', () => {
    input.value = '';
    search.classList.remove('active');
});

input.addEventListener('blur', () => {
    setTimeout(() => {
    if (input.value === '') {
        search.classList.remove('active');
    }
    }, 10); // slight delay to allow clear button click
});


