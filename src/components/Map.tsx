import { CRS } from "leaflet";
import React from "react";
import { MapContainer } from 'react-leaflet';
import LayerManager from "./LayerManager";

export default () => {
    return (
        <MapContainer
            id="map"
            crs={CRS.Simple}
            zoomControl={false}
            zoomDelta={0}
            zoomSnap={0.25}
        >
            <LayerManager />
        </MapContainer>
    )
}