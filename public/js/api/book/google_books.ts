class BookMedia {
    URL = 'https//googleapis.com/books/v1/volumes'
    volumeId: ''
    PARAMS = {
        q: '',
        key: app.KEY,
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
            filter: {
                partial: 'partial',
                full: 'full',
                free_ebooks: 'free-ebooks',
                paid_ebooks: 'paid-ebooks',
                ebooks: 'ebooks'
            },
            printType: {
                all:'all',
                books: 'books',
                magazines: 'magazines'
            },
            projection: {
                full: 'full',
                lite: 'lite'
            },
            orderBy: {
                relevance: 'relevance',
                newest: 'newest'
            },
        }
    }

    volume = {
        name:''
    }

    getSearchQuery(searchWord, key){
        this.PARAMS.q = searchWord + key
    }

    setParams(){
        
    }
}