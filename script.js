ymaps.ready(init);

        function init() {
            var coordinates = [
                [55.751244, 37.618423],  // пример координат точки 1
                [55.751831, 37.619282],  // пример координат точки 2
                // Добавьте координаты других точек
            ];

            var map = new ymaps.Map("map", {
                center: coordinates[0],  // центр карты
                zoom: 15  // масштаб карты
            });

            // Добавляем маркеры для каждой точки
            for (var i = 0; i < coordinates.length; i++) {
                var marker = new ymaps.Placemark(coordinates[i]);
                map.geoObjects.add(marker);
            }

            // Создаем ломаную линию
            var polyline = new ymaps.Polyline(coordinates, {}, {
                strokeColor: '#0000FF',  // цвет линии
                strokeWidth: 5  // ширина линии
            });

            map.geoObjects.add(polyline);

            // Создаем полигон
            var polygonGeometry = new ymaps.geometry.Polygon([coordinates], {});
            var polygon = new ymaps.Polygon([polygonGeometry.getCoordinates()], {
                fillColor: '#00FF00',  // цвет заливки
                strokeColor: '#0000FF',  // цвет линии
                strokeWidth: 5  // ширина линии
            });

            map.geoObjects.add(polygon);
        }
