var wms_layers = [];


        var lyr_Terrain_0 = new ol.layer.Tile({
            'title': 'Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliite_1 = new ol.layer.Tile({
            'title': 'Google Satelliite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Scouting_2 = new ol.format.GeoJSON();
var features_Scouting_2 = format_Scouting_2.readFeatures(json_Scouting_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scouting_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scouting_2.addFeatures(features_Scouting_2);
var lyr_Scouting_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scouting_2, 
                style: style_Scouting_2,
                popuplayertitle: 'Scouting',
                interactive: true,
                title: '<img src="styles/legend/Scouting_2.png" /> Scouting'
            });
var format_Nature_Interp_3 = new ol.format.GeoJSON();
var features_Nature_Interp_3 = format_Nature_Interp_3.readFeatures(json_Nature_Interp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nature_Interp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nature_Interp_3.addFeatures(features_Nature_Interp_3);
var lyr_Nature_Interp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nature_Interp_3, 
                style: style_Nature_Interp_3,
                popuplayertitle: 'Nature_Interp',
                interactive: true,
                title: '<img src="styles/legend/Nature_Interp_3.png" /> Nature_Interp'
            });
var format_Historical_Interp_4 = new ol.format.GeoJSON();
var features_Historical_Interp_4 = format_Historical_Interp_4.readFeatures(json_Historical_Interp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historical_Interp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historical_Interp_4.addFeatures(features_Historical_Interp_4);
var lyr_Historical_Interp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historical_Interp_4, 
                style: style_Historical_Interp_4,
                popuplayertitle: 'Historical_Interp',
                interactive: true,
                title: '<img src="styles/legend/Historical_Interp_4.png" /> Historical_Interp'
            });
var format_S23__5 = new ol.format.GeoJSON();
var features_S23__5 = format_S23__5.readFeatures(json_S23__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S23__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S23__5.addFeatures(features_S23__5);
var lyr_S23__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S23__5, 
                style: style_S23__5,
                popuplayertitle: 'S23_',
                interactive: true,
                title: '<img src="styles/legend/S23__5.png" /> S23_'
            });
var format_railroadwalk_6 = new ol.format.GeoJSON();
var features_railroadwalk_6 = format_railroadwalk_6.readFeatures(json_railroadwalk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railroadwalk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railroadwalk_6.addFeatures(features_railroadwalk_6);
var lyr_railroadwalk_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railroadwalk_6, 
                style: style_railroadwalk_6,
                popuplayertitle: 'railroadwalk',
                interactive: true,
                title: '<img src="styles/legend/railroadwalk_6.png" /> railroadwalk'
            });
var format_lilydale_claypit_fence_7 = new ol.format.GeoJSON();
var features_lilydale_claypit_fence_7 = format_lilydale_claypit_fence_7.readFeatures(json_lilydale_claypit_fence_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lilydale_claypit_fence_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lilydale_claypit_fence_7.addFeatures(features_lilydale_claypit_fence_7);
var lyr_lilydale_claypit_fence_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lilydale_claypit_fence_7, 
                style: style_lilydale_claypit_fence_7,
                popuplayertitle: 'lilydale_claypit_fence',
                interactive: true,
                title: '<img src="styles/legend/lilydale_claypit_fence_7.png" /> lilydale_claypit_fence'
            });
var format_Trail_Obstacles_8 = new ol.format.GeoJSON();
var features_Trail_Obstacles_8 = format_Trail_Obstacles_8.readFeatures(json_Trail_Obstacles_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trail_Obstacles_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trail_Obstacles_8.addFeatures(features_Trail_Obstacles_8);
var lyr_Trail_Obstacles_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trail_Obstacles_8, 
                style: style_Trail_Obstacles_8,
                popuplayertitle: 'Trail_Obstacles',
                interactive: true,
                title: '<img src="styles/legend/Trail_Obstacles_8.png" /> Trail_Obstacles'
            });
var format_Pickerel_Lake_Approach_9 = new ol.format.GeoJSON();
var features_Pickerel_Lake_Approach_9 = format_Pickerel_Lake_Approach_9.readFeatures(json_Pickerel_Lake_Approach_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pickerel_Lake_Approach_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pickerel_Lake_Approach_9.addFeatures(features_Pickerel_Lake_Approach_9);
var lyr_Pickerel_Lake_Approach_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pickerel_Lake_Approach_9, 
                style: style_Pickerel_Lake_Approach_9,
                popuplayertitle: 'Pickerel_Lake_Approach',
                interactive: true,
                title: '<img src="styles/legend/Pickerel_Lake_Approach_9.png" /> Pickerel_Lake_Approach'
            });
var format_S1_10 = new ol.format.GeoJSON();
var features_S1_10 = format_S1_10.readFeatures(json_S1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S1_10.addFeatures(features_S1_10);
var lyr_S1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S1_10, 
                style: style_S1_10,
                popuplayertitle: 'S1',
                interactive: true,
                title: '<img src="styles/legend/S1_10.png" /> S1'
            });
var format_S2_11 = new ol.format.GeoJSON();
var features_S2_11 = format_S2_11.readFeatures(json_S2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_11.addFeatures(features_S2_11);
var lyr_S2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S2_11, 
                style: style_S2_11,
                popuplayertitle: 'S2',
                interactive: true,
                title: '<img src="styles/legend/S2_11.png" /> S2'
            });
var format_S3_12 = new ol.format.GeoJSON();
var features_S3_12 = format_S3_12.readFeatures(json_S3_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S3_12.addFeatures(features_S3_12);
var lyr_S3_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S3_12, 
                style: style_S3_12,
                popuplayertitle: 'S3',
                interactive: true,
                title: '<img src="styles/legend/S3_12.png" /> S3'
            });
var format_S4_13 = new ol.format.GeoJSON();
var features_S4_13 = format_S4_13.readFeatures(json_S4_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S4_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S4_13.addFeatures(features_S4_13);
var lyr_S4_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S4_13, 
                style: style_S4_13,
                popuplayertitle: 'S4',
                interactive: true,
                title: '<img src="styles/legend/S4_13.png" /> S4'
            });
var format_S5_14 = new ol.format.GeoJSON();
var features_S5_14 = format_S5_14.readFeatures(json_S5_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S5_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S5_14.addFeatures(features_S5_14);
var lyr_S5_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S5_14, 
                style: style_S5_14,
                popuplayertitle: 'S5',
                interactive: true,
                title: '<img src="styles/legend/S5_14.png" /> S5'
            });
var format_S6_15 = new ol.format.GeoJSON();
var features_S6_15 = format_S6_15.readFeatures(json_S6_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S6_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S6_15.addFeatures(features_S6_15);
var lyr_S6_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S6_15, 
                style: style_S6_15,
                popuplayertitle: 'S6',
                interactive: true,
                title: '<img src="styles/legend/S6_15.png" /> S6'
            });
var format_S7_16 = new ol.format.GeoJSON();
var features_S7_16 = format_S7_16.readFeatures(json_S7_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S7_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S7_16.addFeatures(features_S7_16);
var lyr_S7_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S7_16, 
                style: style_S7_16,
                popuplayertitle: 'S7',
                interactive: true,
                title: '<img src="styles/legend/S7_16.png" /> S7'
            });
var format_S8_17 = new ol.format.GeoJSON();
var features_S8_17 = format_S8_17.readFeatures(json_S8_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S8_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S8_17.addFeatures(features_S8_17);
var lyr_S8_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S8_17, 
                style: style_S8_17,
                popuplayertitle: 'S8',
                interactive: true,
                title: '<img src="styles/legend/S8_17.png" /> S8'
            });
var format_S9_18 = new ol.format.GeoJSON();
var features_S9_18 = format_S9_18.readFeatures(json_S9_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S9_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S9_18.addFeatures(features_S9_18);
var lyr_S9_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S9_18, 
                style: style_S9_18,
                popuplayertitle: 'S9',
                interactive: true,
                title: '<img src="styles/legend/S9_18.png" /> S9'
            });
var format_S10_19 = new ol.format.GeoJSON();
var features_S10_19 = format_S10_19.readFeatures(json_S10_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S10_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S10_19.addFeatures(features_S10_19);
var lyr_S10_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S10_19, 
                style: style_S10_19,
                popuplayertitle: 'S10',
                interactive: true,
                title: '<img src="styles/legend/S10_19.png" /> S10'
            });
