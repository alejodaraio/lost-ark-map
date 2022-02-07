import IMarker from "./IMarker"

export default interface IZone {
    id: string
    name: string
    continent: string
    markers?: Array<IMarker>
}