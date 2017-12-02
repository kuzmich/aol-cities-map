// действующие
var activeCities = [
    // {name: 'Элиста', coords: [46.308309, 44.270181]}, // Южный ФО
    {name: 'Абакан', coords: [53.721152, 91.442387]}, // Сибирский ФО
    {name: 'Адлер', coords: [43.443579, 39.910369]}, // Южный ФО
    {name: 'Азнакаево', coords: [54.859808, 53.074533]}, // Приволжский ФО
    {name: 'Альметьевск', coords: [54.901383, 52.297113]}, // Приволжский ФО
    {name: 'Анапа', coords: [44.894997, 37.316259]}, // Южный ФО
    {name: 'Ангарск', coords: [52.544889, 103.888456]}, // Сибирский ФО
    {name: 'Ачинск', coords: [56.269496, 90.495231]}, // Сибирский ФО
    {name: 'Бавлы', coords: [54.406333, 53.245896]}, // Приволжский ФО
    {name: 'Балашиха', coords: [55.796339, 37.938199]},
    {name: 'Барнаул', coords: [53.348053, 83.779875]}, // Сибирский ФО
    {name: 'Белая Калитва', coords: [48.176977, 40.803340]}, // Южный ФО
    {name: 'Белгород', coords: [50.595660, 36.587223]}, // Центральный ФО
    {name: 'Берёзовский', coords: [56.909642, 60.818128]}, // Уральский  ФО
    {name: 'Биробиджан', coords: [48.794662, 132.921736]}, // Дальневосточный ФО
    {name: 'Благовещенск', coords: [50.290658, 127.527173]},
    {name: 'Богородицк', coords: [53.770093, 38.122551]}, // Центральный ФО
    {name: 'Братск', coords: [56.151362, 101.634080]}, // Сибирский ФО
    {name: 'Брянск', coords: [53.243325, 34.363731]}, // Центральный ФО
    {name: 'Будённовск', coords: [44.781528, 44.165024]}, // Северо-Кавказский ФО
    {name: 'Владивосток', coords: [43.115141, 131.885341]}, // Дальневосточный ФО
    {name: 'Владимир', coords: [56.129042, 40.407030]}, // Центральный ФО
    {name: 'Волгоград', coords: [48.707103, 44.516939]}, // Южный ФО
    {name: 'Волгодонск', coords: [47.516545, 42.198423]}, // Южный ФО
    {name: 'Волжский', coords: [48.786293, 44.751867]}, // Южный ФО
    {name: 'Воронеж', coords: [51.661535, 39.200287]}, // Центральный ФО
    {name: 'Вятские Поляны', coords: [56.222926, 51.074937]}, // Приволжский ФО
    {name: 'Геленджик', coords: [44.563022, 38.079055]}, // Южный ФО
    {name: 'Горячий Ключ', coords: [44.634425, 39.135563]}, // Южный ФО
    {name: 'Гусев', coords: [54.591841, 22.201117]}, // Северо-Западный ФО
    {name: 'Екатеринбург', coords: [56.838607, 60.605514]}, // Уральский  ФО
    {name: 'Елабуга', coords: [55.756670, 52.054460]}, // Приволжский ФО
    {name: 'Железногорск', coords: [52.337971, 35.351743]}, // Центральный ФО
    {name: 'Железногорск', coords: [56.252922, 93.532264]}, // Сибирский ФО
    {name: 'Заинск', coords: [55.298984, 52.006391]}, // Приволжский ФО
    {name: 'Зеленодольск', coords: [55.846608, 48.501120]}, // Приволжский ФО
    {name: 'Зея', coords: [53.734033, 127.265889]}, // Дальневосточный ФО
    {name: 'Иваново', coords: [57.000348, 40.973921]}, // Центральный ФО
    {name: 'Ижевск', coords: [56.852775, 53.211463]}, // Приволжский ФО
    {name: 'Ирбит', coords: [57.683819, 63.057664]},
    {name: 'Иркутск', coords: [52.286387, 104.280660]}, // Сибирский ФО
    {name: 'Йошкар-Ола', coords: [56.634407, 47.899878]}, // Приволжский ФО
    {name: 'Казань', coords: [55.798551, 49.106324]}, // Приволжский ФО
    {name: 'Калининград', coords: [54.707390, 20.507307]}, // Северо-Западный ФО
    {name: 'Кемерово', coords: [55.354968, 86.087314]}, // Сибирский ФО
    {name: 'Киров', coords: [58.603581, 49.667978]}, // Приволжский ФО
    {name: 'Комсомольск-на-Амуре', coords: [50.549923, 137.007948]}, // Дальневосточный ФО
    {name: 'Конаково', coords: [56.713217, 36.779309]}, // Центральный ФО
    {name: 'Корсаков', coords: [46.633754, 142.780297]},
    {name: 'Котово', coords: [50.322058, 44.801319]}, // Приволжский ФО
    {name: 'Краснодар', coords: [45.057626, 38.992615]}, // Южный ФО
    {name: 'Краснотурьинск', coords: [59.763761, 60.193493]}, // Уральский  ФО
    {name: 'Красноуфимск', coords: [56.617744, 57.770692]}, // Уральский  ФО
    {name: 'Красноярск', coords: [56.010599, 92.852545]}, // Сибирский ФО
    {name: 'Крымск', coords: [44.934412, 37.985495]}, // Южный ФО
    {name: 'Лениногорск', coords: [54.599028, 52.442667]}, // Приволжский ФО
    {name: 'Ленинск', coords: [48.693682, 45.199228]},
    {name: 'Магнитогорск', coords: [53.407201, 58.979213]}, // Уральский  ФО
    {name: 'Мензелинск', coords: [55.719972, 53.101429]}, // Приволжский ФО
    {name: 'Михайловск', coords: [56.436990, 59.113808]},
    {name: 'Москва', coords: [55.755814, 37.617635]}, // Центральный ФО
    {name: 'Муром', coords: [55.579169, 42.052411]}, // Центральный ФО
    {name: 'Мценск', coords: [53.278939, 36.575006]}, // Центральный ФО
    {name: 'Мытищи', coords: [55.910503, 37.736330]},
    {name: 'Набережные Челны', coords: [55.743553, 52.395820]}, // Приволжский ФО
    {name: 'Находка', coords: [42.824037, 132.892811]}, // Дальневосточный ФО
    {name: 'Нижнекамск', coords: [55.634070, 51.809112]}, // Приволжский ФО
    {name: 'Нижний Новгород', coords: [56.326887, 44.005986]}, // Приволжский ФО
    {name: 'Нижний Тагил', coords: [57.907605, 59.972211]}, // Уральский  ФО
    {name: 'Новосибирск', coords: [55.030199, 82.920430]}, // Сибирский ФО
    {name: 'Новочеркасск', coords: [47.424600, 40.086349]}, // Южный ФО
    {name: 'Новошахтинск', coords: [47.757738, 39.936430]}, // Южный ФО
    {name: 'Омск', coords: [54.989342, 73.368212]}, // Сибирский ФО
    {name: 'Орёл', coords: [52.970143, 36.063397]}, // Центральный ФО
    {name: 'Петропавловск-Камчатский', coords: [53.037040, 158.655918]}, // Дальневосточный ФО
    {name: 'Пятигорск', coords: [44.039290, 43.070840]}, // Северо-Кавказский ФО
    {name: 'Ревда', coords: [56.800074, 59.908682]}, // Уральский  ФО
    {name: 'Ростов-на-Дону', coords: [47.222513, 39.718669]}, // Южный ФО
    {name: 'Рубцовск', coords: [51.501196, 81.207818]}, // Сибирский ФО
    {name: 'Самара', coords: [53.195538, 50.101783]}, // Приволжский ФО
    {name: 'Санкт-Петербург', coords: [59.939095, 30.315868]}, // Северо-Западный ФО
    {name: 'Саратов', coords: [51.533103, 46.034158]}, // Приволжский ФО
    {name: 'Саяногорск', coords: [53.100762, 91.412195]}, // Сибирский ФО
    {name: 'Смоленск', coords: [54.782640, 32.045134]}, // Центральный ФО
    {name: 'Советск', coords: [55.081029, 21.888647]}, // Северо-Западный ФО
    {name: 'Сочи', coords: [43.585525, 39.723062]}, // Южный ФО
    {name: 'Ставрополь', coords: [45.044502, 41.969065]}, // Северо-Кавказский ФО
    {name: 'Таганрог', coords: [47.209580, 38.935194]}, // Южный ФО
    {name: 'Тамбов', coords: [52.721246, 41.452238]}, // Центральный ФО
    {name: 'Тверь', coords: [56.859611, 35.911896]}, // Центральный ФО
    {name: 'Томск', coords: [56.484680, 84.948197]}, // Сибирский ФО
    {name: 'Туапсе', coords: [44.095640, 39.073553]}, // Южный ФО
    {name: 'Тула', coords: [54.193033, 37.617752]}, // Центральный ФО
    {name: 'Тюмень', coords: [57.153033, 65.534328]}, // Уральский  ФО
    {name: 'Улан-Удэ', coords: [51.833507, 107.584125]}, // Сибирский ФО
    {name: 'Ульяновск', coords: [54.312416, 48.395622]}, // Приволжский ФО
    {name: 'Усолье-Сибирское', coords: [52.756648, 103.638769]}, // Сибирский ФО
    {name: 'Усть-Илимск', coords: [57.943039, 102.741523]}, // Сибирский ФО
    {name: 'Усть-Лабинск', coords: [45.213631, 39.691198]}, // Южный ФО
    {name: 'Уфа', coords: [54.735147, 55.958727]}, // Приволжский ФО
    {name: 'Хабаровск', coords: [48.480223, 135.071917]}, // Дальневосточный ФО
    {name: 'Хадыженск', coords: [44.412303, 39.531981]}, // Южный ФО
    {name: 'Ханты-Мансийск', coords: [61.003180, 69.018902]}, // Уральский  ФО
    {name: 'Химки', coords: [55.888796, 37.430328]},
    {name: 'Чебоксары', coords: [56.146247, 47.250153]}, // Приволжский ФО
    {name: 'Челябинск', coords: [55.160026, 61.402590]}, // Уральский  ФО
    {name: 'Черняховск', coords: [54.630706, 21.819503]}, // Северо-Западный ФО
    {name: 'Шелехов', coords: [52.210209, 104.097395]}, // Сибирский ФО
    {name: 'Щёкино', coords: [54.002146, 37.517626]}, // Центральный ФО
    {name: 'Югорск', coords: [61.314917, 63.331964]}, // Уральский  ФО
    {name: 'Южно-Сахалинск', coords: [46.959179, 142.738041]}, // Дальневосточный ФО
    {name: 'пгт Ванино', coords: [49.089753, 140.255376]},
    {name: 'пос. Камские Поляны', coords: [55.428695, 51.413710]}, // Приволжский ФО
    {name: 'пос. Урай', coords: [59.571837, 60.791969]}, // Уральский  ФО
    {name: 'пос. Целина', coords: [46.533682, 41.032329]}, // Южный ФО
    {name: 'пос. Южный', coords: [44.065632, 39.128368]},
    {name: 'село Актаныш', coords: [55.723293, 54.049816]}, // Приволжский ФО
    {name: 'село Муслюмово', coords: [55.304534, 53.189994]}, // Приволжский ФО
    {name: 'село Сарманово', coords: [55.258997, 52.592650]}, // Приволжский ФО

    // {name: '', coords: []},
];

