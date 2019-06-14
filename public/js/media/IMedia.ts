export interface IMedia{
    series: IMedia[];
    all: IMedia[];
    related: IMedia[];
    
    getPopular(max: number);
    getSeries(max: number);
    getRelated(postTags: [], max: number);
    getAll(number);
}