var wms_layers = [];

var format_country_0 = new ol.format.GeoJSON();
var features_country_0 = format_country_0.readFeatures(json_country_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_country_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_country_0.addFeatures(features_country_0);
var lyr_country_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_country_0, 
                style: style_country_0,
                popuplayertitle: 'country',
                interactive: true,
    title: 'country<br />\
    <img src="styles/legend/country_0_0.png" /> <br />' });
var format_NPPs_1 = new ol.format.GeoJSON();
var features_NPPs_1 = format_NPPs_1.readFeatures(json_NPPs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPPs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPPs_1.addFeatures(features_NPPs_1);
var lyr_NPPs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NPPs_1, 
                style: style_NPPs_1,
                popuplayertitle: 'NPPs',
                interactive: true,
                title: '<img src="styles/legend/NPPs_1.png" /> NPPs'
            });

lyr_country_0.setVisible(true);lyr_NPPs_1.setVisible(true);
var layersList = [lyr_country_0,lyr_NPPs_1];
lyr_country_0.set('fieldAliases', {'NATION': 'NATION', 'CNTRYNAME': 'CNTRYNAME', 'CNTRYABBR': 'CNTRYABBR', });
lyr_NPPs_1.set('fieldAliases', {'NPP': 'NPP', 'Site name': 'Site name', 'X': 'X', 'Y': 'Y', 'Paper': 'Paper', });
lyr_country_0.set('fieldImages', {'NATION': 'Range', 'CNTRYNAME': 'TextEdit', 'CNTRYABBR': 'TextEdit', });
lyr_NPPs_1.set('fieldImages', {'NPP': '', 'Site name': '', 'X': '', 'Y': '', 'Paper': '', });
lyr_country_0.set('fieldLabels', {'NATION': 'no label', 'CNTRYNAME': 'no label', 'CNTRYABBR': 'no label', });
lyr_NPPs_1.set('fieldLabels', {'NPP': 'no label', 'Site name': 'no label', 'X': 'no label', 'Y': 'no label', 'Paper': 'no label', });
lyr_NPPs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});