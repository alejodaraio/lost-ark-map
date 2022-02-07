import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWorldZone } from "../interfaces/IWorld";

export const getZone = createAsyncThunk('zone/getZone', async (zone: IWorldZone) => {
    return await fetch(`https://lostarkmap.s3.us-west-1.amazonaws.com/map/data/zones/us/${zone.id}.json`)
        .then(response => response.json())
        .then(response => {
            return {
                id: zone.id,
                name: zone.name,
                continent: zone.continent,
                markers: response.markers
            }
        })
})