ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3765").setExtent([175446.955727, 4630431.442238, 956375.485041, 5219642.656663]);
var wms_layers = [];

var format_hr_shape_0 = new ol.format.GeoJSON();
var features_hr_shape_0 = format_hr_shape_0.readFeatures(json_hr_shape_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_hr_shape_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hr_shape_0.addFeatures(features_hr_shape_0);
var lyr_hr_shape_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hr_shape_0, 
                style: style_hr_shape_0,
                popuplayertitle: 'hr_shape',
                interactive: true,
                title: '<img src="styles/legend/hr_shape_0.png" /> hr_shape'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> '
            });

lyr_hr_shape_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_hr_shape_0,lyr__1];
lyr_hr_shape_0.set('fieldAliases', {'NATION': 'NATION', 'CNTRYNAME': 'CNTRYNAME', 'CNTRYABBR': 'CNTRYABBR', });
lyr__1.set('fieldAliases', {'fid': 'fid', 'Group': 'Group', 'Subgroup': 'Subgroup', 'NPP': 'NPP', 'Site name': 'Site name', 'X (HTRS96)': 'X (HTRS96)', 'Y (HTRS96)': 'Y (HTRS96)', 'Paper': 'Paper', 'Article link': 'Article link', 'Search': 'Search', 'Ammended name': 'Ammended name', 'Link': 'Link', });
lyr_hr_shape_0.set('fieldImages', {'NATION': 'Range', 'CNTRYNAME': 'TextEdit', 'CNTRYABBR': 'TextEdit', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'Group': 'TextEdit', 'Subgroup': 'TextEdit', 'NPP': 'TextEdit', 'Site name': 'TextEdit', 'X (HTRS96)': 'Range', 'Y (HTRS96)': 'Range', 'Paper': 'TextEdit', 'Article link': 'TextEdit', 'Search': 'TextEdit', 'Ammended name': 'TextEdit', 'Link': '', });
lyr_hr_shape_0.set('fieldLabels', {'NATION': 'no label', 'CNTRYNAME': 'no label', 'CNTRYABBR': 'no label', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'Group': 'inline label - always visible', 'Subgroup': 'inline label - visible with data', 'NPP': 'inline label - always visible', 'Site name': 'inline label - always visible', 'X (HTRS96)': 'hidden field', 'Y (HTRS96)': 'hidden field', 'Paper': 'inline label - always visible', 'Article link': 'hidden field', 'Search': 'hidden field', 'Ammended name': 'inline label - visible with data', 'Link': 'inline label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});