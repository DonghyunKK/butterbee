// const fetchFeed = () => {
//   let url = "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev";
//   fetch(url)
//     .then(response => response.json())
//     .then(console.log(data))
// }

const fetchFeed = () => {

  // let api_endpoint = "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev";
  
  // $.get(api_endpoint, function( json ) {
  // let instabanner = $('#instafeed');
  // let outputHtml = "";
  // outputHtml += '<ul class="myfeed">';
  
  // let limit = 12;
  // let myfeed = json.data;
  
  // for (let i = 0; i < limit; i++) {
  //   outputHtml += '<li>';
  //   outputHtml += '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
  //   outputHtml += '<li>';
  // }
  
  // outputHtml += '<ul>';
  // instabanner.html( outputHtml );
  
  // })
  var settings = {
    "url": "https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev?",
    "method": "get",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
      },
  };
  
  $.ajax(settings).done(function (response) {
    let instabanner = $('#instafeed');
    let outputHtml = "";
    outputHtml += '<ul class="myfeed">';
    
    let limit = 12;
    let myfeed = response.data;
    
    for (let i = 0; i < limit; i++) {
      outputHtml += '<li>';
      outputHtml += '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
      outputHtml += '<li>';
    }
    
    outputHtml += '<ul>';
    instabanner.html( outputHtml );
  
  });
}

// const insta = () => {
  //   var feed = new Instafeed({
    //     target: 'instafeed',
    //     accessToken: 'https://v1.nocodeapi.com/donghyunkk/instagram/pFWHZMNRoxkKrXev',
//     template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
//   });
//   feed.run();
// }

export { fetchFeed };