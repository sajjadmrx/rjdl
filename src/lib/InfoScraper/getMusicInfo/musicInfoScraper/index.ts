import { Track } from "../..";
import { PageScraper, TrackInfoScraper } from "../../utils";

class MusicInfoScraper {
    private pageScraper: PageScraper;

    constructor(public document: Document) {
        this.pageScraper = new PageScraper(document);
    }

    public getArtist = (): string => this.pageScraper.getArtist();

    public getTitle = (): string => this.pageScraper.getTitle();

    public getLikes = (): number => this.pageScraper.getLikes();

    public getPlays = (): number => this.pageScraper.getPlays();

    public getId = (): string => this.pageScraper.getMusicID();

    public getDate = (): Date => this.pageScraper.getMusicDate();

    public getVideoVersion = (): string | null =>
        this.pageScraper.getAltVersion();

    public getArtwork = (): string =>
        this.document.querySelector(".artwork img")!.getAttribute("src")!;

    public getRelatedTracks = (): Track[] => {
        const tracks = this.getTrackElementScrapers();
        return this.getTrackInfoFromTrackScraper(tracks);
    };

    private getTrackElementScrapers = () => {
        const trackContainers = this.getTrackElements();
        return this.convertTrackElementsToScraper(trackContainers);
    };

    private getTrackElements = () =>
        this.document
            .querySelector(".sidePanel .listView")!
            .querySelectorAll("li")!;

    private convertTrackElementsToScraper = (
        elements: NodeListOf<HTMLLIElement>
    ): TrackInfoScraper[] => {
        const scrapers: TrackInfoScraper[] = [];
        elements.forEach((e) => scrapers.push(new TrackInfoScraper(e)));
        return scrapers;
    };

    private getTrackInfoFromTrackScraper = (
        tracks: TrackInfoScraper[]
    ): Track[] => {
        const relatedTracks = tracks.filter((track) => !track.isPlayingNow);
        return relatedTracks.map((track) => {
            return {
                title: track.getTitle(),
                artist: track.getArtist(),
                id: track.getId(),
                artwork: track.getArtwork(),
                url: track.getUrl(),
            };
        });
    };
}

export default MusicInfoScraper;
