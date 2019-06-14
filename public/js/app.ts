import { Vue } from "./vue";
import { VideoMedia } from "./media/video";
import { BookMedia } from "./media/books";
import { SongMedia } from "./media/music";
import { MediaContent } from "./media/Media";
import { IMedia } from "./media/IMedia";

class App {
    mediaContent: IMedia;
    videoContent: IMedia;
    bookContent: IMedia;
    songContent: IMedia;
    max: number;

    recentMedia: {};
    relatedMedia: {};
    popularMedia: {};
    seriesMedia: {};
    allMedia: {};
    constructor(){
        this.mediaContent = new MediaContent();
        this.videoContent = new VideoMedia();
        this.songContent = new SongMedia();
        this.bookContent = new BookMedia();
    }
    ;
    
    vm = new Vue({
    el: 'media',
    mounted: function () {
        this.recentMedia = this.mediaContent.getMedia(this.filter, );
        this.loading = false;
        this.error = this.media.error;
    },
    components: {
        'mediacomponent': this.mediaComponent
    }
    
    });
}