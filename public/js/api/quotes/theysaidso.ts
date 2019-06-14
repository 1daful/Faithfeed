import { IMediaApi } from "../IMediaApi";
class TheySaidSo implements IMediaApi{
    Resources:{
        url: string
        sub_resource: {}
        param: {}
        type: string
    }
    
    BASE_URL = 'https://quotes.rest';
    BASE_PARAMS: {
        ID;
        KEY
    }
    QOD: {
        url: '/qod.json',
        param: {},
        type,
        sub_resource
    }; 
    quote: {
        url: '/quote',
    }

    filter = {
        categories: '',
        images: '',
        authors: '',
        random: ''
    }

    sub_url:{
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
        category: string,
        author: string
    }
    /**
     * Returns quotes specified by quoteType.
     * @param quoteType The type of quotes whose BASE_URL to be returned.
     */
    getQuotesURL(quoteType){
        let Q_URL = this.BASE_URL + quoteType.url;
        if(quoteType === 'quote'){
            Q_URL = Q_URL + quoteType.sub_url.random;
            return Q_URL;
        }
        return Q_URL;
    }

    /**
     * Returns quotes specified by quoteType and filtered by sub_url.
     * @param quoteType The tyoe of quotes whose BASE_URL to be returned.
     * @param sub_url The SUB_URL of a quoteType that specify the part or filter.
     */
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

    getRelated(){};
    getRecent(){};
    getSeries(){};
    getSearchQuery(){}
}
