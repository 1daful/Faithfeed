import { IMediaApi } from "../IMediaApi";
import { MediaResource } from "../mediaResource";
export class PaperQuotes implements IMediaApi{
    Resources:{
        url: string
        sub_resource: {}
        param: {}
        type: string
    }
    
    ajax;
    BASE_URL = 'api.paperquotes.com/api/v1';
    BASE_PARAMS: {
        ID;
        KEY;
    };

    filter = {
        categories: '',
        images: '',
        authors: '',
        random: '',
        tags: ''
    }
    mediaRes = new MediaResource();
    Quote_Response: {
        quote: string,
        author: string,
        tags: [],
        image: string
    }
    QOD = {
        url: '/qod',
        sub_type: '',
        params: this.mediaRes.setParams(this.BASE_PARAMS),
    };
    getSearchQuery(){}
    getRelated(){}
    getRecent(){}
    getSeries(){}

    getQOD_URL(quoteType){
        let url
        if(quoteType.sub_url){
            url = this.BASE_URL + quoteType.sub_type
        }
        else{
            url = this.BASE_URL
        }
        return url
    }

}