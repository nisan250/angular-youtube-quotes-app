export interface Song {
    id: number;
    title: string;
    youtubeId: string;
    quotes: Quote[];
}

export class Quote {
    text: string;
    offset: number;
}
