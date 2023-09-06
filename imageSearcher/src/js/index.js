'use strict';

const accessKey = "R42bFN8dtMicfDlIPl-LyWBDLMfI4UkwOsGbtifdqoE";

const formElement = document.querySelector("form");
const inputElement = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more");


let inputData = '';
let page = 1;
//async is used for while fetching or using response
async function searchImages() {
  inputData = inputElement.value;
  const uri = `https://api.unsplash.com/search/photos?
  page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(uri);//fetch method as a response
  const data = await response.json();//All uri data converted in json format

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = '';
  }
  results.map((result) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('search-result');
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  })
  page++;
  if (page > 1) {
    showMore.style.display = 'block';
  }
}

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  searchImages();

});
showMore.addEventListener('click', (event) => {
  searchImages();
});