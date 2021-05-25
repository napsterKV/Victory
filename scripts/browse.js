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
    const img = document.createElement("img");
    img.className = "release_img";
    img.src = releas_item.images[1].url;
    const name = document.createElement("h4");
    name.textContent = releas_item.name;
    const container = document.createElement("div");
    container.className = "release";
    container.appendChild(img);
    container.appendChild(name);
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
