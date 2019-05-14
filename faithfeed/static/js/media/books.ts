class BookMedia implements IMedia{
    URL = 'https//googleapis.com/books/v1/volumes'
    volumeId: ''
    PARAMS = {
        q: '',
        key: '',
        searchKeyWords: {
            intitle: '',
            inauthor: '',
            inpublisher: '',
            subject: '',
            isbn: '',
            lccn: '',
            oclc: ''
        },
        optional: {
            download: '',
            filter: '',
            printType: '',
            projection: '',
            sorting: '',
        }
    }

    series: [];
    all: [];
    collection: [];
    related: [];

    getCollection(authUser){}
    getPopular(max: number){}
    getSeries(max: number){}
    getRelated(postTags: [], max: number){}
    getAll(number){}

    getSearchQuery(searchWord, key){
        this.PARAMS.q = searchWord + key
    }
}