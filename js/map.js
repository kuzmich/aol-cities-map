var map;

ymaps.ready(function () {
    map = new ymaps.Map(
        "map", {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['geolocationControl', 'zoomControl', 'rulerControl', 'typeSelector']
        }
    );

    // отключаем кластеризацию, если в URL есть ?no-clusters
    if (/[?&]no-clusters/.test(location.search)) {
        var cities = new ymaps.GeoObjectCollection();
    } else {
        var cities = new ymaps.Clusterer({preset: 'islands#darkBlueClusterIcons'});
    }

    cityCategories.forEach(function (cat) {
        for (var i = 0; i < cat.cities.length; i++) {
            cities.add(placemark(cat.cities[i], cat.name))
        }
    });

    map.geoObjects.add(cities);
    map.setBounds(map.geoObjects.getBounds());

    // Создаем экземпляр класса ymaps.control.SearchControl
    var citySearchControl = new ymaps.control.SearchControl({
        options: {
            // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
            provider: new CitySearchProvider(
                activeCities.concat(openCities, newCities).sort(function (c1, c2) {
                    c1.name.localeCompare(c2.name)
                })
            ),
            // Не будем показывать еще одну метку при выборе результата поиска,
            // т.к. метки коллекции myCollection уже добавлены на карту.
            noPlacemark: true,
            // Не будем показывать город сразу, если резальтат поиска только один
            noSelect: true,
            resultsPerPage: 5
        }});

    // Добавляем контрол в верхний правый угол,
    map.controls.add(citySearchControl, { float: 'right' });
});
