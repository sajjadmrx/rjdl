import { MusicAndVideoScraper } from "../../utils";

class MusicInfoScraper extends MusicAndVideoScraper {
    constructor(public document: Document) {
        super(document);
    }

    public getId = (): string => {
        const { title, artist } = this.getTitleAndArtist();
        const id = this.getIdFromCredentials(title, artist);
        return id;
    };

    public getDate = (): Date =>
        new Date(
            this.document
                .querySelector(".dateAdded")!
                .innerHTML.split("Date Added: ")[1]
        );

    public getVideoVersion = (): string | null => this.getAltVersion();

    public getArtwork = (): string =>
        this.document.querySelector(".artwork img")!.getAttribute("src")!;

    private getIdFromArtworkURL = (artworkURL: string): string => {
        const idSelectorRegex = /(?<=static\/mp3\/)[^\/]+(?=\/)/g;
        return artworkURL.match(idSelectorRegex)![0];
    };

    private getIdFromCredentials = (title: string, artist: string) => {
        const artistAndName = artist + " " + title;
        let id = artistAndName
            .replace(/[^a-zA-Z\d\s\(\)]/g, "")
            .replace(/\s+/g, "-");
        return id;
    };
}

export default MusicInfoScraper;