var format_S10B_20 = new ol.format.GeoJSON();
var features_S10B_20 = format_S10B_20.readFeatures(json_S10B_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S10B_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S10B_20.addFeatures(features_S10B_20);
var lyr_S10B_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S10B_20, 
                style: style_S10B_20,
                popuplayertitle: 'S10B',
                interactive: true,
                title: '<img src="styles/legend/S10B_20.png" /> S10B'
            });
var format_S11_21 = new ol.format.GeoJSON();
var features_S11_21 = format_S11_21.readFeatures(json_S11_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S11_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S11_21.addFeatures(features_S11_21);
var lyr_S11_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S11_21, 
                style: style_S11_21,
                popuplayertitle: 'S11',
                interactive: true,
                title: '<img src="styles/legend/S11_21.png" /> S11'
            });
var format_S12_22 = new ol.format.GeoJSON();
var features_S12_22 = format_S12_22.readFeatures(json_S12_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S12_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S12_22.addFeatures(features_S12_22);
var lyr_S12_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S12_22, 
                style: style_S12_22,
                popuplayertitle: 'S12',
                interactive: true,
                title: '<img src="styles/legend/S12_22.png" /> S12'
            });
var format_S125_23 = new ol.format.GeoJSON();
var features_S125_23 = format_S125_23.readFeatures(json_S125_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S125_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S125_23.addFeatures(features_S125_23);
var lyr_S125_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S125_23, 
                style: style_S125_23,
                popuplayertitle: 'S125',
                interactive: true,
                title: '<img src="styles/legend/S125_23.png" /> S125'
            });
var format_S13_24 = new ol.format.GeoJSON();
var features_S13_24 = format_S13_24.readFeatures(json_S13_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S13_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S13_24.addFeatures(features_S13_24);
var lyr_S13_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S13_24, 
                style: style_S13_24,
                popuplayertitle: 'S13',
                interactive: true,
                title: '<img src="styles/legend/S13_24.png" /> S13'
            });
var format_S13B_25 = new ol.format.GeoJSON();
var features_S13B_25 = format_S13B_25.readFeatures(json_S13B_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S13B_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S13B_25.addFeatures(features_S13B_25);
var lyr_S13B_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S13B_25, 
                style: style_S13B_25,
                popuplayertitle: 'S13B',
                interactive: true,
                title: '<img src="styles/legend/S13B_25.png" /> S13B'
            });
var format_S14_26 = new ol.format.GeoJSON();
var features_S14_26 = format_S14_26.readFeatures(json_S14_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S14_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S14_26.addFeatures(features_S14_26);
var lyr_S14_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S14_26, 
                style: style_S14_26,
                popuplayertitle: 'S14',
                interactive: true,
                title: '<img src="styles/legend/S14_26.png" /> S14'
            });
var format_S15_27 = new ol.format.GeoJSON();
var features_S15_27 = format_S15_27.readFeatures(json_S15_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S15_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S15_27.addFeatures(features_S15_27);
var lyr_S15_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S15_27, 
                style: style_S15_27,
                popuplayertitle: 'S15',
                interactive: true,
                title: '<img src="styles/legend/S15_27.png" /> S15'
            });
var format_S15B_28 = new ol.format.GeoJSON();
var features_S15B_28 = format_S15B_28.readFeatures(json_S15B_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S15B_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S15B_28.addFeatures(features_S15B_28);
var lyr_S15B_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S15B_28, 
                style: style_S15B_28,
                popuplayertitle: 'S15B',
                interactive: true,
                title: '<img src="styles/legend/S15B_28.png" /> S15B'
            });
var format_S16_29 = new ol.format.GeoJSON();
var features_S16_29 = format_S16_29.readFeatures(json_S16_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S16_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S16_29.addFeatures(features_S16_29);
var lyr_S16_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S16_29, 
                style: style_S16_29,
                popuplayertitle: 'S16',
                interactive: true,
                title: '<img src="styles/legend/S16_29.png" /> S16'
            });
var format_S17_30 = new ol.format.GeoJSON();
var features_S17_30 = format_S17_30.readFeatures(json_S17_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S17_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S17_30.addFeatures(features_S17_30);
var lyr_S17_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S17_30, 
                style: style_S17_30,
                popuplayertitle: 'S17',
                interactive: true,
                title: '<img src="styles/legend/S17_30.png" /> S17'
            });
var format_S17B_31 = new ol.format.GeoJSON();
var features_S17B_31 = format_S17B_31.readFeatures(json_S17B_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S17B_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S17B_31.addFeatures(features_S17B_31);
var lyr_S17B_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S17B_31, 
                style: style_S17B_31,
                popuplayertitle: 'S17B',
                interactive: true,
                title: '<img src="styles/legend/S17B_31.png" /> S17B'
            });
var format_S17C_32 = new ol.format.GeoJSON();
var features_S17C_32 = format_S17C_32.readFeatures(json_S17C_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S17C_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S17C_32.addFeatures(features_S17C_32);
var lyr_S17C_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S17C_32, 
                style: style_S17C_32,
                popuplayertitle: 'S17C',
                interactive: true,
                title: '<img src="styles/legend/S17C_32.png" /> S17C'
            });
var format_S18_33 = new ol.format.GeoJSON();
var features_S18_33 = format_S18_33.readFeatures(json_S18_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S18_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S18_33.addFeatures(features_S18_33);
var lyr_S18_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S18_33, 
                style: style_S18_33,
                popuplayertitle: 'S18',
                interactive: true,
                title: '<img src="styles/legend/S18_33.png" /> S18'
            });
var format_S19_34 = new ol.format.GeoJSON();
var features_S19_34 = format_S19_34.readFeatures(json_S19_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S19_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S19_34.addFeatures(features_S19_34);
var lyr_S19_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S19_34, 
                style: style_S19_34,
                popuplayertitle: 'S19',
                interactive: true,
                title: '<img src="styles/legend/S19_34.png" /> S19'
            });
var format_S19BSPUR1_35 = new ol.format.GeoJSON();
var features_S19BSPUR1_35 = format_S19BSPUR1_35.readFeatures(json_S19BSPUR1_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S19BSPUR1_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S19BSPUR1_35.addFeatures(features_S19BSPUR1_35);
var lyr_S19BSPUR1_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S19BSPUR1_35, 
                style: style_S19BSPUR1_35,
                popuplayertitle: 'S19B-SPUR1',
                interactive: true,
                title: '<img src="styles/legend/S19BSPUR1_35.png" /> S19B-SPUR1'
            });
var format_S19BSPUR2_36 = new ol.format.GeoJSON();
var features_S19BSPUR2_36 = format_S19BSPUR2_36.readFeatures(json_S19BSPUR2_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S19BSPUR2_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S19BSPUR2_36.addFeatures(features_S19BSPUR2_36);
var lyr_S19BSPUR2_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S19BSPUR2_36, 
                style: style_S19BSPUR2_36,
                popuplayertitle: 'S19B-SPUR2',
                interactive: true,
                title: '<img src="styles/legend/S19BSPUR2_36.png" /> S19B-SPUR2'
            });
var format_S20_37 = new ol.format.GeoJSON();
var features_S20_37 = format_S20_37.readFeatures(json_S20_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S20_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S20_37.addFeatures(features_S20_37);
var lyr_S20_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S20_37, 
                style: style_S20_37,
                popuplayertitle: 'S20',
                interactive: true,
                title: '<img src="styles/legend/S20_37.png" /> S20'
            });
var format_S21_38 = new ol.format.GeoJSON();
var features_S21_38 = format_S21_38.readFeatures(json_S21_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S21_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S21_38.addFeatures(features_S21_38);
var lyr_S21_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S21_38, 
                style: style_S21_38,
                popuplayertitle: 'S21',
                interactive: true,
                title: '<img src="styles/legend/S21_38.png" /> S21'
            });
var format_S22_39 = new ol.format.GeoJSON();
var features_S22_39 = format_S22_39.readFeatures(json_S22_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S22_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S22_39.addFeatures(features_S22_39);
var lyr_S22_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S22_39, 
                style: style_S22_39,
                popuplayertitle: 'S22',
                interactive: true,
                title: '<img src="styles/legend/S22_39.png" /> S22'
            });
