const api = {
    key: "04cb38649b0f668118769eba09f6a313",
    baseurl: "https://api.openweathermap.org/data/2.5"
}

const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        //getResults(searchbar.value);
        console.log(searchbar.value);
    }
}