var config = {
  apiKey: "AIzaSyC7IuiZeD4Fk_Z5VUp4Y3Rq_U1LTVbSw8s",
  authDomain: "sliced-8f528.firebaseapp.com",
  databaseURL: "https://sliced-8f528.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "9404531697"
};
firebase.initializeApp(config);

var db = firebase.database();
var map = $('#map');
var data;

db.ref().on('value',function(snap){
  data = snap.val();

  var pizza_locations = [];

  for(let prop in data){
    pizza_locations.push(data[prop])
  }
  pizza_locations.forEach(function(location){
    var marker = new google.maps.Marker({
      position: location.position,
      map: map,
      shopName: location.name
    });

    var infowindow = new google.maps.InfoWindow({
      content: location.name
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  })
})

function initMap() {
  map = new google.maps.Map(map[0], {
    center: {
      lat: 40.7176929,
      lng: -73.982117
    },
    zoom: 13
  });
}