var format_S23_40 = new ol.format.GeoJSON();
var features_S23_40 = format_S23_40.readFeatures(json_S23_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S23_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S23_40.addFeatures(features_S23_40);
var lyr_S23_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S23_40, 
                style: style_S23_40,
                popuplayertitle: 'S23',
                interactive: true,
                title: '<img src="styles/legend/S23_40.png" /> S23'
            });
var format_S23B_41 = new ol.format.GeoJSON();
var features_S23B_41 = format_S23B_41.readFeatures(json_S23B_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S23B_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S23B_41.addFeatures(features_S23B_41);
var lyr_S23B_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S23B_41, 
                style: style_S23B_41,
                popuplayertitle: 'S23B',
                interactive: true,
                title: '<img src="styles/legend/S23B_41.png" /> S23B'
            });
var format_S23BSPUR_42 = new ol.format.GeoJSON();
var features_S23BSPUR_42 = format_S23BSPUR_42.readFeatures(json_S23BSPUR_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S23BSPUR_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S23BSPUR_42.addFeatures(features_S23BSPUR_42);
var lyr_S23BSPUR_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S23BSPUR_42, 
                style: style_S23BSPUR_42,
                popuplayertitle: 'S23B-SPUR',
                interactive: true,
                title: '<img src="styles/legend/S23BSPUR_42.png" /> S23B-SPUR'
            });
var format_S24_43 = new ol.format.GeoJSON();
var features_S24_43 = format_S24_43.readFeatures(json_S24_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S24_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S24_43.addFeatures(features_S24_43);
var lyr_S24_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S24_43, 
                style: style_S24_43,
                popuplayertitle: 'S24',
                interactive: true,
                title: '<img src="styles/legend/S24_43.png" /> S24'
            });
var format_S25_44 = new ol.format.GeoJSON();
var features_S25_44 = format_S25_44.readFeatures(json_S25_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S25_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S25_44.addFeatures(features_S25_44);
var lyr_S25_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S25_44, 
                style: style_S25_44,
                popuplayertitle: 'S25',
                interactive: true,
                title: '<img src="styles/legend/S25_44.png" /> S25'
            });
var format_S25LS_45 = new ol.format.GeoJSON();
var features_S25LS_45 = format_S25LS_45.readFeatures(json_S25LS_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S25LS_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S25LS_45.addFeatures(features_S25LS_45);
var lyr_S25LS_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S25LS_45, 
                style: style_S25LS_45,
                popuplayertitle: 'S25-LS',
                interactive: true,
                title: '<img src="styles/legend/S25LS_45.png" /> S25-LS'
            });
var format_S26LS_46 = new ol.format.GeoJSON();
var features_S26LS_46 = format_S26LS_46.readFeatures(json_S26LS_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S26LS_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S26LS_46.addFeatures(features_S26LS_46);
var lyr_S26LS_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S26LS_46, 
                style: style_S26LS_46,
                popuplayertitle: 'S26-LS',
                interactive: true,
                title: '<img src="styles/legend/S26LS_46.png" /> S26-LS'
            });
var format_S27_47 = new ol.format.GeoJSON();
var features_S27_47 = format_S27_47.readFeatures(json_S27_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S27_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S27_47.addFeatures(features_S27_47);
var lyr_S27_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S27_47, 
                style: style_S27_47,
                popuplayertitle: 'S27',
                interactive: true,
                title: '<img src="styles/legend/S27_47.png" /> S27'
            });
var format_S28LS_48 = new ol.format.GeoJSON();
var features_S28LS_48 = format_S28LS_48.readFeatures(json_S28LS_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S28LS_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S28LS_48.addFeatures(features_S28LS_48);
var lyr_S28LS_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S28LS_48, 
                style: style_S28LS_48,
                popuplayertitle: 'S28-LS',
                interactive: true,
                title: '<img src="styles/legend/S28LS_48.png" /> S28-LS'
            });
var format_S30_49 = new ol.format.GeoJSON();
var features_S30_49 = format_S30_49.readFeatures(json_S30_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S30_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S30_49.addFeatures(features_S30_49);
var lyr_S30_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S30_49, 
                style: style_S30_49,
                popuplayertitle: 'S30',
                interactive: true,
                title: '<img src="styles/legend/S30_49.png" /> S30'
            });
var format_S30B_50 = new ol.format.GeoJSON();
var features_S30B_50 = format_S30B_50.readFeatures(json_S30B_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S30B_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S30B_50.addFeatures(features_S30B_50);
var lyr_S30B_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S30B_50, 
                style: style_S30B_50,
                popuplayertitle: 'S30B',
                interactive: true,
                title: '<img src="styles/legend/S30B_50.png" /> S30B'
            });
var format_S31_51 = new ol.format.GeoJSON();
var features_S31_51 = format_S31_51.readFeatures(json_S31_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S31_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S31_51.addFeatures(features_S31_51);
var lyr_S31_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S31_51, 
                style: style_S31_51,
                popuplayertitle: 'S31',
                interactive: true,
                title: '<img src="styles/legend/S31_51.png" /> S31'
            });
var format_S31B_52 = new ol.format.GeoJSON();
var features_S31B_52 = format_S31B_52.readFeatures(json_S31B_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S31B_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S31B_52.addFeatures(features_S31B_52);
var lyr_S31B_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S31B_52, 
                style: style_S31B_52,
                popuplayertitle: 'S31B',
                interactive: true,
                title: '<img src="styles/legend/S31B_52.png" /> S31B'
            });
var format_S31LOW_53 = new ol.format.GeoJSON();
var features_S31LOW_53 = format_S31LOW_53.readFeatures(json_S31LOW_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S31LOW_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S31LOW_53.addFeatures(features_S31LOW_53);
var lyr_S31LOW_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S31LOW_53, 
                style: style_S31LOW_53,
                popuplayertitle: 'S31-LOW',
                interactive: true,
                title: '<img src="styles/legend/S31LOW_53.png" /> S31-LOW'
            });
var format_S32_54 = new ol.format.GeoJSON();
var features_S32_54 = format_S32_54.readFeatures(json_S32_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S32_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S32_54.addFeatures(features_S32_54);
var lyr_S32_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S32_54, 
                style: style_S32_54,
                popuplayertitle: 'S32',
                interactive: true,
                title: '<img src="styles/legend/S32_54.png" /> S32'
            });
var format_S32LOW_55 = new ol.format.GeoJSON();
var features_S32LOW_55 = format_S32LOW_55.readFeatures(json_S32LOW_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S32LOW_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S32LOW_55.addFeatures(features_S32LOW_55);
var lyr_S32LOW_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S32LOW_55, 
                style: style_S32LOW_55,
                popuplayertitle: 'S32-LOW',
                interactive: true,
                title: '<img src="styles/legend/S32LOW_55.png" /> S32-LOW'
            });
var format_S33_56 = new ol.format.GeoJSON();
var features_S33_56 = format_S33_56.readFeatures(json_S33_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S33_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S33_56.addFeatures(features_S33_56);
var lyr_S33_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S33_56, 
                style: style_S33_56,
                popuplayertitle: 'S33',
                interactive: true,
                title: '<img src="styles/legend/S33_56.png" /> S33'
            });
var format_S33LOW_57 = new ol.format.GeoJSON();
var features_S33LOW_57 = format_S33LOW_57.readFeatures(json_S33LOW_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S33LOW_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S33LOW_57.addFeatures(features_S33LOW_57);
var lyr_S33LOW_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S33LOW_57, 
                style: style_S33LOW_57,
                popuplayertitle: 'S33-LOW',
                interactive: true,
                title: '<img src="styles/legend/S33LOW_57.png" /> S33-LOW'
            });
var format_S33UP_58 = new ol.format.GeoJSON();
var features_S33UP_58 = format_S33UP_58.readFeatures(json_S33UP_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S33UP_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S33UP_58.addFeatures(features_S33UP_58);
var lyr_S33UP_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S33UP_58, 
                style: style_S33UP_58,
                popuplayertitle: 'S33-UP',
                interactive: true,
                title: '<img src="styles/legend/S33UP_58.png" /> S33-UP'
            });
