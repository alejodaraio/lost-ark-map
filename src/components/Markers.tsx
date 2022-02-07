import { divIcon, LatLng, PointExpression } from "leaflet";
import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import IMarker, { IMarkerData } from "../interfaces/IMarker";

export default (markers: Array<IMarker>) => {
    return <Fragment>
        {Object.keys(markers).map((key, index) => {
            const marker: IMarker = markers[index]
            return marker.data.map(data => {
                const position = new LatLng(data.coordinates[0], data.coordinates[1]);
                return allowedMarkers(marker.markerType) && <Marker key={data.id + data.popupTitle} icon={MarkerIcon(marker, data)} position={position} />
            })
        })}
    </Fragment>
}

const allowedMarkers = (marker: string) => {
    const markers = [
        'Mokoko',
        'OGate',
        'EMarine',
        'Ghostship',
        'HStory',
        'AStory',
        'Food',
        'Ingredient',
        'TMerchant',
        'Minuet',
        'Monster',
        'SPassage',
        'Viewpoint',
        'Resonance',
        'FBoss'
    ];

    return markers.includes(marker);
}

const MarkerIcon = (marker: IMarker, data: IMarkerData) => {
    switch (marker.markerType) {
        case "Mokoko":
            return Icon('mokoko', [18, 18], data.popupTitle);
        case "OGate":
            return Icon('ogate', [16, 16], data.popupTitle);
        case "EMarine":
            return Icon('emarine', [18, 18], data.popupTitle);
        case "Ghostship":
            return Icon('ghost', [16, 16], data.popupTitle);
        case "SMerchant":
            return Icon('smerchant', [16, 16], data.popupTitle);
        case "Affinity":
            return Icon('affinity', [18, 18], data.popupTitle);
        case "AStory":
            return Icon('astory', [18, 18], data.popupTitle, 'astory');
        case "HStory":
            return Icon('hstory', [18, 18], data.popupTitle, 'story');
        case "Food":
            return Icon('food', [18, 18], data.popupTitle);
        case "Ingredient":
            return Icon('ingredient', [18, 18], data.popupTitle, 'ingredient');
        case "TMerchant":
            return Icon('merchant', [18, 18], data.popupTitle);
        case "Minuet":
            return Icon('minuet', [18, 18], data.popupTitle);
        case "Monster":
            return Icon('monster', [18, 18], data.popupTitle);
        case "SPassage":
            return Icon('spassage', [16, 16], data.popupTitle);
        case "Viewpoint":
            return Icon('viewpoint', [16, 16], data.popupTitle);
        case "Resonance":
            return Icon('resonance', [18, 18], data.popupTitle);
        case "FBoss":
            return Icon('boss', [18, 18], data.popupTitle);
    }
}

const Icon = (icon: string, size: PointExpression, label: string, iconType: string = 'icon') => {
    return divIcon({
        className: 'map-marker-' + iconType,
        iconSize: size,
        html: `<img src="https://lostarkmap.s3.us-west-1.amazonaws.com/map/assets/${icon}.png"/>
                <div>${label}</div>`
    });
}