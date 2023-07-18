import { Image } from "./image"

export interface Point {
    id: number,
    title: string,
    text: string,
    sequence_number: number,
    location: any,
    speech_file: string,
    route: number,
    images: Image[]
}