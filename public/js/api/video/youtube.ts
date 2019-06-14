import { IMediaApi } from "../IMediaApi";
export class YoutubeApi implements IMediaApi{
    Resources:{
        url: string
        sub_resource: {}
        param: {}
        type: string
    }
    
    app;
    ajax;
    ID: string  =  this.app.ID;
    KEY: string = this.app.KEY;
    BASE_URL = 'https://www.googleapis.com/youtube/v3/';

    //use youtube api for video list
    //`https://www.googleapis.com/youtube/v3/videos?id=ID&key=KEY&part=snippet,player`
    V_URL = this.BASE_URL + 'videos';

    //use youtube api for search list
    //`https://www.googleapis.com/youtube/v3/search?id=ID&key=KEY&part&`
    S_URL = this.BASE_URL + 'search';
 
    BASE_PARAMS = {
        ID: this.ID,
        KEY: this.KEY,
    }

    relatedVideos: [];
    recentVideos: [];
    postDate = '';
    recentTotal: number;
    searchList = {
        id: {
            kind: "",
            videoId: "",
            channelId: "",
            playlist: "",
        },
        snippet: {
            publishedAt: "",
            channelId: "",
            title: "",
            desciption: "",
            thumbnails: {
                key: {
                    url: "",
                    width: "",
                    height: ""
                }
            }
        },
        channelTitle: "",
        liveBroadcastContent: ""
    };
    videoList = {
        kind: "",
        etag: "",
        nextPageToken: "",
        prevPageToken: "",
        pageInfo: {
            totalREsults: "",
            resultPerPage: "",
        },
        items:[{
            id: "",
            snippet: {
                title: "",
                tags: [],
                publishedAt: "",
                description: "",
                categoryId: "",
                thumbnails: {
                    key: {
                        url: "",
                        width: "",
                        height: ""
                    }
                }
            },
            player: {
                embedHtml:"",
                embedHeight: "",
                embedWidth: ""
            }
        }]
    };

    videos = this.videoList.items;

    //use the video api for all recent videos
    getRecent(){
        let videos
        videos.forEach(function(element) {
            if (element.snippet.publishedAt <= this.postDate){
                this.recentTotal = this.recentVideos.push(element)
            } 
        });
    }
        
    //preparing search query
    getSearchQuery(postTags){
        let query = "";
        postTags.forEach(postTag => {
            query = query + "+" + postTag;
        });
        return query
    }

    //use search api to get videos related to post base on tags
    getRelated(postTag){
        let videoList = this.getVideos(this.relatedURL);
        return videoList.items;
    }
    relatedURL = {
        BASE_URL: this.S_URL,
        PARAMS: {
            id: this.ID,
            key: this.KEY,
            part: 'snippet',
            safeSearch: 'strict',
            type: 'video',
            videoEmbeddable: 'true',
            q: this.getSearchQuery(this.app.postTags),
        }
    }

    //use search api to get list of series videos/episodes
    getSeries(){
        let videoList = this.getVideos(this.seriesURL);
        return videoList.items;
    }
    seriesURL = {
        BASE_URL: this.S_URL,
        PARAMS: {
            id: this.ID,
            key: this.KEY,
            part: 'snippet',
            safeSearch: 'strict',
            type: 'video',
            videoEmbeddable: 'true',
            q: this.getSearchQuery(this.app.PostTag),
            videoType: 'episode'
        }
    }

    popularURL = {}
    /**
     * Returns popular videos in a geographical area
     */
    getPopular(): []{
        let videoList = this.getVideos(this.popularURL);
        return videoList;
    }

    //returns all videos
    allURL = {
        BASE_URL: this.V_URL,
        PARAMS: {
            id: this.ID,
            key: this.KEY,
            part:'snippet'
        }
    }

    getAll(): []{
        let videoList = this.getVideos(this.allURL);
        return videoList.items;
    }

    getVideos(V_URL) {
        let videoList;
        this.ajax.get(V_URL.URL, V_URL.PARAMS)
        .then(function (response) {
            console.log(response);
            videoList = response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            //always execute
        });
        return videoList;
    }

}
