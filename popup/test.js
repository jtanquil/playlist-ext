let test_playlist = [
  "https://www.youtube.com/embed/G8voJ0xK5pc",
  "https://www.youtube.com/embed/DmStNF35o1w",
  "https://www.youtube.com/embed/ZCtss8CCdSI",
];

window.onload = () => {
  const player = document.createElement("iframe");
  player.src = "https://www.youtube.com/embed/ZCtss8CCdSI";

  const list = document.createElement("ul");
  list.className += "playlist";

  test_playlist.forEach((item, index) => {
    const listItem = document.createElement("li");
    const playlistLink = document.createElement("a");

    listItem.className += "playlist-item";
    
    playlistLink.href = item;
    playlistLink.appendChild(document.createTextNode(`${index}: ${item}`));

    listItem.appendChild(playlistLink);
    list.appendChild(listItem);
  });

  document.body.appendChild(player);
  document.body.appendChild(list);
};

window.addEventListener("load", (event) => {
  const playlist = document.querySelector(".playlist");

  if (!!playlist.children && playlist.children.length > 0) {
    const playlistItems = playlist.children;
  
    for (const playlistItem of playlistItems) {
      const link = playlistItem.firstChild;

      link.addEventListener("click", (event) => {
        const player = document.querySelector("iframe");
        player.src = playlistItem.firstChild.href;

        // const button = document.querySelector("yt-large-play-button");
        // button.click();
      });
    }
  }
});