// const fetchFeed = () => {
//   let url = "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev";
//   fetch(url)
//     .then(response => response.json())
//     .then(console.log(data))
// }

const fetchFeed = () => {

  // const buildFeedHtml = () => {
  //   feed = `<ul class="feed-box">
  //             <li class="feed-image" style="background-image: url(${});">
  //             <a href="${permalink}"><img title="{{caption}}" src="{{image}}" /></a>
  //             </li>
  //           </ul>`
  // }

  let url = "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev";
  // fetch(url)
  //   .then(response => response.json())
  //   .then((data) => {
      
  //   })
  

  // var settings = {
  //   "url": "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev?",
  //   "method": "get",
  //   "timeout": 0,
  //   "headers": {
  //       "Content-Type": "application/json"
  //     },
  // };

  //  $.ajax(settings).done(function (response) {
  //    console.log(response.data)
  //  });
  
  $.get(url, function (json) {
    let instabanner = $('#instafeed');
    let outputHtml = "";
    outputHtml += '<ul class="myfeed">';
    
    let limit = 12;
    let myfeed = json.data;
    console.log(myfeed)
    
    for (let i = 0; i < limit; i++) {
      outputHtml += '<li>';
      if (myfeed[i].media_type == 'VIDEO') {
        outputHtml += '<i class="fas fa-video"><a target="_blank" herf="' + myfeed[i].permalink+'" style="background-image: url('+myfeed[i].media_url+')"></a>';
      } else {
        outputHtml += '<a target="_blank" herf="'+myfeed[i].permalink+'" style="background-image: url('+myfeed[i].media_url+')"></a>';
      }
      outputHtml += '</li>';
    }
    
    outputHtml += '</ul>';
    instabanner.html( outputHtml );
  
  });
};

// const insta = () => {
  //   var feed = new Instafeed({
    //     target: 'instafeed',
    //     accessToken: 'https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev',
//     template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
//   });
//   feed.run();
// }

export { fetchFeed };