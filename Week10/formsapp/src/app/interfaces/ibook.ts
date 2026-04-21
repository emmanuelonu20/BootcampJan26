import { Igenre } from "./igenre";

export interface Ibook {
    id: number;
    title: string;
    author: string;
    author_email: string;
    genreId: number;
    genre: Igenre;
}
