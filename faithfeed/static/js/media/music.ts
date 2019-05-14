class SongMedia implements IMedia {
    constructor(){

    }

    series: [];
    all: [];
    collection: [];
    related: [];
    URL: '';
    PARAMS: {};

    getCollection(authUser){
        
    }
    getPopular(max: number){}
    getSeries(max: number){}
    getRelated(postTags: [], max: number){}
    getAll(number){}
}