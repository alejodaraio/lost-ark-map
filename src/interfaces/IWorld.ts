import IMarker from "./IMarker"

export default interface IWorld {
    name: string
    continent: string
    zones?: Array<IWorldZone>
    markers?: Array<IMarker>
}

export interface IWorldZone {
    id: string
    name: string
    continent: string
    location: Array<number>
    isDungeon: number
    markerType: number
    guidePath: string
}