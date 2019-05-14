interface IMedia{
    series: [];
    all: [];
    collection: [];
    related: [];
    URL: string;
    PARAMS: {};

    getCollection(authUser);
    getPopular(max: number);
    getSeries(max: number);
    getRelated(postTags: [], max: number);
    getAll(number);
}