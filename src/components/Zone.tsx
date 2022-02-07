import { latLngBounds } from "leaflet";
import React, { Fragment } from "react";
import { TileLayer, useMap } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeZone, selectZone } from "../store/slices/Zone";
import Markers from "./Markers";

export default () => {

    const dispatch = useAppDispatch()
    const zone = useAppSelector(selectZone)
    const map = useMap()
    const minZoom = 1
    const maxZoom = 3
    const southWest = map.unproject([0, 2048], maxZoom)
    const northEast = map.unproject([2048, 0], maxZoom)
    const bounds = latLngBounds(southWest, northEast)

    map.setMaxBounds(bounds)
    map.setMinZoom(minZoom)
    map.setMaxZoom(maxZoom)
    map.setView([-100, 100], minZoom)

    map.on('contextmenu', () => {
        dispatch(closeZone())
    });

    return (
        <Fragment>
            <TileLayer
                url={`https://lostarkmap.s3.us-west-1.amazonaws.com/map/tiles/zones/${zone.id}/{z}_{x}_{y}.png`}
                noWrap={true}
                minZoom={minZoom}
                maxZoom={maxZoom}
                bounds={bounds}
            />
            <Markers {...zone.markers} />
        </Fragment>
    )
}

