var najax = require('najax');

var albumId = process.argv[2];

var settings = {
  "url": "https://api.imgur.com/3/album/" + albumId + "/images",
  "method": "GET",
  "headers": {
    "authorization": "Client-ID 8a70e235b1feb27",
    "cache-control": "no-cache",
    "postman-token": "95254205-e52e-1fed-c4e3-b4521d66b770"
  }
};

najax(settings).success(function (response) {
  response = JSON.parse(response);

  for (var i = response.data.length - 1; i >= 0; i--) {
  	var imgUrl = response.data[i].link;
  	console.log(imgUrl);
  }

}).error(function (err) {
	console.log(err);
});