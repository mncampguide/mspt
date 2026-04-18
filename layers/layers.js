var wms_layers = [];


        var lyr_Terrain_0 = new ol.layer.Tile({
            'title': 'Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliite_1 = new ol.layer.Tile({
            'title': 'Google Satelliite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_S23__2 = new ol.format.GeoJSON();
var features_S23__2 = format_S23__2.readFeatures(json_S23__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S23__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S23__2.addFeatures(features_S23__2);
var lyr_S23__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S23__2, 
                style: style_S23__2,
                popuplayertitle: 'S23_',
                interactive: true,
                title: '<img src="styles/legend/S23__2.png" /> S23_'
            });
var format_railroadwalk_3 = new ol.format.GeoJSON();
var features_railroadwalk_3 = format_railroadwalk_3.readFeatures(json_railroadwalk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railroadwalk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railroadwalk_3.addFeatures(features_railroadwalk_3);
var lyr_railroadwalk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railroadwalk_3, 
                style: style_railroadwalk_3,
                popuplayertitle: 'railroadwalk',
                interactive: true,
                title: '<img src="styles/legend/railroadwalk_3.png" /> railroadwalk'
            });
var format_lilydale_claypit_fence_4 = new ol.format.GeoJSON();
var features_lilydale_claypit_fence_4 = format_lilydale_claypit_fence_4.readFeatures(json_lilydale_claypit_fence_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lilydale_claypit_fence_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lilydale_claypit_fence_4.addFeatures(features_lilydale_claypit_fence_4);
var lyr_lilydale_claypit_fence_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lilydale_claypit_fence_4, 
                style: style_lilydale_claypit_fence_4,
                popuplayertitle: 'lilydale_claypit_fence',
                interactive: true,
                title: '<img src="styles/legend/lilydale_claypit_fence_4.png" /> lilydale_claypit_fence'
            });
var format_Trail_Obstacles_5 = new ol.format.GeoJSON();
var features_Trail_Obstacles_5 = format_Trail_Obstacles_5.readFeatures(json_Trail_Obstacles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trail_Obstacles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trail_Obstacles_5.addFeatures(features_Trail_Obstacles_5);
var lyr_Trail_Obstacles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trail_Obstacles_5, 
                style: style_Trail_Obstacles_5,
                popuplayertitle: 'Trail_Obstacles',
                interactive: true,
                title: '<img src="styles/legend/Trail_Obstacles_5.png" /> Trail_Obstacles'
            });
var format_Pickerel_Lake_Approach_6 = new ol.format.GeoJSON();
var features_Pickerel_Lake_Approach_6 = format_Pickerel_Lake_Approach_6.readFeatures(json_Pickerel_Lake_Approach_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pickerel_Lake_Approach_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pickerel_Lake_Approach_6.addFeatures(features_Pickerel_Lake_Approach_6);
var lyr_Pickerel_Lake_Approach_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pickerel_Lake_Approach_6, 
                style: style_Pickerel_Lake_Approach_6,
                popuplayertitle: 'Pickerel_Lake_Approach',
                interactive: true,
                title: '<img src="styles/legend/Pickerel_Lake_Approach_6.png" /> Pickerel_Lake_Approach'
            });
var format_S27x_7 = new ol.format.GeoJSON();
var features_S27x_7 = format_S27x_7.readFeatures(json_S27x_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S27x_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S27x_7.addFeatures(features_S27x_7);
var lyr_S27x_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S27x_7, 
                style: style_S27x_7,
                popuplayertitle: 'S27x',
                interactive: true,
                title: '<img src="styles/legend/S27x_7.png" /> S27x'
            });
var format_trail_segmentscopy_8 = new ol.format.GeoJSON();
var features_trail_segmentscopy_8 = format_trail_segmentscopy_8.readFeatures(json_trail_segmentscopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trail_segmentscopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trail_segmentscopy_8.addFeatures(features_trail_segmentscopy_8);
var lyr_trail_segmentscopy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trail_segmentscopy_8, 
                style: style_trail_segmentscopy_8,
                popuplayertitle: 'trail_segments copy',
                interactive: true,
    title: 'trail_segments copy<br />\
    <img src="styles/legend/trail_segmentscopy_8_0.png" /> Paved.<br />\
    <img src="styles/legend/trail_segmentscopy_8_1.png" /> Unpaved.<br />' });