var format_S34_59 = new ol.format.GeoJSON();
var features_S34_59 = format_S34_59.readFeatures(json_S34_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S34_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S34_59.addFeatures(features_S34_59);
var lyr_S34_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S34_59, 
                style: style_S34_59,
                popuplayertitle: 'S34',
                interactive: true,
                title: '<img src="styles/legend/S34_59.png" /> S34'
            });
var format_S34LOW_60 = new ol.format.GeoJSON();
var features_S34LOW_60 = format_S34LOW_60.readFeatures(json_S34LOW_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S34LOW_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S34LOW_60.addFeatures(features_S34LOW_60);
var lyr_S34LOW_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S34LOW_60, 
                style: style_S34LOW_60,
                popuplayertitle: 'S34-LOW',
                interactive: true,
                title: '<img src="styles/legend/S34LOW_60.png" /> S34-LOW'
            });
var format_S34UP_61 = new ol.format.GeoJSON();
var features_S34UP_61 = format_S34UP_61.readFeatures(json_S34UP_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S34UP_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S34UP_61.addFeatures(features_S34UP_61);
var lyr_S34UP_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S34UP_61, 
                style: style_S34UP_61,
                popuplayertitle: 'S34-UP',
                interactive: true,
                title: '<img src="styles/legend/S34UP_61.png" /> S34-UP'
            });
var format_S35_62 = new ol.format.GeoJSON();
var features_S35_62 = format_S35_62.readFeatures(json_S35_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S35_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S35_62.addFeatures(features_S35_62);
var lyr_S35_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S35_62, 
                style: style_S35_62,
                popuplayertitle: 'S35',
                interactive: true,
                title: '<img src="styles/legend/S35_62.png" /> S35'
            });
var format_S35B_63 = new ol.format.GeoJSON();
var features_S35B_63 = format_S35B_63.readFeatures(json_S35B_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S35B_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S35B_63.addFeatures(features_S35B_63);
var lyr_S35B_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S35B_63, 
                style: style_S35B_63,
                popuplayertitle: 'S35B',
                interactive: true,
                title: '<img src="styles/legend/S35B_63.png" /> S35B'
            });
var format_S35UP_64 = new ol.format.GeoJSON();
var features_S35UP_64 = format_S35UP_64.readFeatures(json_S35UP_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S35UP_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S35UP_64.addFeatures(features_S35UP_64);
var lyr_S35UP_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S35UP_64, 
                style: style_S35UP_64,
                popuplayertitle: 'S35-UP',
                interactive: true,
                title: '<img src="styles/legend/S35UP_64.png" /> S35-UP'
            });
var format_S36_65 = new ol.format.GeoJSON();
var features_S36_65 = format_S36_65.readFeatures(json_S36_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S36_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S36_65.addFeatures(features_S36_65);
var lyr_S36_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S36_65, 
                style: style_S36_65,
                popuplayertitle: 'S36',
                interactive: true,
                title: '<img src="styles/legend/S36_65.png" /> S36'
            });
var format_S37_66 = new ol.format.GeoJSON();
var features_S37_66 = format_S37_66.readFeatures(json_S37_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S37_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S37_66.addFeatures(features_S37_66);
var lyr_S37_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S37_66, 
                style: style_S37_66,
                popuplayertitle: 'S37',
                interactive: true,
                title: '<img src="styles/legend/S37_66.png" /> S37'
            });
var format_S38_67 = new ol.format.GeoJSON();
var features_S38_67 = format_S38_67.readFeatures(json_S38_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S38_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S38_67.addFeatures(features_S38_67);
var lyr_S38_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S38_67, 
                style: style_S38_67,
                popuplayertitle: 'S38',
                interactive: true,
                title: '<img src="styles/legend/S38_67.png" /> S38'
            });
var format_S39_68 = new ol.format.GeoJSON();
var features_S39_68 = format_S39_68.readFeatures(json_S39_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S39_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S39_68.addFeatures(features_S39_68);
var lyr_S39_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S39_68, 
                style: style_S39_68,
                popuplayertitle: 'S39',
                interactive: true,
                title: '<img src="styles/legend/S39_68.png" /> S39'
            });
var format_S40_69 = new ol.format.GeoJSON();
var features_S40_69 = format_S40_69.readFeatures(json_S40_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S40_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S40_69.addFeatures(features_S40_69);
var lyr_S40_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S40_69, 
                style: style_S40_69,
                popuplayertitle: 'S40',
                interactive: true,
                title: '<img src="styles/legend/S40_69.png" /> S40'
            });
var format_S41_70 = new ol.format.GeoJSON();
var features_S41_70 = format_S41_70.readFeatures(json_S41_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S41_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S41_70.addFeatures(features_S41_70);
var lyr_S41_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S41_70, 
                style: style_S41_70,
                popuplayertitle: 'S41',
                interactive: true,
                title: '<img src="styles/legend/S41_70.png" /> S41'
            });
var format_S42_71 = new ol.format.GeoJSON();
var features_S42_71 = format_S42_71.readFeatures(json_S42_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S42_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S42_71.addFeatures(features_S42_71);
var lyr_S42_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S42_71, 
                style: style_S42_71,
                popuplayertitle: 'S42',
                interactive: true,
                title: '<img src="styles/legend/S42_71.png" /> S42'
            });
var format_N2_72 = new ol.format.GeoJSON();
var features_N2_72 = format_N2_72.readFeatures(json_N2_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N2_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N2_72.addFeatures(features_N2_72);
var lyr_N2_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N2_72, 
                style: style_N2_72,
                popuplayertitle: 'N2',
                interactive: true,
                title: '<img src="styles/legend/N2_72.png" /> N2'
            });
var format_N3_73 = new ol.format.GeoJSON();
var features_N3_73 = format_N3_73.readFeatures(json_N3_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3_73.addFeatures(features_N3_73);
var lyr_N3_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N3_73, 
                style: style_N3_73,
                popuplayertitle: 'N3',
                interactive: true,
                title: '<img src="styles/legend/N3_73.png" /> N3'
            });
var format_N4_74 = new ol.format.GeoJSON();
var features_N4_74 = format_N4_74.readFeatures(json_N4_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N4_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N4_74.addFeatures(features_N4_74);
var lyr_N4_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N4_74, 
                style: style_N4_74,
                popuplayertitle: 'N4',
                interactive: true,
                title: '<img src="styles/legend/N4_74.png" /> N4'
            });
var format_N5_75 = new ol.format.GeoJSON();
var features_N5_75 = format_N5_75.readFeatures(json_N5_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N5_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N5_75.addFeatures(features_N5_75);
var lyr_N5_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N5_75, 
                style: style_N5_75,
                popuplayertitle: 'N5',
                interactive: true,
                title: '<img src="styles/legend/N5_75.png" /> N5'
            });
var format_N6_76 = new ol.format.GeoJSON();
var features_N6_76 = format_N6_76.readFeatures(json_N6_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N6_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N6_76.addFeatures(features_N6_76);
var lyr_N6_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N6_76, 
                style: style_N6_76,
                popuplayertitle: 'N6',
                interactive: true,
                title: '<img src="styles/legend/N6_76.png" /> N6'
            });
var format_N7_77 = new ol.format.GeoJSON();
var features_N7_77 = format_N7_77.readFeatures(json_N7_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N7_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N7_77.addFeatures(features_N7_77);
var lyr_N7_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N7_77, 
                style: style_N7_77,
                popuplayertitle: 'N7',
                interactive: true,
                title: '<img src="styles/legend/N7_77.png" /> N7'
            });
var format_N7B_78 = new ol.format.GeoJSON();
var features_N7B_78 = format_N7B_78.readFeatures(json_N7B_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N7B_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N7B_78.addFeatures(features_N7B_78);
var lyr_N7B_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N7B_78, 
                style: style_N7B_78,
                popuplayertitle: 'N7B',
                interactive: true,
                title: '<img src="styles/legend/N7B_78.png" /> N7B'
            });
var format_N8_79 = new ol.format.GeoJSON();
var features_N8_79 = format_N8_79.readFeatures(json_N8_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N8_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N8_79.addFeatures(features_N8_79);
var lyr_N8_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N8_79, 
                style: style_N8_79,
                popuplayertitle: 'N8',
                interactive: true,
                title: '<img src="styles/legend/N8_79.png" /> N8'
            });
