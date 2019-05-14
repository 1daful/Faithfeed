class MediaContent {
    constructor(){
        this.videoMedia =  new VideoMedia();
        this.songMedia = new SongMedia();
        this.bookMedia = new BookMedia();
    }
    mediaSeries: string[];
    allMedia = [];
    relatedMedia = [];
    videoMedia;
    songMedia;
    bookMedia;
    //user = new Parse.User();
    userCollection: {
        user,
        collection: MediaContent[]
    };
    repository: IRepository;

    //get user media collection
    getCollection(authUser){
        if(authUser.verified){
        this.userCollection = authUser.collection;
        return this.userCollection.collection;
        }
    }

    //save user collection to database
    saveCollection(authUser, item: MediaContent){
        if(authUser.verified){
            this.userCollection.user = authUser;
            this.userCollection.collection.push(item);
            this.repository.save(this.userCollection.collection);
        }
    }

    //get popular media content
    getPopular(){

    }

    //returns series of media such as video episode, podcast etc on a topic or tags
    getSeries(max: number){
        let videos = this.videoMedia.getSeriesVideos();
        let songs = this.songMedia.getSeriesSongs();
        let books = this.bookMedia.getSeriesBooks();
        this.mediaSeries = this.mediaSeries.concat(videos, songs,books);
        
        //shuffle the collection and return specified number of items
        this.mediaSeries =this. mediaSeries.copyWithin(0, 0, max - 1);
        return this.mediaSeries;
    }

    //gets related media on a post tags or category
    getRelated(postTags, max: number){
        let videos = this.videoMedia.getRelatedVideos(postTags);
        let songs = this.songMedia.getRelatedSongs(postTags);
        let books = this.bookMedia.getRelatedBooks(postTags);
        this.relatedMedia = this.relatedMedia.concat(videos, songs, books);

        //shuffle the collection and return specified number of itrms
        this.relatedMedia = this.relatedMedia.copyWithin(0, 0, max - 1);
        return this.relatedMedia;
    }

    getAll(number){
        let allMedia = [];
        let videos = this.videoMedia.getVideos();
        let songs = this.songMedia.getSongs();
        let books = this.bookMedia.getBooks();
        allMedia = allMedia.concat(videos, songs, books);

        //shuffle the collection and return specified number of itrms
        this.allMedia = this.allMedia.copyWithin(0, 0, number - 1);
        return this.allMedia;
    }
}