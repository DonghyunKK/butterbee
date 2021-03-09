const fetchFeed = () => {
  let url = "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev";
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const limit = 9
      const feed = data.data
      for (let i = 0; i < limit; i++) {
        document.querySelector(".feed-box").insertAdjacentHTML('beforeEnd', 
        // ` <li class="feed-image" style="background-image: url(${feed[i].media_url});">
          `<a class="feed-link" href="${feed[i].permalink}" target="_blank"><img class="feed-image" src="${feed[i].media_url}"></a>`);
          // </li>`);
      }
    })
}

export { fetchFeed };