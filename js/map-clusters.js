var oldCities = [
    // Дальневосточный федеральный округ
    {coords: [43.115141, 131.885341], name: 'Владивосток'},
    {coords: [48.480223, 135.071917], name: 'Хабаровск'},
    {coords: [46.959179, 142.738041], name: 'Южно-Сахалинск'},
    {coords: [42.824037, 132.892811], name: 'Находка'},
    {coords: [53.037040, 158.655918], name: 'Петропавловск-Камчатский'},
    {coords: [48.794662, 132.921736], name: 'Биробиджан'},
    {coords: [53.734033, 127.265889], name: 'Зея'},
    
    // Сибирский федеральный округ
    {coords: [52.286387, 104.280660], name: 'Иркутск'},
    {coords: [51.833507, 107.584125], name: 'Улан-Удэ'},
    {coords: [56.151362, 101.634080], name: 'Братск'},
    {coords: [52.544889, 103.888456], name: 'Ангарск'},
    {coords: [52.756648, 103.638769], name: 'Усолье-Сибирское'},
    {coords: [57.943039, 102.741523], name: 'Усть-Илимск'},
    {coords: [55.030199, 82.920430], name: 'Новосибирск'},
    {coords: [56.010599, 92.852545], name: 'Красноярск'},
    {coords: [53.348053, 83.779875], name: 'Барнаул'},
    {coords: [56.484680, 84.948197], name: 'Томск'},
    {coords: [55.354968, 86.087314], name: 'Кемерово'},
    {coords: [53.721152, 91.442387], name: 'Абакан'},
    {coords: [51.501196, 81.207818], name: 'Рубцовск'},
    {coords: [53.100762, 91.412195], name: 'Саяногорск'},
    
    // Уральский федеральный округ
    {coords: [56.838607, 60.605514], name: 'Екатеринбург'},
    {coords: [55.160026, 61.402590], name: 'Челябинск'},
    {coords: [57.153033, 65.534328], name: 'Тюмень'},
    {coords: [53.407201, 58.979213], name: 'Магнитогорск'},
    {coords: [57.907605, 59.972211], name: 'Нижний Тагил'},
    {coords: [55.045671, 60.107677], name: 'Миасс'},
    {coords: [61.003180, 69.018902], name: 'Ханты-Мансийск'},
    {coords: [59.763761, 60.193493], name: 'Краснотурьинск'},
    {coords: [57.005274, 61.458114], name: 'Асбест'},
    {coords: [56.909642, 60.818128], name: 'Берёзовский'},
    {coords: [56.617744, 57.770692], name: 'Красноуфимск'},
    {coords: [56.800074, 59.908682], name: 'Ревда'},
    {coords: [59.571837, 60.791969], name: 'пос. Урай'},
    {coords: [61.314917, 63.331964], name: 'Югорск'},
    {coords: [59.935106, 60.079820], name: 'Волчанск'},
    
    // Северо-Западный федеральный округ
    {coords: [54.707390, 20.507307], name: 'Калининград'},
    {coords: [59.127447, 37.906956], name: 'Череповец'},
    
    // Приволжский
    {coords: [56.326887, 44.005986], name: 'Нижний Новгород'},
    {coords: [53.195538, 50.101783], name: 'Самара'},
    {coords: [55.798551, 49.106324], name: 'Казань'},
    {coords: [54.735147, 55.958727], name: 'Уфа'},
    {coords: [56.852775, 53.211463], name: 'Ижевск'},
    {coords: [54.312416, 48.395622], name: 'Ульяновск'},
    {coords: [55.743553, 52.395820], name: 'Набережные Челны'},
    {coords: [58.603581, 49.667978], name: 'Киров'},
    {coords: [56.146247, 47.250153], name: 'Чебоксары'},
    {coords: [56.634407, 47.899878], name: 'Йошкар-Ола'},
    {coords: [55.634070, 51.809112], name: 'Нижнекамск'},
    {coords: [54.901383, 52.297113], name: 'Альметьевск'},
    {coords: [55.846608, 48.501120], name: 'Зеленодольск'},
    {coords: [54.536413, 52.789489], name: 'Бугульма'},
    {coords: [55.756670, 52.054460], name: 'Елабуга'},
    {coords: [50.322058, 44.801319], name: 'Котово'},
    {coords: [54.599028, 52.442667], name: 'Лениногорск'},
    {coords: [55.298984, 52.006391], name: 'Заинск'},
    {coords: [56.222926, 51.074937], name: 'Вятские Поляны'},
    {coords: [54.859808, 53.074533], name: 'Азнакаево'},
    {coords: [54.406333, 53.245896], name: 'Бавлы'},
    {coords: [55.719972, 53.101429], name: 'Мензелинск'},
    {coords: [55.723293, 54.049816], name: 'село Актаныш'},
    {coords: [55.258997, 52.592650], name: 'село Сарманово'},
    {coords: [55.428695, 51.413710], name: 'пос. Камские Поляны'},
    {coords: [55.304534, 53.189994], name: 'село Муслюмово'},
    
    // Центральный федеральный округ
    {coords: [55.755814, 37.617635], name: 'Москва'},
    
    // Южный федеральный округ
    {coords: [47.222513, 39.718669], name: 'Ростов-на-Дону'},
    {coords: [48.707103, 44.516939], name: 'Волгоград'},
    {coords: [45.057626, 38.992615], name: 'Краснодар'},
    {coords: [43.585525, 39.723062], name: 'Сочи'},
    {coords: [48.786293, 44.751867], name: 'Волжский'},
    {coords: [47.209580, 38.935194], name: 'Таганрог'},
    {coords: [47.424600, 40.086349], name: 'Новочеркасск'},
    {coords: [47.516545, 42.198423], name: 'Волгодонск'},
    {coords: [47.757738, 39.936430], name: 'Новошахтинск'},
    {coords: [46.308309, 44.270181], name: 'Элиста'},
    {coords: [44.095640, 39.073553], name: 'Туапсе'},
    {coords: [44.894997, 37.316259], name: 'Анапа'},
    {coords: [44.934412, 37.985495], name: 'Крымск'},
    {coords: [44.563022, 38.079055], name: 'Геленджик'},
    {coords: [48.176977, 40.803340], name: 'Белая Калитва'},
    {coords: [45.213631, 39.691198], name: 'Усть-Лабинск'},
    {coords: [44.634425, 39.135563], name: 'Горячий Ключ'},
    {coords: [44.412303, 39.531981], name: 'Хадыженск'},
    {coords: [46.533682, 41.032329], name: 'пос. Целина'},
    
    // Северо-Кавказский
    {coords: [45.044502, 41.969065], name: 'Ставрополь'},
    {coords: [44.039290, 43.070840], name: 'Пятигорск'},
    {coords: [44.781528, 44.165024], name: 'Будённовск'},
    
    //
    // {coords: [], name: ''},
];

var map;

ymaps.ready(function () {
    var clustr = new ymaps.Clusterer({preset: 'islands#nightClusterIcons'});

    for (var i = 0; i < oldCities.length; i++) {
        var city = oldCities[i];
        clustr.add(new ymaps.Placemark(
            city.coords,
            {iconContent: city.name},
            {preset: 'islands#nightStretchyIcon'}
        ));
    }

    map = new ymaps.Map(
        "map", {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['geolocationControl', 'zoomControl', 'rulerControl', 'typeSelector']
        }
    );

    map.geoObjects.add(clustr);
    map.setBounds(map.geoObjects.getBounds());
});