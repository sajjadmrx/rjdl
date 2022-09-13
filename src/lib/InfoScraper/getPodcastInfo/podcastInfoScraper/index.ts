import { PageScraper } from "../../utils";

class PodcastInfoScraper {
    private pageScraper: PageScraper;

    constructor(public document: Document) {
        this.pageScraper = new PageScraper(document);
    }

    public getId = (): string => this.pageScraper.getPodcastID();

    // Artist and title fields are reversed in podcast page
    public getArtist = (): string => this.pageScraper.getTitle();

    public getTitle = (): string => this.pageScraper.getArtist();

    public getDate = (): Date => this.pageScraper.getPodcastDate();

    public getArtwork = (): string =>
        this.document.querySelector(".artwork img")!.getAttribute("src")!;

    private getIdFromArtworkURL = (artworkURL: string): string => {
        const idSelectorRegex = /(?<=static\/podcasts\/)[^\/]+(?=\/)/g;
        return artworkURL.match(idSelectorRegex)![0];
    };
}

export default PodcastInfoScraper;