var group_NortheastTrailSegments = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Northeast Trail Segments'});
var group_SouthwestTrailSegments = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Southwest Trail Segments'});
var group_UndevelopedObstacles = new ol.layer.Group({
                                layers: [lyr_S23__2,lyr_railroadwalk_3,lyr_lilydale_claypit_fence_4,lyr_Trail_Obstacles_5,lyr_Pickerel_Lake_Approach_6,lyr_S27x_7,],
                                fold: 'close',
                                title: 'Undeveloped & Obstacles'});
var group_HistoricalInterpretation = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Historical Interpretation'});
var group_NatureInterpretation = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nature Interpretation'});
var group_TrailObservations = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Trail Observations'});

lyr_Terrain_0.setVisible(true);lyr_GoogleSatelliite_1.setVisible(true);lyr_S23__2.setVisible(true);lyr_railroadwalk_3.setVisible(true);lyr_lilydale_claypit_fence_4.setVisible(true);lyr_Trail_Obstacles_5.setVisible(true);lyr_Pickerel_Lake_Approach_6.setVisible(true);lyr_S27x_7.setVisible(true);lyr_trail_segmentscopy_8.setVisible(true);
var layersList = [lyr_Terrain_0,lyr_GoogleSatelliite_1,group_UndevelopedObstacles,lyr_trail_segmentscopy_8];
lyr_S23__2.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Notes': 'Notes', });
lyr_railroadwalk_3.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', 'Notes': 'Notes', });
lyr_lilydale_claypit_fence_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Feature': 'Feature', 'Notes': 'Notes', });
lyr_Trail_Obstacles_5.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', 'Alternative': 'Alternative', });
lyr_Pickerel_Lake_Approach_6.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', });
lyr_S27x_7.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', });
lyr_trail_segmentscopy_8.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Riverside': 'Riverside', 'Surface': 'Surface', 'Description': 'Description', 'Status': 'Status', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Slope': 'Slope', 'Vegetation': 'Vegetation', 'Difficulty': 'Difficulty', 'layer': 'layer', 'path': 'path', });
lyr_S23__2.set('fieldImages', {'fid': '', 'Feature': '', 'Notes': '', });
lyr_railroadwalk_3.set('fieldImages', {'fid': 'TextEdit', 'Feature': 'TextEdit', 'Description': 'TextEdit', 'Notes': 'TextEdit', });
lyr_lilydale_claypit_fence_4.set('fieldImages', {'fid': '', 'id': '', 'Feature': '', 'Notes': '', });
lyr_Trail_Obstacles_5.set('fieldImages', {'fid': '', 'Feature': '', 'Description': '', 'Alternative': '', });
lyr_Pickerel_Lake_Approach_6.set('fieldImages', {'fid': 'TextEdit', 'Feature': 'TextEdit', 'Description': 'TextEdit', });
lyr_S27x_7.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', });
lyr_trail_segmentscopy_8.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Riverside': 'TextEdit', 'Surface': 'TextEdit', 'Description': 'TextEdit', 'Status': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Slope': 'TextEdit', 'Vegetation': 'TextEdit', 'Difficulty': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_S23__2.set('fieldLabels', {'fid': 'no label', 'Feature': 'inline label - visible with data', 'Notes': 'inline label - visible with data', });
lyr_railroadwalk_3.set('fieldLabels', {'fid': 'no label', 'Feature': 'inline label - visible with data', 'Description': 'inline label - visible with data', 'Notes': 'inline label - visible with data', });
lyr_lilydale_claypit_fence_4.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - visible with data', 'Feature': 'inline label - visible with data', 'Notes': 'inline label - visible with data', });
lyr_Trail_Obstacles_5.set('fieldLabels', {'fid': 'no label', 'Feature': 'inline label - visible with data', 'Description': 'inline label - visible with data', 'Alternative': 'inline label - visible with data', });
lyr_Pickerel_Lake_Approach_6.set('fieldLabels', {'fid': 'no label', 'Feature': 'inline label - visible with data', 'Description': 'inline label - visible with data', });
lyr_S27x_7.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', });
lyr_trail_segmentscopy_8.set('fieldLabels', {'fid': 'hidden field', 'SID': 'hidden field', 'Segment': 'header label - visible with data', 'Riverside': 'header label - visible with data', 'Surface': 'header label - visible with data', 'Description': 'header label - visible with data', 'Status': 'header label - visible with data', 'Ownership': 'header label - visible with data', 'Distance': 'header label - visible with data', 'Quality': 'header label - visible with data', 'Slope': 'header label - visible with data', 'Vegetation': 'header label - visible with data', 'Difficulty': 'header label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_trail_segmentscopy_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});