class QuoteMedia {
    relatedQuotes = [];
    //quotes of the day
    quotes: [];
    app = '';
    URL;
    PARAMS;

 
    //preparing search query
    getSearchQuery(postTags){
        let query = "";
        postTags.forEach(postTag => {
            query = query + "+" + postTag;
        });
        return query
    }

    getRelated(){
        this.PARAMS = {
            category = 
        }
        axios.get(URL, {params:PARAMS})
                .then(function (response) {
                    this.quotes = response
                })
                .catch(error => console.log(error))
                .finally(function () {
                    this.loading=false
                })
        return this.quotes;
    }
    }
}
