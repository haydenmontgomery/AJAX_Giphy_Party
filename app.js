const searchInput = document.querySelector('#search_term');
const searchButton = document.querySelector('#search_button');
const removeButton = document.querySelector('#remove');
const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const limit = '1';
const gifsContainer = document.querySelector('#gifs');
console.log("Let's get this party started!");


searchButton.addEventListener('click', function() {
    const q = searchInput.value;
    const newQ = encodeURIComponent(q);
    const url = getGif(newQ, api_key);
})

async function getGif(q, api_key){
    const url = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&limit=${limit}`;
    const res = await axios.get(url);
    console.log(res);
    const gifURL = res.data.data[0].images.downsized.url
    addGif(gifURL);
}

function addGif(url) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.classList = 'col-3';
    img.src = url;
    img.classList = 'img-fluid';
    div.appendChild(img);
    gifsContainer.appendChild(div);
}

removeButton.addEventListener('click', function() {
    gifsContainer.innerHTML = '';
})