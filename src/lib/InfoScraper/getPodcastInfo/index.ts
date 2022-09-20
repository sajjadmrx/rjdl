import PodcastInfoScraper from "./podcastInfoScraper";

export const getPodcastInfoFromDOM = (document: Document) => {
    const infoScraper = new PodcastInfoScraper(document);
    return {
        title: infoScraper.getTitle(),
        artist: infoScraper.getArtist(),
        likes: infoScraper.getLikes(),
        plays: infoScraper.getPlays(),
        date: infoScraper.getDate(),
        artwork: infoScraper.getArtwork(),
        id: infoScraper.getId(),
        relatedTracks: infoScraper.getRelatedTracks(),
    };
};
