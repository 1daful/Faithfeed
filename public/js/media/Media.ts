import { VideoMedia } from './video'
import { SongMedia } from "./music";
import { BookMedia } from "./books";
import { IMedia } from './IMedia';
export class MediaContent implements IMedia{
    constructor(){
        this.videoMedia =  new VideoMedia();
        this.songMedia = new SongMedia();
        this.bookMedia = new BookMedia();
    }
    series: IMedia[];
    all: IMedia[];
    related: IMedia[];
    videoMedia;
    songMedia;
    bookMedia;

    //get popular media content
    getPopular(){

    }

    getRecent(){}

    //returns series of media such as video episode, podcast etc on a topic or tags
    getSeries(max: number){
        let videos = this.videoMedia.getSeriesVideos();
        let songs = this.songMedia.getSeriesSongs();
        let books = this.bookMedia.getSeriesBooks();
        this.series = this.series.concat(videos, songs,books);
        
        //shuffle the collection and return specified number of items
        this.series =this. series.copyWithin(0, 0, max - 1);
        return this.series;
    }

    //gets related media on a post tags or category
    getRelated(postTags, max: number){
        let videos = this.videoMedia.getRelatedVideos(postTags);
        let songs = this.songMedia.getRelatedSongs(postTags);
        let books = this.bookMedia.getRelatedBooks(postTags);
        this.related = this.related.concat(videos, songs, books);

        //shuffle the collection and return specified number of itrms
        this.related = this.related.copyWithin(0, 0, max - 1);
        return this.related;
    }

    //get all media
    getAll(number){
        let videos = this.videoMedia.getVideos();
        let songs = this.songMedia.getSongs();
        let books = this.bookMedia.getBooks();
        this.all = this.all.concat(videos, songs, books);

        //shuffle the collection and return specified number of itrms
        this.all = this.all.copyWithin(0, 0, number - 1);
        return this.all;
    }

     /**
      * Get media whose type is from the filter provided param.
      * @param filter The type of media to get.
      * @param max The maximum number of media to retrieve.
      * @param postTags The tags in a post to be used for related media
      */
    getMedia(filter, max: number, ...postTags: []){
        let media
        switch (filter) {
            case 'recent':
                media = this.getRecent();
                break;
            case 'related':
                media = this.getRelated(postTags, max);
                break;
            case 'popular':
                media = this.getPopular();
                break;
            case 'series':
                media = this.getSeries(max);
                break;
            case 'all':
                media = this.getAll(max);
                break;
            default:
            console.log("provided parameter does not match any filter")
                break;
        }
        return media;
    }
}