var format_N8B_80 = new ol.format.GeoJSON();
var features_N8B_80 = format_N8B_80.readFeatures(json_N8B_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N8B_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N8B_80.addFeatures(features_N8B_80);
var lyr_N8B_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N8B_80, 
                style: style_N8B_80,
                popuplayertitle: 'N8B',
                interactive: true,
                title: '<img src="styles/legend/N8B_80.png" /> N8B'
            });
var format_N9_81 = new ol.format.GeoJSON();
var features_N9_81 = format_N9_81.readFeatures(json_N9_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N9_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N9_81.addFeatures(features_N9_81);
var lyr_N9_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N9_81, 
                style: style_N9_81,
                popuplayertitle: 'N9',
                interactive: true,
                title: '<img src="styles/legend/N9_81.png" /> N9'
            });
var format_N10_82 = new ol.format.GeoJSON();
var features_N10_82 = format_N10_82.readFeatures(json_N10_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N10_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N10_82.addFeatures(features_N10_82);
var lyr_N10_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N10_82, 
                style: style_N10_82,
                popuplayertitle: 'N10',
                interactive: true,
                title: '<img src="styles/legend/N10_82.png" /> N10'
            });
var format_N11_83 = new ol.format.GeoJSON();
var features_N11_83 = format_N11_83.readFeatures(json_N11_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N11_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N11_83.addFeatures(features_N11_83);
var lyr_N11_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N11_83, 
                style: style_N11_83,
                popuplayertitle: 'N11',
                interactive: true,
                title: '<img src="styles/legend/N11_83.png" /> N11'
            });
var format_N12_84 = new ol.format.GeoJSON();
var features_N12_84 = format_N12_84.readFeatures(json_N12_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N12_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N12_84.addFeatures(features_N12_84);
var lyr_N12_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N12_84, 
                style: style_N12_84,
                popuplayertitle: 'N12',
                interactive: true,
                title: '<img src="styles/legend/N12_84.png" /> N12'
            });
var format_N13_85 = new ol.format.GeoJSON();
var features_N13_85 = format_N13_85.readFeatures(json_N13_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N13_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N13_85.addFeatures(features_N13_85);
var lyr_N13_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N13_85, 
                style: style_N13_85,
                popuplayertitle: 'N13',
                interactive: true,
                title: '<img src="styles/legend/N13_85.png" /> N13'
            });
var format_N14_86 = new ol.format.GeoJSON();
var features_N14_86 = format_N14_86.readFeatures(json_N14_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N14_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N14_86.addFeatures(features_N14_86);
var lyr_N14_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N14_86, 
                style: style_N14_86,
                popuplayertitle: 'N14',
                interactive: true,
                title: '<img src="styles/legend/N14_86.png" /> N14'
            });
var format_N15_87 = new ol.format.GeoJSON();
var features_N15_87 = format_N15_87.readFeatures(json_N15_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N15_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N15_87.addFeatures(features_N15_87);
var lyr_N15_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N15_87, 
                style: style_N15_87,
                popuplayertitle: 'N15',
                interactive: true,
                title: '<img src="styles/legend/N15_87.png" /> N15'
            });
var format_N16_88 = new ol.format.GeoJSON();
var features_N16_88 = format_N16_88.readFeatures(json_N16_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N16_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N16_88.addFeatures(features_N16_88);
var lyr_N16_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N16_88, 
                style: style_N16_88,
                popuplayertitle: 'N16',
                interactive: true,
                title: '<img src="styles/legend/N16_88.png" /> N16'
            });
var format_N17_89 = new ol.format.GeoJSON();
var features_N17_89 = format_N17_89.readFeatures(json_N17_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N17_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N17_89.addFeatures(features_N17_89);
var lyr_N17_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N17_89, 
                style: style_N17_89,
                popuplayertitle: 'N17',
                interactive: true,
                title: '<img src="styles/legend/N17_89.png" /> N17'
            });
var format_N17B_90 = new ol.format.GeoJSON();
var features_N17B_90 = format_N17B_90.readFeatures(json_N17B_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N17B_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N17B_90.addFeatures(features_N17B_90);
var lyr_N17B_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N17B_90, 
                style: style_N17B_90,
                popuplayertitle: 'N17B',
                interactive: true,
                title: '<img src="styles/legend/N17B_90.png" /> N17B'
            });
var format_N18_91 = new ol.format.GeoJSON();
var features_N18_91 = format_N18_91.readFeatures(json_N18_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N18_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N18_91.addFeatures(features_N18_91);
var lyr_N18_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N18_91, 
                style: style_N18_91,
                popuplayertitle: 'N18',
                interactive: true,
                title: '<img src="styles/legend/N18_91.png" /> N18'
            });
var format_N19_92 = new ol.format.GeoJSON();
var features_N19_92 = format_N19_92.readFeatures(json_N19_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N19_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N19_92.addFeatures(features_N19_92);
var lyr_N19_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N19_92, 
                style: style_N19_92,
                popuplayertitle: 'N19',
                interactive: true,
                title: '<img src="styles/legend/N19_92.png" /> N19'
            });
var format_N20_93 = new ol.format.GeoJSON();
var features_N20_93 = format_N20_93.readFeatures(json_N20_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N20_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N20_93.addFeatures(features_N20_93);
var lyr_N20_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N20_93, 
                style: style_N20_93,
                popuplayertitle: 'N20',
                interactive: true,
                title: '<img src="styles/legend/N20_93.png" /> N20'
            });
var format_N20B_94 = new ol.format.GeoJSON();
var features_N20B_94 = format_N20B_94.readFeatures(json_N20B_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N20B_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N20B_94.addFeatures(features_N20B_94);
var lyr_N20B_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N20B_94, 
                style: style_N20B_94,
                popuplayertitle: 'N20B',
                interactive: true,
                title: '<img src="styles/legend/N20B_94.png" /> N20B'
            });
var format_N21B_95 = new ol.format.GeoJSON();
var features_N21B_95 = format_N21B_95.readFeatures(json_N21B_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N21B_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N21B_95.addFeatures(features_N21B_95);
var lyr_N21B_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N21B_95, 
                style: style_N21B_95,
                popuplayertitle: 'N21B',
                interactive: true,
                title: '<img src="styles/legend/N21B_95.png" /> N21B'
            });
var format_N21_96 = new ol.format.GeoJSON();
var features_N21_96 = format_N21_96.readFeatures(json_N21_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N21_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N21_96.addFeatures(features_N21_96);
var lyr_N21_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N21_96, 
                style: style_N21_96,
                popuplayertitle: 'N21',
                interactive: true,
                title: '<img src="styles/legend/N21_96.png" /> N21'
            });
var format_N23UP_97 = new ol.format.GeoJSON();
var features_N23UP_97 = format_N23UP_97.readFeatures(json_N23UP_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N23UP_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N23UP_97.addFeatures(features_N23UP_97);
var lyr_N23UP_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N23UP_97, 
                style: style_N23UP_97,
                popuplayertitle: 'N23-UP',
                interactive: true,
                title: '<img src="styles/legend/N23UP_97.png" /> N23-UP'
            });
var format_N23LOW_98 = new ol.format.GeoJSON();
var features_N23LOW_98 = format_N23LOW_98.readFeatures(json_N23LOW_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N23LOW_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N23LOW_98.addFeatures(features_N23LOW_98);
var lyr_N23LOW_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N23LOW_98, 
                style: style_N23LOW_98,
                popuplayertitle: 'N23-LOW',
                interactive: true,
                title: '<img src="styles/legend/N23LOW_98.png" /> N23-LOW'
            });
var format_N24UP_99 = new ol.format.GeoJSON();
var features_N24UP_99 = format_N24UP_99.readFeatures(json_N24UP_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N24UP_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N24UP_99.addFeatures(features_N24UP_99);
var lyr_N24UP_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N24UP_99, 
                style: style_N24UP_99,
                popuplayertitle: 'N24-UP',
                interactive: true,
                title: '<img src="styles/legend/N24UP_99.png" /> N24-UP'
            });
