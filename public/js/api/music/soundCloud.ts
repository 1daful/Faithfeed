import { IMediaApi } from "../IMediaApi";
import { MediaResource } from "../mediaResource";
export class SoundCloud implements IMediaApi{
    mediaRes = new MediaResource()
    BASE_URL = 'api.soundcloud.com';
    BASE_PARAMS: {
        ID,
        KEY,
    };
    
    filters: {
        q: string,
        tags: [],
        filter: [],
        license: string,
        bpm: []
    }
    comments = {};

    Resource = [];
    music = this.mediaRes.createRes('/tracks', this.filters);

    resFilter = {
        q: 'what',
        tags: ['hello', 'world']
    }

    Resources = {
        name: 'music',
        url: '/tracks',
        sub_resource: this.mediaRes.addResources(),
        param: this.mediaRes.setParams(''),
        type: ''
    }
    
    getSearchQuery(){}
    getRelated(postTags){
        this.mediaRes.setFilter(this.resFilter, this.music)
        this.music
    }
    getSeries(){}
    getRecent(){}
}
const enum filters{
    q = 1,
    tags,
    filter,
    license,
    bpm,
}