if (document.getElementById("map2")) {
	function initMap2() {

        var styleMap = [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#CC0000"
                    }
                ]
            }
        ];
        
        mapDraw();

		function mapDraw() {
			var mainAcadLatLng = {
				lat: 50.473750,
				lng: 30.395400
			};
			//    var mainAcadLatLng = {lat: 50.400322, lng: 30.520159};

			var map = new google.maps.Map(document.getElementById('map2'), {
				zoom: 17,
				disableDefaultUI: true,
				center: mainAcadLatLng,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: false,
				scaleControl: false,
				//        draggable: false,
				styles: styleMap
			});

			var imageMA = {
				url: 'img/flag.png',
				size: new google.maps.Size(40, 48),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 66),
				scaledSize: new google.maps.Size(40, 48)
			};
			//    var imageMA = {
			//        path: google.maps.SymbolPath.CIRCLE,
			//        scale: 1
			//    };
			var shape = {
				coords: [1, 1, 1, 20, 18, 20, 18, 1],
				type: 'poly'
			};


			var mainAcademyCoordinate = {
				lat: 50.473750,
				lng: 30.395400
				
			};
			var markerMainAcademy = new google.maps.Marker({
				position: mainAcademyCoordinate,
				map: map,
				icon: imageMA,
				draggable: false,
				//        shape: shape,
				animation: google.maps.Animation.BOUNCE,
				title: 'Интернет агенство "VTrende" ' 
			});

			var infowindow = new google.maps.InfoWindow({
				content: 'Интернет агенство "VTrende" ' 
			});

			markerMainAcademy.addListener('click', function () {
				infowindow.open(map, markerMainAcademy);

			});

			google.maps.event.addDomListener(window, 'resize', function () {
				//        if (window.innerWidth < 690) {
				//            mainAcadLatLng = mainAcademyCoordinate;
				//            console.log(window.innerWidth);
				//        }

				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");

				if (window.innerWidth < 690) {
					map.setCenter(mainAcademyCoordinate);
				} else {
					map.setCenter(mainAcadLatLng);
				}

			});
		}




	}
}
