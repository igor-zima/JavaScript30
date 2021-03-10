const endpoint =
  'https://gist.githubusercontent.com/igorzima/2af25b865f41ef9ee8bcca88b5159b9c/raw/3d10fb278cefc6670c09baf4fe6bc6ec5fbadf67/gistfile1.txt';

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function searchCity(val, arr) {
  const regEx = new RegExp(val, 'gi');

  return arr.filter((place) => place.city.match(regEx) || place.admin_name.match(regEx));
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function createCitiesList() {
  const matchArr = searchCity(this.value, cities);
  let html = '';

  if (this.value && matchArr.length) {
    html = matchArr
      .map((place) => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.admin_name.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
      })
      .join('');
  } else if (!this.value) {
    html = `
    <li>Filter for a city</li>
    <li>or a region</li>
    `;
  } else {
    html = `
    <li>No match</li>
    `;
  }

  suggestions.innerHTML = html;
}

searchInput.addEventListener('input', createCitiesList);