// открытые города
var openCities = [
    {name: 'Архангельск', coords: [64.539393, 40.516939]},
    {name: 'Астрахань', coords: [46.347869, 48.033574]},
    {name: 'Гатчина', coords: [59.565155, 30.128165]}, // Северо-Западный ФО
    {name: 'Мамадыш', coords: [55.715053, 51.412883]}, // Приволжский ФО
    {name: 'Мурманск', coords: [68.969582, 33.074558]},
    {name: 'Новочеркасск', coords: [47.424600, 40.086349]}, // Приволжский ФО
    {name: 'Петергоф', coords: [59.880396, 29.906560]}, // Северо-Западный ФО
    {name: 'Пушкин', coords: [59.727104, 30.408422]}, // Северо-Западный ФО
    {name: 'Сальск', coords: [46.475177, 41.541135]},
    {name: 'Тихвин', coords: [59.644209, 33.542096]}, // Северо-Западный ФО
    {name: 'Туймазы', coords: [54.599988, 53.695008]}, // Приволжский ФО
    {name: 'Цивильск', coords: [55.865010, 47.472980]}, // Приволжский ФО
    {name: 'Шахты', coords: [47.708485, 40.215958]},
    {name: 'пгт Вурнары', coords: [55.490345, 46.958156]}, // Приволжский ФО
    {name: 'пгт Ибреси', coords: [55.301495, 47.036058]}, // Приволжский ФО

    // {name: '', coords: []},
];

