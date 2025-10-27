//Constante para guardar la categoria que se selecciono
const filter = document.getElementById('categoryFilter');
const posts = document.querySelectorAll('.post');

filter.addEventListener('change', () => {
    const selected = filter.value;
    posts.forEach(post => {
        const category = post.getAttribute('data-category');
        post.style.display = (selected === 'all' || category === selected) ? 'block' : 'none';
    });
});