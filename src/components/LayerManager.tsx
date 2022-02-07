import React, { Fragment, useEffect } from "react";
import { getWorld } from "../api/World";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectWorld } from "../store/slices/World";
import { selectZone } from "../store/slices/Zone";
import World from "./World";
import Zone from "./Zone";

export default () => {
    const zone = useAppSelector(selectZone)
    const world = useAppSelector(selectWorld)
    const dispatch = useAppDispatch()


    return (
        <Fragment>
            { (zone && zone !== null) ? <Zone /> : <World />}
        </Fragment>
    )
}