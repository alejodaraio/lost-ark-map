export default interface IMarker {
    markerType: string
    enabled: boolean
    allowSidebar: boolean
    layerID: string
    data: Array<IMarkerData>
}

export interface IMarkerData {
    coordinates: Array<number>
    id: string
    popupTitle: string
    rapportId: string
    tooltip: string
    tooltipDirection: string
}