const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const imageResults = document.getElementById('imageResults');
const loadMoreBtn = document.getElementById('loadMore');

let page = 1;
let query = '';
let API_KEY = '54846539-b7d08baaf648f2962672c3dfb'; // <-- Replace with your key

form.addEventListener('submit', e => {
    e.preventDefault();
    query = searchInput.value.trim();
    if (!query) return;

    page = 1;
    imageResults.innerHTML = '';
    loadImages();
});

loadMoreBtn.addEventListener('click', () => {
    page++;
    loadImages();
});

async function loadImages() {
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=20&page=${page}`);
        const data = await response.json();

        if (data.hits.length === 0 && page === 1) {
            imageResults.innerHTML = '<p>No images found.</p>';
            loadMoreBtn.style.display = 'none';
            return;
        }

        const cards = data.hits.map(img => `
            <a href="${img.pageURL}" target="_blank">
                <img src="${img.webformatURL}" alt="${img.tags}">
            </a>
        `).join('');

        imageResults.insertAdjacentHTML('beforeend', cards);

        // Show "Load More" button only if there are more images
        loadMoreBtn.style.display = data.hits.length < 20 ? 'none' : 'inline-block';

    } catch (err) {
        console.error(err);
        imageResults.innerHTML = '<p>Error fetching images</p>';
        loadMoreBtn.style.display = 'none';
    }
}