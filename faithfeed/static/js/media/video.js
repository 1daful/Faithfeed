class VideoMedia {
    relatedVideos = [];
    recentVideos = [];
    seriesVideos = [];
    videos = [];
    //use youtube api for video list
    //`https://www.googleapis.com/youtube/v3/videos?id=ID&key=KEY&part=snippet,player`
    V_URL = 'https://www.googleapis.com/youtube/v3/videos'
    V_PARAMS = {
    id: app.ID,
    key: app.KEY,
    part:'snippet'
    }

    //use youtube api for search list
    //`https://www.googleapis.com/youtube/v3/search?id=ID&key=KEY&part&`
    S_URL = `https://www.googleapis.com/youtube/v3/search`

    //use the video api for all recent videos
    getRecentVideos(videos){
        videos.forEach(element => {
            if (element.snippet.publishedAt <= postDate){
                recentTotal = this.recentVideos.push(element)
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
    getRelatedVideos(postTags){
        URL = S_URL;
        S_PARAMS = {
            id: app.ID,
            key: app.KEY,
            part: 'snippet',
            safeSearch: 'strict',
            type: 'video',
            videoEmbeddable: 'true',
            q: getSearchQuery(postTags),
        };
        axios.get(URL, {params:S_PARAMS})
            .then(function (response) {
                this.videoContent = response
            })
            .catch(error => console.log(error))
            .finally(function () {
                this.loading=false
            })
        return videoContent;
    }

    //use search api to get list of series videos/episodes
    getSeriesVideos(){
        URL = S_URL;
        S_PARAMS = {
                id: app.ID,
                key: app.KEY,
                part: 'snippet',
                safeSearch: 'strict',
                type: 'video',
                videoEmbeddable: 'true',
                q: getSearchQuery,
                videoType: 'episode'
        };
        axios.get(URL, {params:S_PARAMS})
                .then(function (response) {
                    this.videoContent = response
                })
                .catch(error => console.log(error))
                .finally(function () {
                    this.loading=false
                })
        return videoContent;
    }

    //returns all videos
    getVideos(){
        return this.videos;
    }

}
