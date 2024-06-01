let test_playlist = [
  "https://www.youtube.com/watch?v=G8voJ0xK5pc",
  "https://www.youtube.com/watch?v=DmStNF35o1w",
  "https://www.youtube.com/watch?v=ZCtss8CCdSI",
];

window.onload = () => {
  const list = document.createElement("ul");

  test_playlist.forEach((item, index) => {
    const listItem = document.createElement("li");
    const playlistLink = document.createElement("a");
    
    playlistLink.href = item;
    playlistLink.appendChild(document.createTextNode(`${index}: ${item}`));

    listItem.appendChild(playlistLink);
    list.appendChild(listItem);
  });

  document.body.appendChild(list);
};