import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import Group from 'ol/layer/Group';
import View from 'ol/View';
import {OSM } from 'ol/source'; // TileArcGISRest
import XYZ from 'ol/source/XYZ.js';
import { MousePosition, ScaleLine, ZoomSlider, Rotate, OverviewMap, FullScreen, Attribution}  from 'ol/Control';

import LayerSwitcher from 'ol-layerswitcher';

//  Делал на скорую руку, чтобы посмотреть по-быстрому - потому ничего  не оптимизировал...


const layers = [

    new Group({
        title: 'Base map',
        layers: [
            new TileLayer({
                title: 'Open Street Map',
                source: new OSM(),
                type: 'base',
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    // new TileLayer({
    //     source: new OSM(),
    //     name: 'Карта OSM',
    //     crossOrigin: 'anonymous',
    // }),

    new Group({
        title: 'Мегафон 2G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://coverage-map.megafon.ru/2g/{z}/{x}/{y}.png'
                }),
                name: 'Мегафон 2G', 
                crossOrigin: 'anonymous',
            }),

        ]
    }),
    new Group({
        title: 'Мегафон 3G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://coverage-map.megafon.ru/3g/{z}/{x}/{y}.png'
                }),
                name: 'Мегафон 3G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),

    new Group({
        title: 'Мегафон 4G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://coverage-map.megafon.ru/lte/{z}/{x}/{y}.png'
                }),
                name: 'Мегафон 4G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    
    new Group({
        title: 'ТЕЛЕ2 2G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://smolensk.tele2.ru/maps/_2g/{z}/{x}/{y}.png'
                }),
                name: 'ТЕЛЕ2 2G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    
    new Group({
        title: 'ТЕЛЕ2 3G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://smolensk.tele2.ru/maps/_3g/{z}/{x}/{y}.png'
                }),
                name: 'ТЕЛЕ2 3G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),

    new Group({
        title: 'ТЕЛЕ2 4G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://smolensk.tele2.ru/maps/_4g/{z}/{x}/{y}.png'
                }),
                name: 'ТЕЛЕ2 4G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),

    new Group({
        title: 'Ростелеком 2G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://rt-static-cdn.rt.ru/maps/2g/{z}/{x}/{y}.png'
                }),
                name: 'Ростелеком 2G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    
    new Group({
        title: 'Ростелеком 3G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://rt-static-cdn.rt.ru/maps/3g/{z}/{x}/{y}.png'
                }),
                name: 'Ростелеком 3G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    
    new Group({
        title: 'Ростелеком 4G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://rt-static-cdn.rt.ru/maps/4g/{z}/{x}/{y}.png'
                }),
                name: 'Ростелеком 4G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),

    new Group({
        title: 'Билайн 2G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://static.beeline.ru/upload/tiles/2G/current/{z}/{x}/{y}.png'
                }),
                name: 'Билайн 2G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),

    new Group({
        title: 'Билайн 3G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://static.beeline.ru/upload/tiles/3G/current/{z}/{x}/{y}.png'
                }),
                name: 'Билайн 3G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),

    new Group({
        title: 'Билайн 4G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://static.beeline.ru/upload/tiles/4G/current/{z}/{x}/{y}.png'
                }),
                name: 'Билайн 4G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),


    new Group({
        title: 'MTC 2G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://tiles.qsupport.mts.ru/g2_New/{z}/{x}/{y}.png'
                }),
                name: 'Билайн 4G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),


    new Group({
        title: 'MTC 3G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://tiles.qsupport.mts.ru/g3_New/{z}/{x}/{y}.png'
                }),
                name: 'Билайн 3G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    new Group({
        title: 'MTC 4G',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://tiles.qsupport.mts.ru/lte_New/{z}/{x}/{y}.png'
                }),
                name: 'Билайн 4G', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),
    new Group({
        title: 'MTC LTE',
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'https://tiles.qsupport.mts.ru/lte_New/{z}/{x}/{y}.png'
                }),
                name: 'Билайн LTE', 
                crossOrigin: 'anonymous',
            }),
        ]
    }),


    // new Group({
    //     title: '',
    //     layers: [
    //     ]
    // }),

];
const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        center: [8997148, 9569099],
        zoom: 4,
        projection: 'EPSG:3857',
    }),
});

map.addControl(new MousePosition());
map.addControl(new ScaleLine());
map.addControl(new ZoomSlider());
map.addControl(new Rotate());
map.addControl(new OverviewMap());
map.addControl(new FullScreen());
map.addControl(new Attribution());

const layerSwitcher = new LayerSwitcher({
    // label: 'Layers',
    reverse: true,
    groupSelectStyle: 'group'
});

map.addControl(layerSwitcher);
layerSwitcher.showPanel()

