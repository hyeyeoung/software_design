var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_shp_1 = new ol.format.GeoJSON();
var features_shp_1 = format_shp_1.readFeatures(json_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_1.addFeatures(features_shp_1);
var lyr_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shp_1, 
                style: style_shp_1,
                interactive: true,
    title: '끝 — 끝.shp<br />\
    <img src="styles/legend/shp_1_0.png" /> 9.8 - 19.6<br />\
    <img src="styles/legend/shp_1_1.png" /> 19.6 - 25.3<br />\
    <img src="styles/legend/shp_1_2.png" /> 25.3 - 30.8<br />\
    <img src="styles/legend/shp_1_3.png" /> 30.8 - 36.3<br />\
    <img src="styles/legend/shp_1_4.png" /> 36.3 - 41.6<br />\
    <img src="styles/legend/shp_1_5.png" /> 41.6 - 46.9<br />\
    <img src="styles/legend/shp_1_6.png" /> 46.9 - 52.3<br />\
    <img src="styles/legend/shp_1_7.png" /> 52.3 - 58.2<br />\
    <img src="styles/legend/shp_1_8.png" /> 58.2 - 65.9<br />\
    <img src="styles/legend/shp_1_9.png" /> 65.9 - 75.6<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_shp_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_shp_1];
lyr_shp_1.set('fieldAliases', {'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'area': 'area', 'cctv_weakS': 'cctv_weakS', 'crimeS': 'crimeS', 'ub_sb_S': 'ub_sb_S', 'replace_S': 'replace_S', 'peopleS': 'peopleS', 'childS': 'childS', 'publicS': 'publicS', 'buildS': 'buildS', '119callS': '119callS', 'die': 'die', 'dependentS': 'dependentS', 'moneyS': 'moneyS', 'foreignS': 'foreignS', 'totalScore': 'totalScore', });
lyr_shp_1.set('fieldImages', {'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'area': 'TextEdit', 'cctv_weakS': 'TextEdit', 'crimeS': 'TextEdit', 'ub_sb_S': 'TextEdit', 'replace_S': 'TextEdit', 'peopleS': 'TextEdit', 'childS': 'TextEdit', 'publicS': 'TextEdit', 'buildS': 'TextEdit', '119callS': 'TextEdit', 'die': 'TextEdit', 'dependentS': 'TextEdit', 'moneyS': 'TextEdit', 'foreignS': 'TextEdit', 'totalScore': 'TextEdit', });
lyr_shp_1.set('fieldLabels', {'left': 'no label', 'bottom': 'no label', 'right': 'no label', 'top': 'no label', 'area': 'no label', 'cctv_weakS': 'no label', 'crimeS': 'no label', 'ub_sb_S': 'no label', 'replace_S': 'no label', 'peopleS': 'no label', 'childS': 'no label', 'publicS': 'no label', 'buildS': 'no label', '119callS': 'no label', 'die': 'no label', 'dependentS': 'no label', 'moneyS': 'no label', 'foreignS': 'no label', 'totalScore': 'no label', });
lyr_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});