// новые города
var newCities = [
    // {name: 'Череповец', coords: [59.127447, 37.906956]}, // Северо-Западный ФО
    {name: 'Азов', coords: [47.112129, 39.423267]},
    {name: 'Алатырь', coords: [54.839816, 46.572195]}, // Приволжский ФО
    {name: 'Александров', coords: [56.397774, 38.727621]},
    {name: 'Амурск', coords: [50.234524, 136.879148]},
    {name: 'Ардатов', coords: [54.84656, 46.241183]}, // Приволжский ФО
    {name: 'Арсеньев', coords: [44.162084, 133.269726]}, // Дальневосточный ФО
    {name: 'Артём', coords: [43.350116, 132.159633]},
    {name: 'Байкальск', coords: [51.523073, 104.148725]}, // Сибирский ФО
    {name: 'Верхняя Пышма', coords: [56.975804, 60.564955]},
    {name: 'Выкса', coords: [55.320683, 42.167961]}, // Приволжский ФО
    {name: 'Вятские Поляны', coords: [56.222926, 51.074937]}, // Приволжский ФО
    {name: 'Дальнереченск', coords: [45.930850, 133.731738]}, // Дальневосточный ФО
    {name: 'Дегтярск', coords: [56.698463, 60.086674]},
    {name: 'Добрянка', coords: [58.468063, 56.403986]}, // Приволжский ФО
    {name: 'Заречный', coords: [56.814887, 61.320636]},
    {name: 'Канаш', coords: [55.506943, 47.491764]}, // Приволжский ФО
    {name: 'Козьмодемьянск', coords: [56.344167, 46.568107]},
    {name: 'Кумертау', coords: [52.756523, 55.796976]}, // Приволжский ФО
    {name: 'Майкоп', coords: [44.609764, 40.100516]},
    {name: 'Минусинск', coords: [53.710564, 91.687268]}, // Сибирский ФО
    {name: 'Навашино', coords: [55.543888, 42.18874]},
    {name: 'Неман', coords: [55.031649, 22.032386]}, // Северо-Западный ФО
    {name: 'Новороссийск', coords: [44.723566, 37.768678]}, // Южный ФО
    {name: 'Новочебоксарск', coords: [56.109551, 47.479125]}, // Приволжский ФО
    {name: 'Новый Уренгой', coords: [66.083963, 76.680974]},
    {name: 'Оренбург', coords: [51.768199, 55.096955]}, // Приволжский ФО
    {name: 'Орск', coords: [51.229362, 58.475196]}, // Приволжский ФО
    {name: 'Пенза', coords: [53.195063, 45.018316]}, // Приволжский ФО
    {name: 'Руза', coords: [55.701516, 36.195997]}, // Центральный ФО
    {name: 'Светлогорск', coords: [54.944006, 20.151512]}, // Северо-Западный ФО
    {name: 'Советский', coords: [61.370744, 63.566784]},
    {name: 'Среднеуральск', coords: [56.991837, 60.477136]},
    {name: 'Стерлитамак', coords: [53.630403, 55.930825]}, // Приволжский ФО
    {name: 'Урай', coords: [60.129632, 64.803944]}, // Уральский ФО
    {name: 'Уссурийск', coords: [43.797273, 131.951780]},
    {name: 'Чайковский', coords: [56.778061, 54.147759]},
    {name: 'Черемхово', coords: [53.136911, 103.090096]}, // Сибирский ФО
    {name: 'Чита', coords: [52.033973, 113.499432]}, // Сибирский ФО
    {name: 'Шимановск', coords: [51.999509, 127.676123]}, // Дальневосточный ФО
    {name: 'Ядрин', coords: [55.940689, 46.202107]}, // Приволжский ФО
    {name: 'пгт Большой Луг', coords: [52.065576, 104.081863]},
    {name: 'пгт Кугеси', coords: [56.03265, 47.297638]},
    {name: 'пгт Нижний Уфалей', coords: [55.914645, 59.985821]}, // Уральский ФО
    {name: 'пгт Преображение', coords: [42.899915, 133.906532]}, // Дальневосточный ФО
    {name: 'пгт Смирных', coords: [49.745986, 142.835265]},
    {name: 'пгт Талакан', coords: [50.263923, 130.266828]}, // Дальневосточный ФО
    {name: 'пгт Уруссу', coords: [54.602893, 53.460809]},
    {name: 'пгт Чегдомын', coords: [51.137086, 133.033675]},
    {name: 'пгт Черноморское', coords: [45.509374, 32.703536]},
    {name: 'пос. Аршан', coords: [51.907721, 102.434694]}, // Сибирский ФО
    {name: 'пос. Врангель', coords: [42.726822, 133.081268]},
    {name: 'р.п. Нахабино', coords: [55.847149, 37.180138]}, // Центральный ФО
    {name: 'село Батырево', coords: [55.067489, 47.60444]}, // Приволжский ФО
    {name: 'село Павловская Слобода', coords: [55.813465, 37.079724]}, // Центральный ФО
    {name: 'село Подгорное', coords: [57.79017, 82.649579]}, // Томская область
    {name: 'село Усть-Большерецк', coords: [52.824383, 156.282461]},
    {name: 'село Шелаболиха', coords: [53.413089, 82.614508]},
    {name: 'станица Кабардинская', coords: [44.489274, 39.496704]}, // Южный ФО

    // надо Старый Заинск. Заинск уже есть в действ.
    // {name: 'Заинск', coords: [55.298984, 52.006391]}, // Приволжский ФО

    // {name: '', coords: []},
];