var format_N25B_100 = new ol.format.GeoJSON();
var features_N25B_100 = format_N25B_100.readFeatures(json_N25B_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N25B_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N25B_100.addFeatures(features_N25B_100);
var lyr_N25B_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N25B_100, 
                style: style_N25B_100,
                popuplayertitle: 'N25B',
                interactive: true,
                title: '<img src="styles/legend/N25B_100.png" /> N25B'
            });
var format_N25UP_101 = new ol.format.GeoJSON();
var features_N25UP_101 = format_N25UP_101.readFeatures(json_N25UP_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N25UP_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N25UP_101.addFeatures(features_N25UP_101);
var lyr_N25UP_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N25UP_101, 
                style: style_N25UP_101,
                popuplayertitle: 'N25-UP',
                interactive: true,
                title: '<img src="styles/legend/N25UP_101.png" /> N25-UP'
            });
var format_N26_102 = new ol.format.GeoJSON();
var features_N26_102 = format_N26_102.readFeatures(json_N26_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N26_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N26_102.addFeatures(features_N26_102);
var lyr_N26_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N26_102, 
                style: style_N26_102,
                popuplayertitle: 'N26',
                interactive: true,
                title: '<img src="styles/legend/N26_102.png" /> N26'
            });
var format_N27_103 = new ol.format.GeoJSON();
var features_N27_103 = format_N27_103.readFeatures(json_N27_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N27_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N27_103.addFeatures(features_N27_103);
var lyr_N27_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N27_103, 
                style: style_N27_103,
                popuplayertitle: 'N27',
                interactive: true,
                title: '<img src="styles/legend/N27_103.png" /> N27'
            });
var format_N27SPUR_104 = new ol.format.GeoJSON();
var features_N27SPUR_104 = format_N27SPUR_104.readFeatures(json_N27SPUR_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N27SPUR_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N27SPUR_104.addFeatures(features_N27SPUR_104);
var lyr_N27SPUR_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N27SPUR_104, 
                style: style_N27SPUR_104,
                popuplayertitle: 'N27-SPUR',
                interactive: true,
                title: '<img src="styles/legend/N27SPUR_104.png" /> N27-SPUR'
            });
var format_N28_105 = new ol.format.GeoJSON();
var features_N28_105 = format_N28_105.readFeatures(json_N28_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N28_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N28_105.addFeatures(features_N28_105);
var lyr_N28_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N28_105, 
                style: style_N28_105,
                popuplayertitle: 'N28',
                interactive: true,
                title: '<img src="styles/legend/N28_105.png" /> N28'
            });
var format_N29_106 = new ol.format.GeoJSON();
var features_N29_106 = format_N29_106.readFeatures(json_N29_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N29_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N29_106.addFeatures(features_N29_106);
var lyr_N29_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N29_106, 
                style: style_N29_106,
                popuplayertitle: 'N29',
                interactive: true,
                title: '<img src="styles/legend/N29_106.png" /> N29'
            });
var format_N30_107 = new ol.format.GeoJSON();
var features_N30_107 = format_N30_107.readFeatures(json_N30_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N30_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N30_107.addFeatures(features_N30_107);
var lyr_N30_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N30_107, 
                style: style_N30_107,
                popuplayertitle: 'N30',
                interactive: true,
                title: '<img src="styles/legend/N30_107.png" /> N30'
            });
var format_N30B_108 = new ol.format.GeoJSON();
var features_N30B_108 = format_N30B_108.readFeatures(json_N30B_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N30B_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N30B_108.addFeatures(features_N30B_108);
var lyr_N30B_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N30B_108, 
                style: style_N30B_108,
                popuplayertitle: 'N30B',
                interactive: true,
                title: '<img src="styles/legend/N30B_108.png" /> N30B'
            });
var format_N31_109 = new ol.format.GeoJSON();
var features_N31_109 = format_N31_109.readFeatures(json_N31_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N31_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N31_109.addFeatures(features_N31_109);
var lyr_N31_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N31_109, 
                style: style_N31_109,
                popuplayertitle: 'N31',
                interactive: true,
                title: '<img src="styles/legend/N31_109.png" /> N31'
            });
var format_N31B_110 = new ol.format.GeoJSON();
var features_N31B_110 = format_N31B_110.readFeatures(json_N31B_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N31B_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N31B_110.addFeatures(features_N31B_110);
var lyr_N31B_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N31B_110, 
                style: style_N31B_110,
                popuplayertitle: 'N31B',
                interactive: true,
                title: '<img src="styles/legend/N31B_110.png" /> N31B'
            });
var format_N31C_111 = new ol.format.GeoJSON();
var features_N31C_111 = format_N31C_111.readFeatures(json_N31C_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N31C_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N31C_111.addFeatures(features_N31C_111);
var lyr_N31C_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N31C_111, 
                style: style_N31C_111,
                popuplayertitle: 'N31C',
                interactive: true,
                title: '<img src="styles/legend/N31C_111.png" /> N31C'
            });
var format_N32_112 = new ol.format.GeoJSON();
var features_N32_112 = format_N32_112.readFeatures(json_N32_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N32_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N32_112.addFeatures(features_N32_112);
var lyr_N32_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N32_112, 
                style: style_N32_112,
                popuplayertitle: 'N32',
                interactive: true,
                title: '<img src="styles/legend/N32_112.png" /> N32'
            });
var format_N33_113 = new ol.format.GeoJSON();
var features_N33_113 = format_N33_113.readFeatures(json_N33_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N33_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N33_113.addFeatures(features_N33_113);
var lyr_N33_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N33_113, 
                style: style_N33_113,
                popuplayertitle: 'N33',
                interactive: true,
                title: '<img src="styles/legend/N33_113.png" /> N33'
            });
var group_NortheastTrailSegments = new ol.layer.Group({
                                layers: [lyr_N2_72,lyr_N3_73,lyr_N4_74,lyr_N5_75,lyr_N6_76,lyr_N7_77,lyr_N7B_78,lyr_N8_79,lyr_N8B_80,lyr_N9_81,lyr_N10_82,lyr_N11_83,lyr_N12_84,lyr_N13_85,lyr_N14_86,lyr_N15_87,lyr_N16_88,lyr_N17_89,lyr_N17B_90,lyr_N18_91,lyr_N19_92,lyr_N20_93,lyr_N20B_94,lyr_N21B_95,lyr_N21_96,lyr_N23UP_97,lyr_N23LOW_98,lyr_N24UP_99,lyr_N25B_100,lyr_N25UP_101,lyr_N26_102,lyr_N27_103,lyr_N27SPUR_104,lyr_N28_105,lyr_N29_106,lyr_N30_107,lyr_N30B_108,lyr_N31_109,lyr_N31B_110,lyr_N31C_111,lyr_N32_112,lyr_N33_113,],
                                fold: 'close',
                                title: 'Northeast Trail Segments'});
var group_SouthwestTrailSegments = new ol.layer.Group({
                                layers: [lyr_S1_10,lyr_S2_11,lyr_S3_12,lyr_S4_13,lyr_S5_14,lyr_S6_15,lyr_S7_16,lyr_S8_17,lyr_S9_18,lyr_S10_19,lyr_S10B_20,lyr_S11_21,lyr_S12_22,lyr_S125_23,lyr_S13_24,lyr_S13B_25,lyr_S14_26,lyr_S15_27,lyr_S15B_28,lyr_S16_29,lyr_S17_30,lyr_S17B_31,lyr_S17C_32,lyr_S18_33,lyr_S19_34,lyr_S19BSPUR1_35,lyr_S19BSPUR2_36,lyr_S20_37,lyr_S21_38,lyr_S22_39,lyr_S23_40,lyr_S23B_41,lyr_S23BSPUR_42,lyr_S24_43,lyr_S25_44,lyr_S25LS_45,lyr_S26LS_46,lyr_S27_47,lyr_S28LS_48,lyr_S30_49,lyr_S30B_50,lyr_S31_51,lyr_S31B_52,lyr_S31LOW_53,lyr_S32_54,lyr_S32LOW_55,lyr_S33_56,lyr_S33LOW_57,lyr_S33UP_58,lyr_S34_59,lyr_S34LOW_60,lyr_S34UP_61,lyr_S35_62,lyr_S35B_63,lyr_S35UP_64,lyr_S36_65,lyr_S37_66,lyr_S38_67,lyr_S39_68,lyr_S40_69,lyr_S41_70,lyr_S42_71,],
                                fold: 'open',
                                title: 'Southwest Trail Segments'});
