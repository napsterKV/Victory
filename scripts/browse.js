// Load data

fetch("./data/new-releases.json")
  .then((response) => response.json())
  .then(newReleasesLoaded);

fetch("./data/playlists.json")
  .then((response) => response.json())
  .then(playlistsLoaded);

// Your code

/*
  ul#newRelease
    li
      img
*/

function newReleasesLoaded(data) {
  const releases = document.querySelector("div.new_releases");
  const releases_arr = [];
  for (const releas_item of data.albums.items) {
    const block_img = document.createElement("div");
    block_img.className = "release_block";
    const img = document.createElement("img");
    img.className = "release_img";
    img.src = releas_item.images[1].url;
    block_img.appendChild(img);
    const name = document.createElement("h4");
    name.className = "release_name";
    name.textContent = releas_item.name;
    const container = document.createElement("div");
    container.className = "release";
    const releas_artist = document.createElement("p");
    releas_artist.textContent = releas_item.artists[0].name;
    releas_artist.className = "releas_artist";

    container.appendChild(block_img);
    container.appendChild(name);
    container.appendChild(releas_artist);
    releases_arr.push(container);
  }
  releases.append(...releases_arr);
}

function playlistsLoaded(data) {
  const playlistsElem = document.querySelector("#featuredPlaylists");

  const playlists_arr = [];

  for (const playlist_item of data.playlists.items) {
    const img = document.createElement("img");
    img.src = playlist_item.images[0].url;
    img.className = "playlist-style";
    const name = document.createElement("h4");
    name.className = "playlist-text";
    name.textContent = playlist_item.name;
    const container = document.createElement("div");
    container.className = "playlist-container";
    const description = document.createElement("h3");
    description.className = "playlist-description";
    description.textContent = playlist_item.description;
    const textContainer = document.createElement("div");
    container.appendChild(img);
    textContainer.appendChild(name);

    textContainer.appendChild(description);
    container.appendChild(textContainer);
    playlists_arr.push(container);
  }
  playlistsElem.append(...playlists_arr);
}

// const btn = document.querySelector("#navToggler");
// const navMenu = document.querySelector("nav__menu");
// const dimmer = document.querySelector("dimmer");

// btn.addEventListener("click", () => {
//   navMenu.classList.toggler("nav__menu_open");
//   dimmer.classList.toggler("dimmer_active");
// });

// dimmer.addEventListener("click", () => {
//   navMenu.classList.remove("nav__menu_open");
//   dimmer.classList.remove("dimmer_active");
// });

const btn = document.querySelector("#navToggler");
const navMenu = document.querySelector(".nav__menu");
const dimmer = document.querySelector(".dimmer");

btn.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu_open");
  dimmer.classList.toggle("dimmer_active");
});

if (navMenu.classList.contains("nav__menu_open")) {
  dimmer.classList.add("dimmer_active");
} else {
  dimmer.classList.remove("dimmer_active");
}

dimmer.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu_open");
  dimmer.classList.remove("dimmer_active");
});
