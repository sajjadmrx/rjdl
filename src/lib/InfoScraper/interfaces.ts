interface MusicAndVideoCommonInfo {
    id: string;
    title: string;
    artist: string;
    likes: number;
    plays: number;
    date: Date;
    url: string;
}
export interface MusicInfo extends MusicAndVideoCommonInfo {
    artwork: string;
    relatedTracks: Track[];
    video: string | null;
}
export interface VideoInfo extends MusicAndVideoCommonInfo {
    thumbnail: string;
    song: string | null;
}

export interface Track {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    url: string;
}

export interface AlbumTrack extends Track {
    index: number;
}

export interface PlaylistInfo {
    id: string;
    title: string;
    creator: string;
    followers: number;
    artwork: string;
    tracks: Track[];
    url: string;
}

export interface AlbumInfo {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    tracks: AlbumTrack[];
    url: string;
}

export interface PodcastInfo extends MusicAndVideoCommonInfo {
    artwork: string;
}

/**
 * Music details
 *
 * @interface MusicInfo
 * @prop {string} id
 * @prop {string} title
 * @prop {string} artist
 * @prop {string} artwork
 * @prop {number} likes
 * @prop {number} plays
 * @prop {Date} date  When the music was added to Radio javan
 * @prop {string} url
 * @prop {string|null} video Music video link if there is any
 */

/**
 * Podcast details
 *
 * @interface PodcastInfo
 * @prop {string} id
 * @prop {string} title
 * @prop {string} artist
 * @prop {string} artwork
 * @prop {number} likes
 * @prop {number} plays
 * @prop {Date} date  When the music was added to Radio javan
 * @prop {string} url
 */

/**
 * Video details
 *
 * @interface VideoInfo
 * @prop {string} id
 * @prop {string} title
 * @prop {string} artist
 * @prop {string} thumbnail
 * @prop {number} likes
 * @prop {number} plays
 * @prop {Date} date When the video was added to Radio javan
 * @prop {string} url
 * @prop {string|null} song Song link if there is any
 */

/**
 * Track details
 *
 * @interface Track
 * @prop {string} id
 * @prop {string} title
 * @prop {string} artist
 * @prop {string} artwork
 * @prop {string} url
 */

/**
 * Album Track details
 *
 * @interface AlbumTrack
 * @prop {string} id
 * @prop {string} title
 * @prop {string} artist
 * @prop {string} artwork
 * @prop {number} index Track index in the album
 * @prop {string} url
 */

/**
 * Playlist details
 *
 * @interface PlaylistInfo
 * @prop {string} id
 * @prop {string} title
 * @prop {string} creator
 * @prop {number} followers
 * @prop {string} artwork
 * @prop {Track[]} tracks
 * @prop {string} url
 */

/**
 * Album details
 *
 * @interface AlbumInfo
 * @prop {string} id
 * @prop {string} title
 * @prop {string} artist
 * @prop {string} artwork
 * @prop {AlbumTrack[]} tracks
 * @prop {string} url
 */
