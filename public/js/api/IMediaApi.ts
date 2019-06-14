export interface IMediaApi {
    BASE_URL: string;
    
    BASE_PARAMS: {
        ID: string;
        KEY: string;
    }

    Resources:{
        name: string
        url: string
        sub_resource: {}
        param: {}
        type: string
    }

    getRelated(postTag);
    getRecent();
    getSeries();
    getSearchQuery(postTag)
}