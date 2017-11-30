var map;

ymaps.ready(function () {
    map = new ymaps.Map(
        "map", {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['geolocationControl', 'zoomControl', 'rulerControl', 'typeSelector']
        }
    );
    
    cityCategories.forEach(function (cat) {
        for (var i = 0; i < cat.cities.length; i++) {
            map.geoObjects.add(placemark(cat.cities[i], cat.name))
        }
    });

    map.setBounds(map.geoObjects.getBounds());
});
