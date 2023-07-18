import { Direction } from "./direction";
import { Distance } from "./distance";
import { Point } from "./point";
import {Writer} from "./writer";

export interface LiteraryRoute {
    id: number,
    name: string,
    city: string,
    writer: Writer[],
    points: Point[],
    directions: google.maps.DirectionsRequest
    distance: Distance
}