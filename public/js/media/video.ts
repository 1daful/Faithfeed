import { YoutubeApi } from "../api/video/youtube";
import { IMedia } from "./IMedia";
export class VideoMedia implements IMedia{
    related: [];
    recent: [];
    series: [];
    videos = [];
    recentTotal;
    postDate;
    all;
    youtube = new YoutubeApi();

    /**
     * Use the video api for all recent videos.
     */
    getRecent(){
    }

    /** 
     * Use search api to get videos related to post base on tags.
    */
    getRelated(postTags): [] {
        return this.youtube.getRelated(postTags);
    }

    /**
     * use search api to get list of series videos/episodes
     */
    getSeries(): [] {
        this.series = this.youtube.getSeries();
        return this.series;
    }

    /**
     * Returns all videos.
     */
    getAll(): []{
        return this.youtube.getAll();
    }

    getPopular(): []{
        return this.youtube.getPopular();
    }
}

