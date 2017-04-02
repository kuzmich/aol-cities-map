var map;

ymaps.ready(function () {
    map = new ymaps.Map(
        "map", {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['geolocationControl', 'zoomControl', 'rulerControl', 'typeSelector']
        }
    );

    var clustr = new ymaps.Clusterer({preset: 'islands#darkBlueClusterIcons'});
    
    cityCategoties.forEach(function (cat) {
        for (var i = 0; i < cat.cities.length; i++) {
            clustr.add(placemark(cat.cities[i], cat.name))
        }
    });

    map.geoObjects.add(clustr);
    map.setBounds(map.geoObjects.getBounds());
});