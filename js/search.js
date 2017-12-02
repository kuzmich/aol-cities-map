// Провайдер данных для элемента управления ymaps.control.SearchControl.
// Осуществляет поиск геообъектов по массиву cities.
// Реализует интерфейс IGeocodeProvider.
function CitySearchProvider(cities) {
    this.cities = cities;
}

// Провайдер ищет по полю name стандартным методом String.ptototype.indexOf()
CitySearchProvider.prototype.geocode = function (request, options) {
    var deferred = new ymaps.vow.defer(),
        geoObjects = new ymaps.GeoObjectCollection(),
        // Сколько результатов нужно пропустить.
        offset = options.skip || 0,
        // Количество возвращаемых результатов.
        limit = options.results || 20;

    var cities = [];
    var i, l, city;

    // Ищем в любом месте свойства name города
    var q = request.trim().toLowerCase();
    for (i = 0, l = this.cities.length; i < l; i++) {
        city = this.cities[i];
        if (city.name.toLowerCase().indexOf(q) != -1) {
            cities.push(city);
        }
    }

    // При формировании ответа можно учитывать offset и limit
    cities = cities.splice(offset, limit);

    // Добавляем города в результирующую коллекцию
    for (i = 0, l = cities.length; i < l; i++) {
        city = cities[i];

        geoObjects.add(
            new ymaps.Placemark(
                city.coords,
                {name: city.name,
                 // description: '',
                 // boundedBy: [city.coords, city.coords]
                }
            )
        );
    }

    deferred.resolve({
        // Геообъекты поисковой выдачи.
        geoObjects: geoObjects,
        // Метаинформация ответа.
        metaData: {
            geocoder: {
                // Строка обработанного запроса.
                request: request,
                // Количество найденных результатов.
                found: geoObjects.getLength(),
                // Количество возвращенных результатов.
                results: limit,
                // Количество пропущенных результатов.
                skip: offset
            }
        }
    });

    // Возвращаем объект-обещание.
    return deferred.promise();
};
