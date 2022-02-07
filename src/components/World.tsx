import { DivIcon, divIcon, LatLng, latLngBounds } from "leaflet";
import React, { Fragment, useEffect } from "react";
import { Marker, TileLayer, useMap } from "react-leaflet";
import { getWorld } from "../api/World";
import { getZone } from "../api/Zone";
import { IWorldZone } from "../interfaces/IWorld";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectWorld } from "../store/slices/World";
import Markers from "./Markers";


export default () => {

    const dispatch = useAppDispatch();
    const world = useAppSelector(selectWorld)
    const map = useMap()
    const minZoom = 3
    const maxZoom = 5
    const southWest = map.unproject([1, 8191], maxZoom)
    const northEast = map.unproject([8191, 1], maxZoom)
    const bounds = latLngBounds(southWest, northEast)

    map.setMaxBounds(bounds)
    map.setMinZoom(minZoom)
    map.setMaxZoom(maxZoom)
    map.setView([-100, 100], minZoom)

    useEffect(() => {
        dispatch(getWorld())
    }, [])

    const Zones = (worldZone: Array<IWorldZone> = null) => {
        return <Fragment>
            {Object.keys(worldZone).map((key, index) => {
                const zone = worldZone[index];
                if (zone.isDungeon == 0 && zone.location) {
                    const position = new LatLng(zone.location[0], zone.location[1]);
                    return <Marker
                        icon={ZoneIcon(zone)}
                        key={zone.id + zone.name}
                        position={position}
                        eventHandlers={
                            {
                                click: () => {
                                    dispatch(getZone(zone))
                                }
                            }
                        }
                    />
                }
                return null
            })}
        </Fragment>
    }

    const ZoneIcon = (zone: IWorldZone): DivIcon => {
        switch (zone.markerType) {
            case 1:
                return divIcon({
                    className: 'map-marker-zone',
                    iconSize: [60, 60],
                    html: `<img src="https://lostarkmap.s3.us-west-1.amazonaws.com/map/zones/${zone.id}.png"/>
                          <div>${zone.name}</div>`
                });
            case 2:
                return divIcon({
                    className: 'map-marker-island',
                    iconSize: [16, 16],
                    html: `<img src="https://lostarkmap.s3.us-west-1.amazonaws.com/map/assets/island.png"/>
                              <div>${zone.name}</div>`
                });
            case 3:
                return divIcon({
                    className: 'map-marker-island-pvp',
                    iconSize: [16, 16],
                    html: `<img src="https://lostarkmap.s3.us-west-1.amazonaws.com/map/assets/islandPvP.png"/>
                              <div>${zone.name}</div>`
                });
        }
    }

    return (
        <Fragment>
            <TileLayer
                url="https://lostarkmap.s3.us-west-1.amazonaws.com/map/tiles/overworld/{z}_{x}_{y}.jpg"
                noWrap={true}
                minZoom={minZoom}
                maxZoom={maxZoom}
                bounds={bounds}
            />
            {(world && world.zones) && <Zones {...world.zones} />}
            {(world && world.markers) && <Markers {...world.markers} />}
        </Fragment>
    )
}