var group_UndevelopedObstacles = new ol.layer.Group({
                                layers: [lyr_S23__5,lyr_railroadwalk_6,lyr_lilydale_claypit_fence_7,lyr_Trail_Obstacles_8,lyr_Pickerel_Lake_Approach_9,],
                                fold: 'open',
                                title: 'Undeveloped & Obstacles'});
var group_HistoricalInterpretation = new ol.layer.Group({
                                layers: [lyr_Historical_Interp_4,],
                                fold: 'open',
                                title: 'Historical Interpretation'});
var group_NatureInterpretation = new ol.layer.Group({
                                layers: [lyr_Nature_Interp_3,],
                                fold: 'open',
                                title: 'Nature Interpretation'});
var group_TrailObservations = new ol.layer.Group({
                                layers: [lyr_Scouting_2,],
                                fold: 'open',
                                title: 'Trail Observations'});

lyr_Terrain_0.setVisible(true);lyr_GoogleSatelliite_1.setVisible(true);lyr_Scouting_2.setVisible(true);lyr_Nature_Interp_3.setVisible(true);lyr_Historical_Interp_4.setVisible(true);lyr_S23__5.setVisible(true);lyr_railroadwalk_6.setVisible(true);lyr_lilydale_claypit_fence_7.setVisible(true);lyr_Trail_Obstacles_8.setVisible(true);lyr_Pickerel_Lake_Approach_9.setVisible(true);lyr_S1_10.setVisible(true);lyr_S2_11.setVisible(true);lyr_S3_12.setVisible(true);lyr_S4_13.setVisible(true);lyr_S5_14.setVisible(true);lyr_S6_15.setVisible(true);lyr_S7_16.setVisible(true);lyr_S8_17.setVisible(true);lyr_S9_18.setVisible(true);lyr_S10_19.setVisible(true);lyr_S10B_20.setVisible(true);lyr_S11_21.setVisible(true);lyr_S12_22.setVisible(true);lyr_S125_23.setVisible(true);lyr_S13_24.setVisible(true);lyr_S13B_25.setVisible(true);lyr_S14_26.setVisible(true);lyr_S15_27.setVisible(true);lyr_S15B_28.setVisible(true);lyr_S16_29.setVisible(true);lyr_S17_30.setVisible(true);lyr_S17B_31.setVisible(true);lyr_S17C_32.setVisible(true);lyr_S18_33.setVisible(true);lyr_S19_34.setVisible(true);lyr_S19BSPUR1_35.setVisible(true);lyr_S19BSPUR2_36.setVisible(true);lyr_S20_37.setVisible(true);lyr_S21_38.setVisible(true);lyr_S22_39.setVisible(true);lyr_S23_40.setVisible(true);lyr_S23B_41.setVisible(true);lyr_S23BSPUR_42.setVisible(true);lyr_S24_43.setVisible(true);lyr_S25_44.setVisible(true);lyr_S25LS_45.setVisible(true);lyr_S26LS_46.setVisible(true);lyr_S27_47.setVisible(true);lyr_S28LS_48.setVisible(true);lyr_S30_49.setVisible(true);lyr_S30B_50.setVisible(true);lyr_S31_51.setVisible(true);lyr_S31B_52.setVisible(true);lyr_S31LOW_53.setVisible(true);lyr_S32_54.setVisible(true);lyr_S32LOW_55.setVisible(true);lyr_S33_56.setVisible(true);lyr_S33LOW_57.setVisible(true);lyr_S33UP_58.setVisible(true);lyr_S34_59.setVisible(true);lyr_S34LOW_60.setVisible(true);lyr_S34UP_61.setVisible(true);lyr_S35_62.setVisible(true);lyr_S35B_63.setVisible(true);lyr_S35UP_64.setVisible(true);lyr_S36_65.setVisible(true);lyr_S37_66.setVisible(true);lyr_S38_67.setVisible(true);lyr_S39_68.setVisible(true);lyr_S40_69.setVisible(true);lyr_S41_70.setVisible(true);lyr_S42_71.setVisible(true);lyr_N2_72.setVisible(true);lyr_N3_73.setVisible(true);lyr_N4_74.setVisible(true);lyr_N5_75.setVisible(true);lyr_N6_76.setVisible(true);lyr_N7_77.setVisible(true);lyr_N7B_78.setVisible(true);lyr_N8_79.setVisible(true);lyr_N8B_80.setVisible(true);lyr_N9_81.setVisible(true);lyr_N10_82.setVisible(true);lyr_N11_83.setVisible(true);lyr_N12_84.setVisible(true);lyr_N13_85.setVisible(true);lyr_N14_86.setVisible(true);lyr_N15_87.setVisible(true);lyr_N16_88.setVisible(true);lyr_N17_89.setVisible(true);lyr_N17B_90.setVisible(true);lyr_N18_91.setVisible(true);lyr_N19_92.setVisible(true);lyr_N20_93.setVisible(true);lyr_N20B_94.setVisible(true);lyr_N21B_95.setVisible(true);lyr_N21_96.setVisible(true);lyr_N23UP_97.setVisible(true);lyr_N23LOW_98.setVisible(true);lyr_N24UP_99.setVisible(true);lyr_N25B_100.setVisible(true);lyr_N25UP_101.setVisible(true);lyr_N26_102.setVisible(true);lyr_N27_103.setVisible(true);lyr_N27SPUR_104.setVisible(true);lyr_N28_105.setVisible(true);lyr_N29_106.setVisible(true);lyr_N30_107.setVisible(true);lyr_N30B_108.setVisible(true);lyr_N31_109.setVisible(true);lyr_N31B_110.setVisible(true);lyr_N31C_111.setVisible(true);lyr_N32_112.setVisible(true);lyr_N33_113.setVisible(true);
var layersList = [lyr_Terrain_0,lyr_GoogleSatelliite_1,group_TrailObservations,group_NatureInterpretation,group_HistoricalInterpretation,group_UndevelopedObstacles,group_SouthwestTrailSegments,group_NortheastTrailSegments];
lyr_Scouting_2.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Notes': 'Notes', });
lyr_Nature_Interp_3.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', 'More Info': 'More Info', });
lyr_Historical_Interp_4.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Time Period': 'Time Period', 'Description': 'Description', 'More Info': 'More Info', });
lyr_S23__5.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Notes': 'Notes', });
lyr_railroadwalk_6.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', 'Notes': 'Notes', });
lyr_lilydale_claypit_fence_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Feature': 'Feature', 'Notes': 'Notes', });
lyr_Trail_Obstacles_8.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', 'Alternative': 'Alternative', });
lyr_Pickerel_Lake_Approach_9.set('fieldAliases', {'fid': 'fid', 'Feature': 'Feature', 'Description': 'Description', });
lyr_S1_10.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S2_11.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S3_12.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S4_13.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Orient': 'Orient', 'Segment': 'Segment', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', 'Notable Features': 'Notable Features', 'Quality': 'Quality', });
lyr_S5_14.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Orient': 'Orient', 'Segment': 'Segment', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', 'Notable Features': 'Notable Features', 'Quality': 'Quality', });
lyr_S6_15.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S7_16.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S8_17.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S9_18.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S10_19.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S10B_20.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S11_21.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S12_22.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S125_23.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S13_24.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S13B_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_S14_26.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S15_27.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S15B_28.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S16_29.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S17_30.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S17B_31.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S17C_32.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S18_33.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S19_34.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S19BSPUR1_35.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S19BSPUR2_36.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S20_37.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S21_38.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S22_39.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S23_40.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S23B_41.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S23BSPUR_42.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S24_43.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S25_44.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S25LS_45.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S26LS_46.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S27_47.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Orient': 'Orient', 'Segment': 'Segment', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S28LS_48.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S30_49.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S30B_50.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S31_51.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S31B_52.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S31LOW_53.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S32_54.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S32LOW_55.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S33_56.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S33LOW_57.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S33UP_58.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S34_59.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S34LOW_60.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S34UP_61.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S35_62.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S35B_63.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S35UP_64.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S36_65.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S37_66.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S38_67.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S39_68.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S40_69.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S41_70.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_S42_71.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N2_72.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N3_73.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N4_74.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N5_75.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N6_76.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N7_77.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N7B_78.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N8_79.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N8B_80.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N9_81.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N10_82.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N11_83.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N12_84.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N13_85.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N14_86.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N15_87.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N16_88.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N17_89.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N17B_90.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N18_91.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N19_92.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N20_93.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N20B_94.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N21B_95.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N21_96.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N23UP_97.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N23LOW_98.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N24UP_99.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N25B_100.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N25UP_101.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N26_102.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N27_103.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N27SPUR_104.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N28_105.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N29_106.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N30_107.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N30B_108.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N31_109.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N31B_110.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N31C_111.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N32_112.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_N33_113.set('fieldAliases', {'fid': 'fid', 'SID': 'SID', 'Segment': 'Segment', 'Orient': 'Orient', 'Terrain': 'Terrain', 'Notes': 'Notes', 'Notable Features': 'Notable Features', 'Ownership': 'Ownership', 'Distance': 'Distance', 'Quality': 'Quality', 'Terrain_Quality': 'Terrain_Quality', 'Vegetation_Quality': 'Vegetation_Quality', });
lyr_Scouting_2.set('fieldImages', {'fid': 'TextEdit', 'Feature': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Nature_Interp_3.set('fieldImages', {'fid': '', 'Feature': '', 'Description': '', 'More Info': '', });
lyr_Historical_Interp_4.set('fieldImages', {'fid': '', 'Feature': '', 'Time Period': '', 'Description': '', 'More Info': '', });
lyr_S23__5.set('fieldImages', {'fid': '', 'Feature': '', 'Notes': '', });
lyr_railroadwalk_6.set('fieldImages', {'fid': '', 'Feature': '', 'Description': '', 'Notes': '', });
lyr_lilydale_claypit_fence_7.set('fieldImages', {'fid': '', 'id': '', 'Feature': '', 'Notes': '', });
lyr_Trail_Obstacles_8.set('fieldImages', {'fid': '', 'Feature': '', 'Description': '', 'Alternative': '', });
lyr_Pickerel_Lake_Approach_9.set('fieldImages', {'fid': 'TextEdit', 'Feature': 'TextEdit', 'Description': 'TextEdit', });
lyr_S1_10.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S2_11.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S3_12.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S4_13.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Orient': 'TextEdit', 'Segment': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', 'Notable Features': 'TextEdit', 'Quality': 'TextEdit', });
lyr_S5_14.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Orient': 'TextEdit', 'Segment': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', 'Notable Features': 'TextEdit', 'Quality': 'TextEdit', });
lyr_S6_15.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S7_16.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S8_17.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S9_18.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S10_19.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S10B_20.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S11_21.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S12_22.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S125_23.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S13_24.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S13B_25.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_S14_26.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S15_27.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S15B_28.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S16_29.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S17_30.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S17B_31.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S17C_32.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S18_33.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S19_34.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S19BSPUR1_35.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S19BSPUR2_36.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S20_37.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S21_38.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S22_39.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S23_40.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S23B_41.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S23BSPUR_42.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S24_43.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S25_44.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S25LS_45.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S26LS_46.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S27_47.set('fieldImages', {'fid': '', 'SID': '', 'Orient': '', 'Segment': '', 'Terrain': '', 'Notes': '', 'Ownership': '', 'Distance': '', 'Terrain_Quality': '', 'Vegetation_Quality': '', });
lyr_S28LS_48.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S30_49.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S30B_50.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S31_51.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S31B_52.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S31LOW_53.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S32_54.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S32LOW_55.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S33_56.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S33LOW_57.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S33UP_58.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S34_59.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S34LOW_60.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S34UP_61.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S35_62.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S35B_63.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S35UP_64.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S36_65.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S37_66.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S38_67.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S39_68.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S40_69.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S41_70.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_S42_71.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N2_72.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N3_73.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N4_74.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N5_75.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N6_76.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N7_77.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N7B_78.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N8_79.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N8B_80.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N9_81.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N10_82.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N11_83.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N12_84.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N13_85.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N14_86.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N15_87.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N16_88.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N17_89.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N17B_90.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N18_91.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N19_92.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N20_93.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N20B_94.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N21B_95.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N21_96.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N23UP_97.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N23LOW_98.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N24UP_99.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N25B_100.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N25UP_101.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N26_102.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N27_103.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N27SPUR_104.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N28_105.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N29_106.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N30_107.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N30B_108.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N31_109.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N31B_110.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N31C_111.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N32_112.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_N33_113.set('fieldImages', {'fid': 'TextEdit', 'SID': 'TextEdit', 'Segment': 'TextEdit', 'Orient': 'TextEdit', 'Terrain': 'TextEdit', 'Notes': 'TextEdit', 'Notable Features': 'TextEdit', 'Ownership': 'TextEdit', 'Distance': 'TextEdit', 'Quality': 'TextEdit', 'Terrain_Quality': 'TextEdit', 'Vegetation_Quality': 'TextEdit', });
lyr_Scouting_2.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Notes': 'no label', });
lyr_Nature_Interp_3.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Description': 'no label', 'More Info': 'no label', });
lyr_Historical_Interp_4.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Time Period': 'no label', 'Description': 'no label', 'More Info': 'no label', });
lyr_S23__5.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Notes': 'no label', });
lyr_railroadwalk_6.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Description': 'no label', 'Notes': 'no label', });
lyr_lilydale_claypit_fence_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Feature': 'no label', 'Notes': 'no label', });
lyr_Trail_Obstacles_8.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Description': 'no label', 'Alternative': 'no label', });
lyr_Pickerel_Lake_Approach_9.set('fieldLabels', {'fid': 'no label', 'Feature': 'no label', 'Description': 'no label', });
lyr_S1_10.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S2_11.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S3_12.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S4_13.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Orient': 'no label', 'Segment': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', 'Notable Features': 'no label', 'Quality': 'no label', });
lyr_S5_14.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Orient': 'no label', 'Segment': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', 'Notable Features': 'no label', 'Quality': 'no label', });
lyr_S6_15.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S7_16.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S8_17.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S9_18.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S10_19.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S10B_20.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S11_21.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S12_22.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S125_23.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S13_24.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S13B_25.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_S14_26.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S15_27.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S15B_28.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S16_29.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S17_30.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S17B_31.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S17C_32.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S18_33.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S19_34.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S19BSPUR1_35.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S19BSPUR2_36.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S20_37.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S21_38.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S22_39.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S23_40.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S23B_41.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S23BSPUR_42.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S24_43.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S25_44.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S25LS_45.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S26LS_46.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S27_47.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Orient': 'no label', 'Segment': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S28LS_48.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S30_49.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S30B_50.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S31_51.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S31B_52.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S31LOW_53.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S32_54.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S32LOW_55.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S33_56.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S33LOW_57.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S33UP_58.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S34_59.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S34LOW_60.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S34UP_61.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S35_62.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S35B_63.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S35UP_64.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S36_65.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S37_66.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S38_67.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S39_68.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S40_69.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S41_70.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_S42_71.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N2_72.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N3_73.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N4_74.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N5_75.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N6_76.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N7_77.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N7B_78.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N8_79.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N8B_80.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N9_81.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N10_82.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N11_83.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N12_84.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N13_85.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N14_86.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N15_87.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N16_88.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N17_89.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N17B_90.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N18_91.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N19_92.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N20_93.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N20B_94.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N21B_95.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N21_96.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N23UP_97.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N23LOW_98.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N24UP_99.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N25B_100.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N25UP_101.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N26_102.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N27_103.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N27SPUR_104.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N28_105.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N29_106.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N30_107.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N30B_108.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N31_109.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N31B_110.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N31C_111.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N32_112.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'no label', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N33_113.set('fieldLabels', {'fid': 'no label', 'SID': 'no label', 'Segment': 'inline label - always visible', 'Orient': 'no label', 'Terrain': 'no label', 'Notes': 'no label', 'Notable Features': 'no label', 'Ownership': 'no label', 'Distance': 'no label', 'Quality': 'no label', 'Terrain_Quality': 'no label', 'Vegetation_Quality': 'no label', });
lyr_N33_113.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});