// больше не действуют
var inactiveCities = [
    {name: 'Асбест', coords: [57.005274, 61.458114]}, // Уральский  ФО
    {name: 'Волчанск', coords: [59.935106, 60.079820]}, // Уральский  ФО
    {name: 'Миасс', coords: [55.045671, 60.107677]}, // Уральский  ФО
    {name: 'Бугульма', coords: [54.536413, 52.789489]}, // Приволжский ФО

    // {name: '', coords: []},
];

console.log('Всего городов: ', activeCities.length + openCities.length + newCities.length);


var cityCategories = [
    {name: 'active', cities: activeCities},
    {name: 'open', cities: openCities},
    {name: 'new', cities: newCities}
];


function placemark(city, group) {
    var preset;

    switch (group) {
        case 'active':
            // preset = 'islands#nightStretchyIcon';
            preset = 'islands#darkBlueStretchyIcon';
            break;
        case 'open':
            // preset = 'islands#darkBlueStretchyIcon';
            preset = 'islands#darkGreenStretchyIcon';
            break;
        case 'new':
            // preset = 'islands#lightBlueStretchyIcon';
            preset = 'islands#darkOrangeStretchyIcon';
            break;
    }

    return new ymaps.Placemark(
        city.coords,
        {iconContent: city.name},
        {preset: preset}
    );
}
