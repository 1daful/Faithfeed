class TSS {
    relatedQuotes = [];
    //quotes of the day
    qod: [];

    BASE_URL = 'https://quotes.rest';
    QOD: {
        url: '/qod.json',
        sub_url: {
            categories: '/categories.json'
        }
        params: {
            category: string
        }
    };
    quote: {
        url: '/quote',
        sub_url: {
            random: '/random.json';
            search: '/search.json';
            categories: 'categories.json'
            authors: '/authors.json'
            images: '/image/search.json'
        }
        params: {
            minlenght: number,
            maxlenght: number,
            start: number,
            category: number,
            author: string
        }
    }

    getQuotesURL(quoteType){
        let Q_URL = this.BASE_URL + quoteType.url;
        if(quoteType === 'quote'){
            Q_URL = Q_URL + quoteType.sub_url.random;
            return Q_URL;
        }
        return Q_URL;
    }

    getQuoteURL(quoteType, sub_url: string){
        let URL;
        let subUrl = Object.keys(quoteType.sub_url);
        subUrl.forEach(element => {
            if(element === sub_url){
                URL = this.getQuotesURL(quoteType) + quoteType.sub_url + element;
                return URL;
            }
        });
        console.log("the types of quotes provided cannot be found");
    }

    attribution = `<span style="z-index: 50; font-size: 0.9em;">
    <img src="https://theysaidso.com/branding/theysaidso.png"
    height="20" width="20" alt="theusaidso.com" />
    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style="color: #9fcc25; margin-left: 4px; vertical-align: middle;">
    theysaidso.com</a>
    </span>`

    setParam(params){
           
    }
}
